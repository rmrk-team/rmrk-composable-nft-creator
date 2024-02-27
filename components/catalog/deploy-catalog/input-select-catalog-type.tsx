import { InputSelect } from 'components/common/forms/input-select';
import { FormLabel } from 'components/park-ui/form-label';
import * as Select from 'components/park-ui/select';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import { fileUploadCatalogPartAcceptedFileTypes } from 'lib/consts/media-types';
import React from 'react';
import { VStack } from 'styled-system/jsx';

const catalogTypeOptions = Object.keys(
  fileUploadCatalogPartAcceptedFileTypes,
).map((type) => ({
  value: type,
  label: type,
}));

const fieldName = 'type';

export const InputSelectCatalogType = () => {
  const [field, meta, helpers] = useField(fieldName);

  const onChange: Select.RootProps['onValueChange'] = (e) => {
    void helpers.setValue(e?.value?.[0]);
  };

  return (
    <VStack gap={2}>
      <FormLabel htmlFor={field.name}>Catalog type</FormLabel>
      <InputSelect
        defaultValue={field.value ? [field.value] : undefined}
        id={fieldName}
        groupLabel="Catalog type"
        placeholder="Select a catalog type"
        onValueChange={onChange}
        items={catalogTypeOptions}
      />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
