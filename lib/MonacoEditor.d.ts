import * as monaco from "monaco-editor";
import { CSSProperties } from "react";
import React from "react";
declare type MonacoEditorProps = {
    style?: CSSProperties;
    className?: string;
};
export declare const MonacoEditor: React.ForwardRefExoticComponent<MonacoEditorProps & React.RefAttributes<monaco.editor.IStandaloneCodeEditor>>;
export {};
