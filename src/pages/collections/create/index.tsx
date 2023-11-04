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
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { collectionValidationSchema } from 'validationSchema/collections';
import { UserInterface } from 'interfaces/user';
import { CollectionInterface } from 'interfaces/collection';

function CollectionCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: CollectionInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.collection.create({ data: values as RoqTypes.collection });
      resetForm();
      router.push('/collections');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CollectionInterface>({
    initialValues: {
      name: '',
      description: '',
      total_cards: 0,
      total_value: 0,
      average_rating: 0,
      last_updated_card: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: collectionValidationSchema,
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
              label: 'Collections',
              link: '/collections',
            },
            {
              label: 'Create Collection',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Collection
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Total Cards"
            formControlProps={{
              id: 'total_cards',
              isInvalid: !!formik.errors?.total_cards,
            }}
            name="total_cards"
            error={formik.errors?.total_cards}
            value={formik.values?.total_cards}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_cards', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Total Value"
            formControlProps={{
              id: 'total_value',
              isInvalid: !!formik.errors?.total_value,
            }}
            name="total_value"
            error={formik.errors?.total_value}
            value={formik.values?.total_value}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_value', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Average Rating"
            formControlProps={{
              id: 'average_rating',
              isInvalid: !!formik.errors?.average_rating,
            }}
            name="average_rating"
            error={formik.errors?.average_rating}
            value={formik.values?.average_rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('average_rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="last_updated_card" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Last Updated Card
            </FormLabel>
            <DatePicker
              selected={formik.values?.last_updated_card ? new Date(formik.values?.last_updated_card) : null}
              onChange={(value: Date) => formik.setFieldValue('last_updated_card', value)}
            />
          </FormControl>
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
              onClick={() => router.push('/collections')}
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
    entity: 'collection',
    operation: AccessOperationEnum.CREATE,
  }),
)(CollectionCreatePage);
