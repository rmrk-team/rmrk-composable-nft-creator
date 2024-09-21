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
// import * as Alert from 'components/park-ui/alert';
// import { AlertCircle } from 'lucide-react';

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


const getCatalogPartFormSchema = (isDirectIpfsMetadataUri: boolean) => {
  return yup.object().shape({
    type: yup.number().oneOf(catalogPartTypes).defined().required().nullable(),
    z: yup.number().min(0).defined().required().nullable(),
    equippable: yup.array().of(yup.string()).optional().nullable(),
    metadataFields: yup.object().shape({
      description: yup.string().optional().nullable(),
      mediaFiles: yup.array().of(yup.mixed()).min(1).max(1).optional().nullable(),
      mediaUri: yup.string().optional().nullable(),
      name: isDirectIpfsMetadataUri ? yup.string().min(3).max(100).optional().nullable() : yup.string().min(3).max(100).required().nullable(),
    }),
    metadataUri: isDirectIpfsMetadataUri ? yup.string().required().nullable() : yup.string().optional().nullable(),
  });
}

// const AddCatalogPartFormSchema = yup.object().shape({
//   type: yup.number().oneOf(catalogPartTypes).defined().required().nullable(),
//   z: yup.number().min(0).defined().required().nullable(),
//   equippable: yup.array().of(yup.string()).optional().nullable(),
//   metadataFields: yup.object().shape({
//     description: yup.string().optional().nullable(),
//     mediaFiles: yup.array().of(yup.mixed()).min(1).max(1).optional().nullable(),
//     mediaUri: yup.string().optional().nullable(),
//     name: yup.string().min(3).max(100).required().nullable(),
//   }),
//   metadataUri: yup.string().optional().nullable(),
// });

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

  const [isUseCustomIpfsUri, setIsUseCustomIpfsUri] = React.useState(false);

  const schema = getCatalogPartFormSchema(isUseCustomIpfsUri);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={false}
      validateOnMount={false}
    >
      {({ errors, submitForm, isSubmitting, handleSubmit, values }) => (
        <Form id={formId} onSubmit={handleSubmit}>
          <VStack gap={8} alignItems={'flex-start'} textAlign={'left'}>
            <InputSelectPartType />
            <PartMetadataFields partType={values.type} setIsUseCustomIpfsUri={setIsUseCustomIpfsUri} isUseCustomIpfsUri={isUseCustomIpfsUri} />
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
            {/*{errors && !!Object.values(errors)[0] && (*/}
            {/*  <Alert.Root>*/}
            {/*    <Alert.Icon asChild>*/}
            {/*      <AlertCircle />*/}
            {/*    </Alert.Icon>*/}
            {/*    <Alert.Title>{JSON.stringify(errors)}</Alert.Title>*/}
            {/*  </Alert.Root>*/}
            {/*)}*/}

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
