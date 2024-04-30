import { Button } from 'components/park-ui/button';
import { FormLabel } from 'components/park-ui/form-label';
import { IconButton } from 'components/park-ui/icon-button';
import * as TagsInput from 'components/park-ui/tags-input';
import { Text } from 'components/park-ui/text';
import { useField } from 'formik';
import { XIcon } from 'lucide-react';
import React from 'react';
import { VStack } from 'styled-system/jsx';

type Props = {
  name: string;
  label: string;
  validateFunction?: TagsInput.RootProps['validate'];
};

export const TagsInputField = ({ name, label, validateFunction }: Props) => {
  const [field, meta, helpers] = useField(name);

  const onValueChange: TagsInput.RootProps['onValueChange'] = (details) => {
    // details.value - array of all values
    console.log('onValueChange', details.value);
    void helpers.setValue(details.value);
  };

  return (
    <VStack gap={1} textAlign={'left'} alignItems={'flex-start'}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <TagsInput.Root
        validate={validateFunction}
        onValueChange={onValueChange}
        addOnPaste
      >
        {(api) => (
          <>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger asChild>
                      <IconButton variant="link" size="xs">
                        <XIcon />
                      </IconButton>
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="Add Framework" />
            </TagsInput.Control>
            <TagsInput.ClearTrigger asChild>
              <Button variant="outline">Clear</Button>
            </TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Root>
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
    </VStack>
  );
};
