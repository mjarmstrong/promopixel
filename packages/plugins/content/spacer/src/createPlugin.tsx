import type { CellPlugin } from '@promopixel/editor';
import { lazyLoad } from '@promopixel/editor';
import React from 'react';
import { defaultSettings } from './default/settings';

import type { SpacerSettings } from './types/settings';
import type { SpacerState } from './types/state';

const AspectRatio = lazyLoad(() => import('@mui/icons-material/AspectRatio'));
const createPlugin: (settings: SpacerSettings) => CellPlugin<SpacerState> = (
  settings
) => {
  const mergedSettings = { ...defaultSettings, ...settings };

  return {
    Renderer: mergedSettings.Renderer,
    controls: {
      type: 'autoform',
      columnCount: 1,
      schema: {
        required: ['height'],
        type: 'object',
        properties: {
          height: {
            type: 'number',
          },
        },
      },
    },
    id: 'ory/editor/core/content/spacer',
    version: 1,
    icon: <AspectRatio />,
    title: mergedSettings.translations?.pluginName,
    description: mergedSettings.translations?.pluginDescription,
    allowClickInside: true,
    createInitialData: () => ({
      height: 24,
    }),
  };
};

export default createPlugin;
