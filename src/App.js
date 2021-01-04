import { lazy, Suspense } from 'react'
import './App.scss';

const LoadingMessage = () => (
  "I'm loading..."
)

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
