import { NumberInput, NumberInputProps } from 'components/park-ui/number-input';

import { FormLabel } from 'components/park-ui/form-label';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import React from 'react';
import { VStack } from 'styled-system/jsx';

type Props = {
  name: string;
  label: string;
  max?: number;
  min?: number;
};

export const InputFieldNumber = ({ name, label, max, min }: Props) => {
  const [field, meta, helpers] = useField(name);

  const onValueChange: NumberInputProps['onValueChange'] = (details) => {
    const newValue = !Number.isNaN(details.valueAsNumber) ? details.valueAsNumber : undefined;

    if (!Object.is(newValue, field.value)) {
      helpers.setValue(newValue);
    }
  };

  return (
    <VStack gap={1} alignItems={'flex-start'}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <NumberInput {...field} max={max} min={min} onValueChange={onValueChange} />
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
