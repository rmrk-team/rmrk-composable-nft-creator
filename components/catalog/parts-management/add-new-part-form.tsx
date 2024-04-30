import type { Address } from 'abitype';
import { SlotEquippablesTagsInput } from 'components/catalog/parts-management/edit-part-equippable-whitelist/slot-equippables-tags-input';
import { InputSelectPartType } from 'components/catalog/parts-management/input-select-part-type';
import { FileUploadDropzone } from 'components/common/forms/file-upload-dropzone';
import { InputField } from 'components/common/forms/input-field';
import { InputFieldNumber } from 'components/common/forms/input-field-number';
import { Button } from 'components/park-ui/button';
import { Text } from 'components/park-ui/text';
import { Form, Formik } from 'formik';
import {
  catalogPartTypes,
  fileUploadCatalogPartAcceptedFileTypes,
} from 'lib/consts/media-types';
import React from 'react';
import { Divider, Stack, VStack } from 'styled-system/jsx';
import * as yup from 'yup';

export type AddCatalogPartFormFields = {
  type: 1 | 2 | undefined; // 0 = None, 1 = Slot, 2 = Fixed
  name: string | undefined;
  mediaFiles: File[] | undefined;
  z: number | undefined; // z-index
  description?: string;
  equippable?: Address[];
};

const AddCatalogPartFormSchema = yup.object().shape({
  name: yup.string().min(3).max(100).required().nullable(),
  type: yup.number().oneOf(catalogPartTypes).defined().required().nullable(),
  mediaFiles: yup.array().of(yup.mixed()).min(1).max(1).optional().nullable(),
  z: yup.number().min(0).defined().required().nullable(),
  description: yup.string().optional().nullable(),
  equippable: yup.array().of(yup.string()).optional().nullable(),
});

const initialValues: AddCatalogPartFormFields = {
  name: undefined,
  type: undefined,
  mediaFiles: undefined,
  z: undefined,
  equippable: undefined,
};

type Props = {
  onSubmit: (
    addCatalogPartFormFields: AddCatalogPartFormFields,
  ) => Promise<void>;
  onCancel: () => void;
};

export const AddNewPartForm = ({ onSubmit, onCancel }: Props) => {
  const formId = 'add-new-part-form';

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddCatalogPartFormSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={false}
      validateOnMount={false}
    >
      {({ errors, submitForm, isSubmitting, handleSubmit, values }) => (
        <Form id={formId} onSubmit={handleSubmit}>
          <VStack gap={8} alignItems={'flex-start'} textAlign={'left'}>
            <InputField name="name" label="Part name" />
            <InputSelectPartType />
            <FileUploadDropzone
              name="mediaFiles"
              label="Part media"
              maxFiles={1}
              accept={fileUploadCatalogPartAcceptedFileTypes}
            />
            <InputFieldNumber name="z" label="Z-index" />
            {values.type === 1 && (
              <>
                <Divider orientation={'horizontal'} />
                <VStack gap={1} textAlign={'left'} alignItems={'flex-start'}>
                  <SlotEquippablesTagsInput />
                  <Text size={'sm'}>
                    Whitelist collections contract addresses which NFTs can be
                    equipped into this slot. (You can edit this later)
                  </Text>
                </VStack>
              </>
            )}
          </VStack>
          <Stack gap="3" direction="row" width="full" mt={10}>
            <Button
              variant="outline"
              width="full"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>

            <Button width="full" type="submit" disabled={isSubmitting}>
              Add Part
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
