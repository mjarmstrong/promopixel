import type { CellPluginComponentProps } from '@promopixel/editor';
import type { BackgroundSettings } from './settings';
import type { BackgroundState } from './state';

export type BackgroundProps = CellPluginComponentProps<BackgroundState> &
  BackgroundSettings;
