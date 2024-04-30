import { InputSelect } from 'components/common/forms/input-select';
import { FormLabel } from 'components/park-ui/form-label';
import type * as Select from 'components/park-ui/select';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import React from 'react';
import { VStack } from 'styled-system/jsx';

const partTypeOptions = [
  {
    value: '1',
    label: 'Slot',
  },
  {
    value: '2',
    label: 'Fixed',
  },
];

const fieldName = 'type';

export const InputSelectPartType = () => {
  const [field, meta, helpers] = useField(fieldName);

  const onChange: Select.RootProps['onValueChange'] = (e) => {
    void helpers.setValue(
      e?.value?.[0] ? Number.parseInt(e.value[0]) : undefined,
    );
  };

  return (
    <VStack gap={2} alignItems={'flex-start'}>
      <FormLabel htmlFor={field.name}>Part type</FormLabel>
      <InputSelect
        defaultValue={field.value ? [field.value] : undefined}
        id={fieldName}
        groupLabel="Part type"
        placeholder="Select a part type"
        onValueChange={onChange}
        items={partTypeOptions}
      />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
