import * as monaco from "monaco-editor";
import { forwardRef, useRef, CSSProperties, useCallback } from "react";
import React from "react";

type MonacoEditorProps = {
  style?: CSSProperties;
  className?: string;
};

export const MonacoEditor = forwardRef<
  monaco.editor.IStandaloneCodeEditor,
  MonacoEditorProps
>((props, forwardedRef) => {
  const editorElementRef = useRef<HTMLDivElement | null>(null);
  const editor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  return (
    <div
      className={props.className}
      style={props.style}
      ref={useCallback(ref => {
        if (ref === null) {
          editor.current?.dispose();
          editor.current = null;
          editorElementRef.current = null;
          (forwardedRef as any).current = null;
        } else {
          editorElementRef.current = ref;
          editor.current = monaco.editor.create(ref, {
            minimap: { enabled: false },
            autoIndent: "full",
            theme: "vs-dark",
            // language: "acLogLanguage",
            automaticLayout: true,
            renderWhitespace: "none",
            scrollBeyondLastLine: false,
            readOnly: true,
            lineNumbers: "off"
          });
          (forwardedRef as any).current = editor.current;
        }
      }, [])}
    ></div>
  );
});
