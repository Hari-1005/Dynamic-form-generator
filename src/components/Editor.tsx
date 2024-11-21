import React, { useState } from "react";

const Editor: React.FC<{ onUpdate: (data: any) => void }> = ({ onUpdate }) => {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleJsonInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newJsonInput = event.target.value;
    setJsonInput(newJsonInput);

    try {
      const parsedJson = JSON.parse(newJsonInput);
      onUpdate(parsedJson);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <textarea
        value={jsonInput}
        onChange={handleJsonInputChange}
        placeholder="Type your JSON here..."
        className="w-full p-2 border rounded"
        rows={10}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Editor;
