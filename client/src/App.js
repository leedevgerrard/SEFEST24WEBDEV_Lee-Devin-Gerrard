import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import DashLayout from './layouts/DashLayout';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='dash' element={<DashLayout />}>
            <Route index element={<ItemPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;