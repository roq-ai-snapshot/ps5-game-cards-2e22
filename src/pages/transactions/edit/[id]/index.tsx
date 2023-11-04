import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useTransactionFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { transactionValidationSchema } from 'validationSchema/transactions';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GameCardInterface } from 'interfaces/game-card';

function TransactionEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'transaction',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useTransactionFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: TransactionInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.transaction.update({
        data: values as RoqTypes.transaction,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/transactions');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<TransactionInterface>({
    initialValues: data,
    validationSchema: transactionValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Transactions',
              link: '/transactions',
            },
            {
              label: 'Update Transaction',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Transaction
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="transaction_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Transaction Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.transaction_date ? new Date(formik.values?.transaction_date) : null}
              onChange={(value: Date) => formik.setFieldValue('transaction_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.transaction_type}
            label={'Transaction Type'}
            props={{
              name: 'transaction_type',
              placeholder: 'Transaction Type',
              value: formik.values?.transaction_type,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Transaction Amount"
            formControlProps={{
              id: 'transaction_amount',
              isInvalid: !!formik.errors?.transaction_amount,
            }}
            name="transaction_amount"
            error={formik.errors?.transaction_amount}
            value={formik.values?.transaction_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('transaction_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.payment_method}
            label={'Payment Method'}
            props={{
              name: 'payment_method',
              placeholder: 'Payment Method',
              value: formik.values?.payment_method,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.billing_address}
            label={'Billing Address'}
            props={{
              name: 'billing_address',
              placeholder: 'Billing Address',
              value: formik.values?.billing_address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.shipping_address}
            label={'Shipping Address'}
            props={{
              name: 'shipping_address',
              placeholder: 'Shipping Address',
              value: formik.values?.shipping_address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<GameCardInterface>
            formik={formik}
            name={'game_card_id'}
            label={'Select Game Card'}
            placeholder={'Select Game Card'}
            fetcher={() => roqClient.game_card.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/transactions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'transaction',
    operation: AccessOperationEnum.UPDATE,
  }),
)(TransactionEditPage);
