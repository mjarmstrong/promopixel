import React from 'react';

import type { BackgroundSettings } from './types/settings';
import type { BackgroundState } from './types/state';

import { defaultSettings } from './default/settings';
import type { CellPlugin } from '@promopixel/editor';
import { lazyLoad } from '@promopixel/editor';

const Icon = lazyLoad(() => import('@mui/icons-material/CropLandscape'));

const createPlugin = (settings: BackgroundSettings) => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const Controls = mergedSettings.Controls;
  const Renderer = mergedSettings.Renderer;

  const plugin: CellPlugin<BackgroundState> = {
    controls: {
      type: 'custom',
      Component: (props) => <Controls {...props} {...mergedSettings} />,
    },
    Renderer: (props) => <Renderer {...props} {...mergedSettings} />,

    id: 'ory/editor/core/layout/background',
    version: 1,

    title: mergedSettings.translations?.pluginName,
    description: mergedSettings.translations?.pluginDescription,
    icon: <Icon />,

    createInitialChildren: settings.getInitialChildren,
    cellStyle: mergedSettings.cellStyle,
  };
  return plugin;
};

export default createPlugin;
