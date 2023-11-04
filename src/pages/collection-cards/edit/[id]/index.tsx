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
import { useRoqClient, useCollectionCardFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { collectionCardValidationSchema } from 'validationSchema/collection-cards';
import { CollectionCardInterface } from 'interfaces/collection-card';
import { CollectionInterface } from 'interfaces/collection';
import { GameCardInterface } from 'interfaces/game-card';
import { UserInterface } from 'interfaces/user';

function CollectionCardEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'collection_card',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useCollectionCardFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: CollectionCardInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.collection_card.update({
        data: values as RoqTypes.collection_card,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/collection-cards');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<CollectionCardInterface>({
    initialValues: data,
    validationSchema: collectionCardValidationSchema,
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
              label: 'Collection Cards',
              link: '/collection-cards',
            },
            {
              label: 'Update Collection Card',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Collection Card
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="added_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Added At
            </FormLabel>
            <DatePicker
              selected={formik.values?.added_at ? new Date(formik.values?.added_at) : null}
              onChange={(value: Date) => formik.setFieldValue('added_at', value)}
            />
          </FormControl>

          <NumberInput
            label="Purchase Price"
            formControlProps={{
              id: 'purchase_price',
              isInvalid: !!formik.errors?.purchase_price,
            }}
            name="purchase_price"
            error={formik.errors?.purchase_price}
            value={formik.values?.purchase_price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('purchase_price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Current Value"
            formControlProps={{
              id: 'current_value',
              isInvalid: !!formik.errors?.current_value,
            }}
            name="current_value"
            error={formik.errors?.current_value}
            value={formik.values?.current_value}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('current_value', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.condition}
            label={'Condition'}
            props={{
              name: 'condition',
              placeholder: 'Condition',
              value: formik.values?.condition,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Rating"
            formControlProps={{
              id: 'rating',
              isInvalid: !!formik.errors?.rating,
            }}
            name="rating"
            error={formik.errors?.rating}
            value={formik.values?.rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<CollectionInterface>
            formik={formik}
            name={'collection_id'}
            label={'Select Collection'}
            placeholder={'Select Collection'}
            fetcher={() => roqClient.collection.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<GameCardInterface>
            formik={formik}
            name={'game_card_id'}
            label={'Select Game Card'}
            placeholder={'Select Game Card'}
            fetcher={() => roqClient.game_card.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
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
              onClick={() => router.push('/collection-cards')}
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
    entity: 'collection_card',
    operation: AccessOperationEnum.UPDATE,
  }),
)(CollectionCardEditPage);
