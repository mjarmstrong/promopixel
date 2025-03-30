import type { CellPluginComponentProps } from '@promopixel/editor';
import type { Translations } from './translations';

export interface DividerSettings {
  Renderer: React.ComponentType<CellPluginComponentProps>;
  translations?: Translations;
}
