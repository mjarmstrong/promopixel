// The editor core
import type { Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';
import slate, { pluginFactories } from '@promopixel/plugins-slate';
import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';

const cellPlugins = [
  slate((def) => ({
    ...def,
    plugins: {
      ...def.plugins,
      lists: {
        alpha: pluginFactories.createListPlugin({
          type: 'alpha',
          icon: <>a)</>,
          label: 'alphabetic List',
          tagName: 'ol',
          getStyle: () => ({ listStyleType: 'lower-alpha' }),
        }),
        ...def.plugins.lists,
      },
    },
  })),
];
export default function CustomFormLayout() {
  const [value, setValue] = useState<Value>();

  return (
    <PageLayout>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </PageLayout>
  );
}
