'use client';

import { FileUploadDropzone } from 'components/common/forms/file-upload-dropzone';
import { InputField } from 'components/common/forms/input-field';
import { Button } from 'components/park-ui/button';
import { Form, Formik } from 'formik';
import type { CatalogSchema } from 'lib/catalog/deploy-catalog/deploy-catalog-form/deploy-catalog-form-schema';
import {
  fileUploadCatalogThumbnailAcceptedFileTypes,
  supportedCatalogImageMimeTypes,
} from 'lib/consts/media-types';
import React from 'react';
import { Box, VStack } from 'styled-system/jsx';
import * as yup from 'yup';
import { InputSelect } from 'components/common/forms/input-select';
import { InputSelectCatalogType } from 'components/catalog/deploy-catalog/input-select-catalog-type';

export type DeployCatalogFormFields = {
  type: CatalogSchema['type'] | '';
  name: string;
  files: File[];
};

const DeployCatalogFormSchema = yup.object().shape({
  name: yup.string().min(3).max(100).required(),
  type: yup.string().oneOf(supportedCatalogImageMimeTypes).defined().required(),
  files: yup.array().of(yup.mixed()).min(1).max(1).required(),
});

const initialValues: DeployCatalogFormFields = {
  name: '',
  type: '',
  files: [],
};

type Props = {
  onSubmit: (deployCatalogFormFields: DeployCatalogFormFields) => Promise<void>;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const DeployCatalogForm = ({
  onSubmit,
  isDisabled,
  isLoading,
}: Props) => {
  const formId = 'deploy-catalog-form';

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={DeployCatalogFormSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={false}
      validateOnMount={false}
    >
      {({ errors, submitForm, isSubmitting, handleSubmit }) => (
        <Form id={formId} onSubmit={handleSubmit}>
          {errors && <Box>{JSON.stringify(errors)}</Box>}
          <VStack gap={8}>
            <InputField name="name" label="Catalog name" />
            <InputSelectCatalogType />
            <FileUploadDropzone
              name="files"
              label="Catalog thumbnail"
              maxFiles={1}
              accept={fileUploadCatalogThumbnailAcceptedFileTypes}
            />
            <Button
              type="submit"
              disabled={isLoading || isDisabled || isSubmitting}
            >
              Deploy Catalog contract
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
