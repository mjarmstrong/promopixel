import type { CellPluginComponentProps } from '@promopixel/editor';
import type { SpacerState } from './state';
import type { Translations } from './translations';

export interface SpacerSettings {
  Renderer: React.ComponentType<CellPluginComponentProps<SpacerState>>;

  translations?: Translations;
}
