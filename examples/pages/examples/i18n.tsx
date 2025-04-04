import type { Options, Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';
import { demo } from '../../sampleContents/demo';
import React, { useState, useCallback } from 'react';
import { cellPlugins } from '../../plugins/cellPlugins';
import PageLayout from '../../components/PageLayout';
import { Button } from '@mui/material';
const LANGUAGES = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'de',
    label: 'Deutsch',
  },
];

const TRANSLATIONS: { [key: string]: string } = {
  'Edit blocks': '编辑',
  'Add blocks': '添加',
  'Move blocks': '移动',
  'Resize blocks': '调整大小',
  'Preview blocks': '预览模式',
};

export default function Home() {
  const [value, setValue] = useState<Value>(demo);
  const reset = () => setValue(demo);
  const uiTranslator = useCallback((label?: string | null) => {
    if (label && TRANSLATIONS[label] !== undefined) {
      return TRANSLATIONS[label];
    }
    return `${label}(to translate)`;
  }, []);

  return (
    <PageLayout>
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        lang={LANGUAGES[0].lang}
        onChange={setValue}
        languages={LANGUAGES}
        uiTranslator={uiTranslator}
      />
      <Button onClick={reset}>Reset</Button>
    </PageLayout>
  );
}
