import type { CellPluginComponentProps } from '@promopixel/editor';
import type { SlatePluginDefinition } from './slatePluginDefinitions';
import type { SlateState } from './state';
import type { Translations } from './translations';

export type SlateProps = CellPluginComponentProps<SlateState> & {
  plugins: SlatePluginDefinition[];
  defaultPluginType: string;
  translations?: Translations;
};
