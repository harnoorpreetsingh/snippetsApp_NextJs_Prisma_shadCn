"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "../ui/button";
// import * as actions from "@/actions" or  //we're importing server action in client file that we cant define here
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  const codeChangeHandler = (value: string = "") => {
    //= "" mean -- or empty value
    setCode(value);
  };
  return (
    <div>
      <form action={saveSnippetAction}>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl">Edit Your Code: </h1>
          <Button className="bg-green-600 hover:bg-green-700">Save</Button>
        </div>
      </form>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={codeChangeHandler}
      />
    </div>
  );
};

export default EditSnippetForm;
