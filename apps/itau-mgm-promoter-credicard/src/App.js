import React, { lazy, Suspense } from 'react'
import './App.scss';

function LoadingMessage() {
  return <h2>Loading...</h2>;
}

const LazyComponent = (
  lazy(async () => (
    await import('./routes/routes')
  ))
)

function App() {
  return (
    <div className="App credicard">
      <Suspense fallback={<LoadingMessage />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
