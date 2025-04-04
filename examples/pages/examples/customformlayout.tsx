import React, { useState } from 'react';
import { AutoFields } from '@promopixel/editor';
// The editor core
import type { Value, CellPlugin } from '@promopixel/editor';
import Editor, { createValue } from '@promopixel/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@promopixel/editor/lib/index.css';

// The rich text area plugin
import slate from '@promopixel/plugins-slate';

import PageLayout from '../../components/PageLayout';

const customContentPluginWithSpecialForm: CellPlugin<{
  firstName: string;
  lastName: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  age: number;
}> = {
  Renderer: ({ data }) => (
    <div>
      <h3>Name</h3>
      <p>
        Firstname: {data.firstName}
        <br />
        Lastname: {data.lastName}
        <br />
        Age: {data.age}
        <br />
      </p>
      <h3>Adress</h3>
      <p>
        {data.street}
        <br />
        {data.zip} {data.city}
        <br />
        {data.country}
      </p>
    </div>
  ),
  id: 'custom-content-plugin-with-custom-layout',
  title: 'Custom content plugin',
  description: 'Some custom content plugin with multiple controls',
  version: 1,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        street: { type: 'string' },
        zip: { type: 'string' },
        city: { type: 'string' },
        country: { type: 'string' },

        age: {
          title: 'Age in years',
          type: 'integer',
          minimum: 0,
        },
      },
      required: [],
    },
    Content: () => (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: 20 }}>
          <p>Personal information:</p>
          <AutoFields fields={['firstName', 'lastName', 'age']} />
        </div>
        <div style={{ flex: 1 }}>
          <p>Adress:</p>
          <AutoFields omitFields={['firstName', 'lastName', 'age']} />
        </div>
      </div>
    ),
  },
};

const cellPlugins = [slate(), customContentPluginWithSpecialForm];

const INITIAL_VALUE = createValue(
  {
    rows: [
      [
        {
          plugin: customContentPluginWithSpecialForm,
        },
      ],
    ],
  },
  {
    cellPlugins,
    lang: 'default',
  }
);
export default function CustomFormLayout() {
  const [value, setValue] = useState<Value>(INITIAL_VALUE);

  return (
    <PageLayout>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </PageLayout>
  );
}
