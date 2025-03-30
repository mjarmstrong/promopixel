import React from 'react';
import { lazyLoad } from '@promopixel/editor';
import createSimpleHtmlBlockPlugin from '../pluginFactories/createSimpleHtmlBlockPlugin';

const BlockquoteIcon = lazyLoad(
  () => import('@mui/icons-material/FormatQuote')
);

export default {
  blockQuote: createSimpleHtmlBlockPlugin({
    type: 'BLOCKQUOTE/BLOCKQUOTE',
    icon: <BlockquoteIcon />,
    label: 'Quote',
    tagName: 'blockquote',
  }),
};
