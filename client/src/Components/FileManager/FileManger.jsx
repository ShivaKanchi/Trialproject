import React from "react";
import { useState } from "react";
import FileFolder from "./FileFolder";
import useTraverseTree from "./Hooks/use-traverse-tree";

// const [newfilefolder, setNewfilefolder] = useState(false)

// type 0 = folder , type 1 = file
const filesandfolders = {
  id: 1,
  isFolder: true,
  name: "Root",
  count: "2",
  items: [
    {
      id: 2,
      isFolder: false,
      name: "createFile.doc",
      count: "0",
      items: [],
    },
  ],
};

const FileManger = () => {
  const [explorer, setExplorer] = useState(filesandfolders);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finaltree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(finaltree);
  };
  return (
    <div className="w-[60%] m-5">
      <h1>File Manager</h1>
      <div className="my-5 border text-sm">
        <FileFolder data={explorer} handleInsertNode={handleInsertNode} />
      </div>
    </div>
  );
};

export default FileManger;
