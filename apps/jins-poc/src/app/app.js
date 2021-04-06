import React from 'react';
import styles from './app.module.scss';
import '../../../../libs/shared/assets/src/assets/themes/credicard-theme-default.css'
import { useState } from 'react';
import Previewzao from './xablau/Previewzao';
import jsozin from './xablau/jsonzin.json';
import { mdrEngine } from '@zup-mgm/mdr-engine';

export function App() {
  const [jsonBox, setjsonBox] = useState(jsozin);
  const [jsonRend, setjsonRend] = useState(JSON.stringify(jsozin, null, 2));
  const [datablau, setDatablau] = useState();

  const savePageToState = async (jsonBox) => {
    const page = await mdrEngine(jsonBox);
    setDatablau(page);
  };

  const renderPreviewPage = (jsonBox) => {
    console.log('jsonBox', jsonBox)
    savePageToState(jsonBox);
  }

  const updateJsonEditor = (value) => {
    setjsonBox(JSON.parse(value));
  }
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to jins-poc!</h1>
      </header>
      <main className="maincontent_wrap">
        <div className="jsoneditor-turma">
          <textarea
            className="jsoneditor-boy"
            defaultValue={jsonRend}
            type="text"
            onChange={(e) => updateJsonEditor(e.target.value)}
            />
          <button className="jsoneditor-btn" onClick={e => renderPreviewPage(jsonBox)}>
            RENDER
          </button>
        </div>
        <Previewzao shouldBePage={datablau}></Previewzao>

      </main>
    </div>
  );
}
export default App;
