import Editor from '@promopixel/editor';
import React from 'react';

export default function ReadOnlyBareEmpty() {
  return <Editor cellPlugins={[]} value={null} lang="en" readOnly />;
}
