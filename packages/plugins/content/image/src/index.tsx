import type { CellPlugin } from '@promopixel/editor';
import { lazyLoad, ImageUploadType } from '@promopixel/editor';
import createPlugin from './createPlugin';
import ImageHtmlRenderer from './Renderer/ImageHtmlRenderer';
import type { ImageSettings } from './types/settings';
import type { ImageState } from './types/state';

const ImageControls = lazyLoad(() => import('./Controls/ImageControls'));

const imagePlugin: (
  settings?: Partial<ImageSettings>
) => CellPlugin<ImageState> = (settings) =>
  createPlugin({
    Renderer: ImageHtmlRenderer,
    Controls: ImageControls,
    ...settings,
  });

const image = imagePlugin();
export default image;
export { ImageUploadType };
export { imagePlugin };
