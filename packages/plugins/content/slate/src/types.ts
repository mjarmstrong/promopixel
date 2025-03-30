import type { DataTType } from '@promopixel/editor';

export type Data = DataTType;
export type CustomText = {
  text: string;
  data?: Data;
  type?: string;
};
