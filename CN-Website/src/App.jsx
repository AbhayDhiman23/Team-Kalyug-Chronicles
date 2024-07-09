// App.js
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Overview from './containers/Overview';

import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded components
const Home = lazy(() => import('./containers/Home'));
const Overview = lazy(() => import('./containers/Overview'));
const Prizes = lazy(() => import('./containers/Prizes'));
const PastEvents = lazy(() => import('./containers/PastEvents'));
const Socials = lazy(() => import('./containers/Socials'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Header />
        {loading ? (
          <div></div>
        ) : (
          <Suspense fallback={<div>.</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/past-events" element={<PastEvents />} />
              <Route path="/socials" element={<Socials />} />
            </Routes>
          </Suspense>
        )}
      </ErrorBoundary>
    </Router>
  );
}

export default App;
