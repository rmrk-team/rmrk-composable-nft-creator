'use client';

import React from 'react';
import { Box, VStack } from 'styled-system/jsx';
import { Form, Formik } from 'formik';
import type { CatalogSchema } from 'lib/catalog/deploy-catalog/deploy-catalog-form/deploy-catalog-form-schema';
import * as yup from 'yup';
import {fileUploadCatalogThumbnailAcceptedFileTypes, supportedCatalogImageMimeTypes} from 'lib/consts/media-types';
import { Input } from 'components/park-ui/input';
import { Label } from 'components/park-ui/select';
import { InputField } from 'components/common/forms/input-field';
import {FileUploadDropzone} from "components/common/forms/file-upload-dropzone";
import {Button} from "components/park-ui/button";

export type DeployCatalogFormFields = {
  type: CatalogSchema['type'] | '';
  name: string;
  description: string;
  image: string;
  files: File[];
};

const DeployCatalogFormSchema = yup.object().shape({
  name: yup.string().min(3).max(100).required(),
  description: yup.string().required(),
  image: yup.string().required(),
  type: yup.string().oneOf(supportedCatalogImageMimeTypes).defined().required(),
  files: yup.array().of(yup.mixed()).min(1).max(1).required(),
});

const initialValues: DeployCatalogFormFields = {
  name: '',
  description: '',
  image: '',
  type: '',
  files: [],
};

type Props = {
  onSubmit: (deployCatalogFormFields: DeployCatalogFormFields) => void;
};

export const DeployCatalogForm = ({ onSubmit }: Props) => {
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
      {({ errors, submitForm }) => (
        <Form id={formId}>
          <VStack gap={8}>
            <InputField name="name" label="Catalog name" />
            <FileUploadDropzone name="image" label="Catalog thumbnail" maxFiles={1} accept={fileUploadCatalogThumbnailAcceptedFileTypes} />
            <Button type="submit">Deploy Catalog contract</Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
