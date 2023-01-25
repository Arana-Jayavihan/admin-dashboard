import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import "./App.css"
import { Navbar, Footer, Sidebar, ThemeSettings, Header } from "./components/index"
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Customers from './pages/Customers';
const App = () => {
  const activeMenu = true
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }} >
            <TooltipComponent content="Settings" position="Top" >
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl text-white' style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>

            ) :
              (
                <div className='w=0 dark:bg-secondary-dark-bg' >
                  <Sidebar />
                </div>
              )
          }
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/summary" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
