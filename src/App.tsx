import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Editor from './components/Editor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the <body> when dark mode is enabled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between p-4">
          <h1 className="text-2xl">Dynamic Form Generator</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      <Layout>
        <Editor onUpdate={setSchema} />
        <FormPreview schema={schema} />
      </Layout>
    </div>
  );
};

export default App;
