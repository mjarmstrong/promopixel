import { Paper } from '@mui/material';
import type { EditorProps } from '@promopixel/editor';
import Editor from '@promopixel/editor';
import React from 'react';

import { Labeled, useInput } from 'react-admin';

export type RaReactPageInputProps = {
  label?: string;
  source: string;
  style?: React.CSSProperties;
} & EditorProps;
const RaReactPageInput: React.FC<RaReactPageInputProps> = ({
  label = 'Content',
  source,
  style,
  ...editorProps
}) => {
  const {
    input: { value, onChange },
  } = useInput({ source });
  return (
    <Labeled label={label} source={source} fullWidth>
      <>
        <Paper
          elevation={5}
          style={{
            overflow: 'visible',
            padding: 16,
            marginRight: 64,

            ...style,
          }}
        >
          <Editor value={value} onChange={onChange} {...editorProps} />
        </Paper>
      </>
    </Labeled>
  );
};

export default RaReactPageInput;
