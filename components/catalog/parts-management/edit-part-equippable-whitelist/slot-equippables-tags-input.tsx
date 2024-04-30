import { TagsInputField } from 'components/common/forms/tags-input-field';
import type * as TagsInput from 'components/park-ui/tags-input';
import { isAddress } from 'viem';

export const SlotEquippablesTagsInput = () => {
  const validateFunction: TagsInput.RootProps['validate'] = (details) => {
    console.log('validate', details.inputValue, isAddress(details.inputValue));
    return isAddress(details.inputValue);
  };
  return (
    <TagsInputField
      name="equippable"
      label={'Equippable contracts'}
      validateFunction={validateFunction}
    />
  );
};
