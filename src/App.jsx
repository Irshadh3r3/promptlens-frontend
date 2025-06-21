import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post('http://localhost:5000/api/generate-prompt', formData);
    setPrompt(response.data.prompt);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">PromptLens - AI Prompt Generator</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">Generate Prompt</button>
      {prompt && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Generated Prompt:</h2>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
