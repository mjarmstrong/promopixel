import React, { useState } from 'react';

// The editor core
import type { Value } from '@promopixel/editor';
import Editor, { createValue } from '@promopixel/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@promopixel/editor/lib/index.css';

// The rich text area plugin
import slate from '@promopixel/plugins-slate';

import PageLayout from '../../components/PageLayout';
import customContentPlugin from '../../plugins/customContentPlugin';

// Stylesheets for the rich text area plugin
// uncomment this
//import '@promopixel/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
//import '@promopixel/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), customContentPlugin];

const INITIAL_VALUE = createValue(
  {
    rows: [
      [
        {
          plugin: customContentPlugin,
        },
      ],
    ],
  },
  {
    cellPlugins,
    lang: 'default',
  }
);
export default function MultiControls() {
  const [value, setValue] = useState<Value>(INITIAL_VALUE);

  return (
    <PageLayout>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </PageLayout>
  );
}
