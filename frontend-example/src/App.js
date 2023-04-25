import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import allRoutesProject from './config/routes'
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        { allRoutesProject.map((route, i) => (
          <Route key={route.path} path={route.path} element={<route.layout><route.component /></route.layout>} />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App