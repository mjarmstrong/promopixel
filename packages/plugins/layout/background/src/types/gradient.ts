import type { RGBColor } from '@promopixel/editor';

export type Gradient = {
  opacity: number;
  deg: number;
  colors?: { color?: RGBColor }[];
};
