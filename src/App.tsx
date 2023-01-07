import React, {lazy, Suspense} from 'react';
import {BrowserRouter, HashRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import {Backdrop, Box, CircularProgress} from "@mui/material";

const NavBar = lazy(() => import('./components/partial/NavBar'));
const Home = lazy(() => import('./pages/Home'));
const Manual = lazy(() => import('./pages/Manual'));
const Team = lazy(() => import('./pages/Team'));

function App() {
  return (
      <Box pb={5}>
          <BrowserRouter>
              <Suspense
                  fallback={
                      <Backdrop open={true}>
                          <CircularProgress color="inherit" />
                      </Backdrop>
                  }>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/manual" element={<Manual />} />
                      <Route path="/team" element={<Team />} />
                  </Routes>
                  <NavBar />
              </Suspense>
          </BrowserRouter>
      </Box>
  );
}

export default App;
