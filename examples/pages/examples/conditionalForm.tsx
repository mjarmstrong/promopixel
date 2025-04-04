import React, { useState } from 'react';

// The editor core
import type { CellPlugin, Value } from '@promopixel/editor';

import Editor from '@promopixel/editor';

import PageLayout from '../../components/PageLayout';

const customPlugin: CellPlugin<{
  withImage: boolean;
  imageUrl?: string;
}> = {
  id: 'mycustomplugin',
  title: 'my custom plugin with conditional form',
  Renderer: ({ data }) => (
    <div>
      {data.withImage ? (
        <p>
          with image: <img src={data.imageUrl} />
        </p>
      ) : (
        <p>without image</p>
      )}
    </div>
  ),
  version: 1,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        withImage: {
          type: 'boolean',
        },
        imageUrl: {
          type: 'string',
          uniforms: {
            showIf: (data) => data.withImage,
          },
        },
      },
    },
  },
};
const cellPlugins = [customPlugin];

export default function SimpleExample() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <PageLayout>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </PageLayout>
  );
}
