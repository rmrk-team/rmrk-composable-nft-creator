'use client';

import { Carousel } from '@ark-ui/react/carousel';
import { createStyleContext } from 'lib/panda/create-style-context';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { carousel } from 'styled-system/recipes';

const { withProvider, withContext } = createStyleContext(carousel);

export const Root = withProvider(styled(Carousel.Root), 'root');
export const Control = withContext(styled(Carousel.Control), 'control');
export const Indicator = withContext(styled(Carousel.Indicator), 'indicator');
export const IndicatorGroup = withContext(
  styled(Carousel.IndicatorGroup),
  'indicatorGroup',
);
export const Item = withContext(styled(Carousel.Item), 'item');
export const ItemGroup = withContext(styled(Carousel.ItemGroup), 'itemGroup');
export const NextTrigger = withContext(
  styled(Carousel.NextTrigger),
  'nextTrigger',
);
export const PrevTrigger = withContext(
  styled(Carousel.PrevTrigger),
  'prevTrigger',
);
export const Viewport = withContext(styled(Carousel.Viewport), 'viewport');

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface IndicatorGroupProps
  extends ComponentProps<typeof IndicatorGroup> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface NextTriggerProps extends ComponentProps<typeof NextTrigger> {}
export interface PrevTriggerProps extends ComponentProps<typeof PrevTrigger> {}
export interface ViewportProps extends ComponentProps<typeof Viewport> {}
