import React, { useState } from 'react';

// The editor core
import type { Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@promopixel/editor/lib/index.css';

// The rich text area plugin
import slate from '@promopixel/plugins-slate2';
// image
import image from '@promopixel/plugins-image';
import PageLayout from '../../components/PageLayout';

// Stylesheets for the rich text area plugin
// uncomment this
//import '@promopixel/plugins-slate2/lib/index.css';

// Stylesheets for the imagea plugin
//import '@promopixel/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), image];

export default function SimpleExample() {
  const [value, setValue] = useState<Value | null>(null);
  const [value2, setValue2] = useState<Value | null>(null);

  return (
    <PageLayout>
      <Editor
        lang="en"
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
      />
      <Editor
        lang="en"
        cellPlugins={cellPlugins}
        value={value2}
        onChange={setValue2}
      />
    </PageLayout>
  );
}
