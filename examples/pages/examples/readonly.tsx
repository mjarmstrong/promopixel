// The editor core
import Editor from '@promopixel/editor';
// image
import image from '@promopixel/plugins-image';
// The rich text area plugin
import slate from '@promopixel/plugins-slate';
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { demoSimpleReadOnly } from '../../sampleContents/demoSimpleReadOnly';

// Stylesheets for the rich text area plugin
// uncomment this
//import '@promopixel/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
//import '@promopixel/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), image];

export default function ReadOnlyExample() {
  // you would usually load SAMPLE_CONTENT from some api / endpoint / database
  return (
    <PageLayout>
      <Editor value={demoSimpleReadOnly} cellPlugins={cellPlugins} readOnly />
    </PageLayout>
  );
}
