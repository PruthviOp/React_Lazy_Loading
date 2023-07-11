import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
const Home = React.lazy(() => import('./pages/Home'))
const Product = React.lazy(() => import('./pages/Product'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<><Header /> 
        <div className='container d-flex justify-content-center align-items-center' style={{minHeight:'85vh'}}> 
        <Suspense
          fallback={<>
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>}>
          <Home />
          </Suspense>
          </div>
          <Footer /></>}></Route>
        <Route path='/product' element={<><Header />
        <div className='container d-flex justify-content-center align-items-center' style={{minHeight:'85vh'}}> 
        <Suspense
          fallback={<>
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>}>
          <Product />
          </Suspense>
          </div>
          <Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
