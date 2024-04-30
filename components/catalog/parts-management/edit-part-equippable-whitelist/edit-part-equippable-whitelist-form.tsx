import type { Address } from 'abitype';
import { SlotEquippablesTagsInput } from 'components/catalog/parts-management/edit-part-equippable-whitelist/slot-equippables-tags-input';
import { SwitchField } from 'components/common/forms/switch-field';
import { Button } from 'components/park-ui/button';
import { Text } from 'components/park-ui/text';
import { Form, Formik } from 'formik';
import React from 'react';
import { Divider, Stack, VStack } from 'styled-system/jsx';
import * as yup from 'yup';

export type EditSlotEquippableFormFields = {
  equippableToAll?: boolean;
  equippable?: Address[];
};

const EditSlotEquippableFormSchema = yup.object().shape({
  equippableToAll: yup.boolean().optional().nullable(),
  equippable: yup.array().of(yup.string()).optional().nullable(),
});

const defaultInitialValues: EditSlotEquippableFormFields = {
  equippableToAll: undefined,
  equippable: undefined,
};

type Props = {
  onSubmit: (
    editSlotEquippableFormFields: EditSlotEquippableFormFields,
  ) => Promise<void>;
  onCancel: () => void;
  initialValues?: EditSlotEquippableFormFields;
};

export const EditSlotEquippableForm = ({
  onSubmit,
  onCancel,
  initialValues,
}: Props) => {
  const formId = 'edit-slot-equippable-form';

  const initialValuesMerged = { ...defaultInitialValues, ...initialValues };

  return (
    <Formik
      initialValues={initialValuesMerged}
      validationSchema={EditSlotEquippableFormSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={false}
      validateOnMount={false}
    >
      {({ errors, submitForm, isSubmitting, handleSubmit }) => (
        <Form id={formId} onSubmit={handleSubmit}>
          <VStack gap={8} alignItems={'flex-start'} textAlign={'left'}>
            <SlotEquippablesTagsInput />
            <Divider orientation={'horizontal'} />
            <VStack gap={1} textAlign={'left'} alignItems={'flex-start'}>
              <SwitchField
                name={'equippableToAll'}
                label={'Equippable for all'}
              />
              <Text size={'sm'}>
                Allows NFT from any collection to be equipped in this slot
              </Text>
            </VStack>
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
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
