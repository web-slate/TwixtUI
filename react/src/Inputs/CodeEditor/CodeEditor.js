import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

export default function CodeEditor({
  height = '400px',
  width = '600px',
  value: initialValue = '',
  language: initialLanguage = 'javascript',
  onChange = () => {},
}) {
  const [language, setLanguage] = useState(initialLanguage);
  const [value, setValue] = useState(initialValue);

  const languageExtensions = {
    javascript: javascript(),
    python: python(),
    html: html(),
    css: css(),
  };

  const onChangeCallback = useCallback((val, viewUpdate) => {
    setValue(val);
    onChange(val);
  }, [onChange]);

  return (
    <div className="relative mx-auto">
      {/* Container for dropdown and other options */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-md bg-white shadow-sm"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>

      {/* CodeMirror Editor */}
      <CodeMirror
        value={value}
        height={height}
        extensions={[languageExtensions[language]]}
        onChange={onChangeCallback}
        className="border border-gray-300 rounded-md"
        style={{ minWidth: '600px', width }}
      />
    </div>
  );
}
