import { Portal } from '@ark-ui/react';
import * as Combobox from 'components/park-ui/combobox';

type Props = {
  partIds: bigint[];
};

export const PickPartIdsComboBox = ({ partIds }: Props) => {
  const items = partIds.map((partId) => partId.toString());
  return (
    <Combobox.Root items={items} lazyMount unmountOnExit>
      <Combobox.Label>Pick part id</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger>Open</Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup id={'partIds'}>
              <Combobox.ItemGroupLabel htmlFor={'partIds'}>
                Pick part ids
              </Combobox.ItemGroupLabel>
              {items.map((item) => (
                <Combobox.Item key={item} item={item}>
                  <Combobox.ItemText>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
