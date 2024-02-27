import { InputSelect } from 'components/common/forms/input-select';
import * as Select from 'components/park-ui/select';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import { fileUploadCatalogThumbnailAcceptedFileTypes } from 'lib/consts/media-types';
import React from 'react';
import { VStack } from 'styled-system/jsx';

const catalogTypeOptions = Object.keys(
  fileUploadCatalogThumbnailAcceptedFileTypes,
).map((type) => ({
  value: type,
  label: type,
}));

export const InputSelectCatalogType = () => {
  const [field, meta, helpers] = useField('type');

  const onChange: Select.RootProps['onValueChange'] = (e) => {
    void helpers.setValue(e?.value?.[0]);
  };

  return (
    <VStack gap={2}>
      <InputSelect
        defaultValue={field.value ? [field.value] : undefined}
        id="type"
        groupLabel="Castalog type"
        placeholder="Select a catalog type"
        onValueChange={onChange}
        items={catalogTypeOptions}
      />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
