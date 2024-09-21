import * as ParkAlert from 'components/park-ui/alert';
import { InfoIcon } from 'lucide-react';
import type React from 'react';
import type { JSX } from 'react';

type Props = ParkAlert.RootProps & {
  title: string;
  bodyText: string;
  icon?: JSX.Element;
};

export const Alert = ({ bodyText, icon, title, ...props }: Props) => {
  return (
    <ParkAlert.Root {...props}>
      <ParkAlert.Icon asChild>{icon ?? <InfoIcon />}</ParkAlert.Icon>
      <ParkAlert.Content>
        <ParkAlert.Title>{title}</ParkAlert.Title>
        <ParkAlert.Description>{bodyText}</ParkAlert.Description>
      </ParkAlert.Content>
    </ParkAlert.Root>
  );
};
