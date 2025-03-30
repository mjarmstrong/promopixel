import React, { useState } from 'react';
import type { Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';
import slate from '@promopixel/plugins-slate2';
import image from '@promopixel/plugins-image';

const cellPlugins = [slate(), image];

// Bare without page layout for bundle size debugging
const Bare = () => {
  const [value] = useState<Value | null>(null);

  return (
    <>
      <Editor cellPlugins={cellPlugins} value={value} />
    </>
  );
};
export default Bare;
