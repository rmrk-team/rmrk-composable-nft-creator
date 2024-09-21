import type { Address } from 'abitype';
import { SlotEquippablesTagsInput } from 'components/catalog/parts-management/edit-part-equippable-whitelist/slot-equippables-tags-input';
import { InputSelectPartType } from 'components/catalog/parts-management/input-select-part-type';
import { PartMetadataFields } from 'components/catalog/parts-management/part-metadata-fields';
import { InputFieldNumber } from 'components/common/forms/input-field-number';
import { Button } from 'components/park-ui/button';
import { Text } from 'components/park-ui/text';
import { Form, Formik } from 'formik';
import { catalogPartTypes } from 'lib/consts/media-types';
import React from 'react';
import { Divider, Stack, VStack } from 'styled-system/jsx';
import * as yup from 'yup';

export type AddCatalogPartFormFields = {
  type: 1 | 2 | undefined; // 0 = None, 1 = Slot, 2 = Fixed
  z: number | undefined; // z-index
  metadataFields: {
    name: string | undefined;
    mediaFiles: File[] | undefined;
    mediaUri: string | undefined;
    description?: string;
  };
  equippable?: Address[];
  metadataUri?: string;
};

const AddCatalogPartFormSchema = yup.object().shape({
  type: yup.number().oneOf(catalogPartTypes).defined().required().nullable(),
  z: yup.number().min(0).defined().required().nullable(),
  equippable: yup.array().of(yup.string()).optional().nullable(),
  metadataFields: yup.object().shape({
    description: yup.string().optional().nullable(),
    mediaFiles: yup.array().of(yup.mixed()).min(1).max(1).optional().nullable(),
    mediaUri: yup.string().optional().nullable(),
    name: yup.string().min(3).max(100).required().nullable(),
  }),
  metadataUri: yup.string().optional().nullable(),
});

export const initialPartMetadataFields = {
  name: undefined,
  mediaFiles: undefined,
  description: undefined,
  mediaUri: undefined,
};

const initialValues: AddCatalogPartFormFields = {
  type: undefined,
  metadataFields: initialPartMetadataFields,
  z: undefined,
  equippable: undefined,
  metadataUri: undefined,
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
            <InputSelectPartType />
            <PartMetadataFields partType={values.type} />
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
