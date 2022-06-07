import MonacoEditor from "@monaco-editor/react";

import { KeyMod, KeyCode } from "monaco-editor/esm/vs/editor/editor.api";

import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";
type MonacoType = typeof monaco;
type MonacoEditorType = monaco.editor.IStandaloneCodeEditor;

function handleEditorDidMount(
  editor: MonacoEditorType,
  onSave: (value: string) => void
) {
  editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () =>
    onSave(editor.getValue())
  );
}

function handleEditorWillMount(monaco: MonacoType) {
  monaco.languages.register({ id: "chordProLang" });
  let keywords = ["chord"];
  monaco.languages.setMonarchTokensProvider("chordProLang", {
    keywords,
    tokenizer: {
      root: [
        [
          /(\[)([\w|\d]+)(\])/,
          ["chord.bracket", "chord.chord", "chord.bracket"],
        ],
        [/{((start_of_chorus)(:([^{}]*))?|end_of_chorus)}/, "chord.chorus"],
        [/{((start_of_verse)(:([^{}]*))?|end_of_verse)}/, "chord.verse"],
        [/^\{title.*$/, "chord.title"],
      ],
    },
  });

  monaco.editor.defineTheme("chordProTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "chord.bracket", foreground: "FFDA00" },
      { token: "chord.chord", foreground: "B5CEA8" },
      { token: "chord.title", foreground: "D16969" },
      { token: "chord.chorus", foreground: "9CDCFE" },
      { token: "chord.verse", foreground: "646695" },
    ],
    colors: {
      "editor.background": "#1E1E1E",
    },
  });
}

type Props = {
  defaultValue: string;
  onChange: (value?: string) => void;
  onSave: (value: string) => void;
};

export default function Editor({ defaultValue, onChange, onSave }: Props) {
  return (
    <MonacoEditor
      theme="chordProTheme"
      beforeMount={handleEditorWillMount}
      onMount={(editor) => handleEditorDidMount(editor, onSave)}
      defaultLanguage="chordProLang"
      defaultValue={defaultValue}
      onChange={onChange}
      options={{
        fontSize: 14,
      }}
    />
  );
}
