import type {
  CellPluginComponentProps,
  ImageUploadType,
} from '@promopixel/editor';

import type { ImageState } from './state';
import type { Translations } from './translations';

export type ImageControlType = React.ComponentType<
  CellPluginComponentProps<ImageState> & {
    imageUpload?: ImageUploadType;
    translations?: Translations;
  }
>;
