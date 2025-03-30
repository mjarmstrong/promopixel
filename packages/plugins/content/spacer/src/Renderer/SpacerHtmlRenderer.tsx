import type { CellPluginComponentProps } from '@promopixel/editor';
import { lazyLoad } from '@promopixel/editor';

import React from 'react';
import type { SpacerState } from '../types/state';

const SpacerResizable = lazyLoad(() => import('./SpacerResizable'));
const SpacerHtmlRenderer: React.FC<CellPluginComponentProps<SpacerState>> = (
  props
) => {
  return (
    <div className={'react-page-plugins-content-spacer'}>
      {props.isEditMode ? (
        <SpacerResizable {...props} />
      ) : (
        <div style={{ height: `${(props.data?.height || 0).toString()}px` }} />
      )}
    </div>
  );
};

export default SpacerHtmlRenderer;
