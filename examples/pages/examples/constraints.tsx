import React, { useState } from 'react';

// The editor core
import type { CellPlugin, Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';

// The rich text area plugin
import slate from '@promopixel/plugins-slate';
// image
import image from '@promopixel/plugins-image';
import PageLayout from '../../components/PageLayout';
// Stylesheets for the rich text area plugin
// uncomment this
//import '@promopixel/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
//import '@promopixel/plugins-image/lib/index.css';

// Define which plugins we want to use.

const aPlugin: CellPlugin = {
  id: 'some-plugin',
  title: 'Some plugin with child constraints',
  Renderer: (props) => (
    <div style={{ border: '5px solid black' }}>{props.children}</div>
  ),
  childConstraints: {
    maxChildren: 1,
  },
  version: 1,
  cellStyle: {
    padding: 0,
  },
};
const cellPlugins = [slate(), image, aPlugin];

export default function SimpleExample() {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <PageLayout>
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        childConstraints={{ maxChildren: 1 }}
      />
    </PageLayout>
  );
}
