import React, { useState } from 'react';
import type { Options, Value } from '@promopixel/editor';
import Editor from '@promopixel/editor';
import slate from '@promopixel/plugins-slate';
import image from '@promopixel/plugins-image';
import { ExampleCustomBottomToolbar } from '../../components/ExampleCustomBottomToolbar';
import { Button } from '@mui/material';
import customContentPlugin from '../../plugins/customContentPlugin';

const cellPlugins = [slate(), image, customContentPlugin];

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

// Custom bottom toolbar example with collapse/restore functionality.
const languageSwitchExample = () => {
  const [lang, setLang] = React.useState<string>('en');
  const [value, setValue] = useState<Value>();

  return (
    <>
      <select value={lang} onChange={(v) => setLang(v.target.value)}>
        {LANGUAGES.map((l) => (
          <option key={l.lang} value={l.lang}>
            {l.label}
          </option>
        ))}
      </select>
      <Editor
        languages={LANGUAGES}
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        lang={lang}
        onChangeLang={(l) => {
          setLang(l);
        }}
      />
    </>
  );
};

export default languageSwitchExample;
