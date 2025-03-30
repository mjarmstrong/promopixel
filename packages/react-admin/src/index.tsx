import { lazyLoad } from '@promopixel/editor';

// lazyload everything to avoid accidental bundle size increase
export const RaReactPageInput = lazyLoad(() => import('./RaReactPageInput'));
export const RaSelectReferenceInputField = lazyLoad(
  () => import('./RaSelectReferenceInputField')
);
