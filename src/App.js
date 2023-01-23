import './App.css';
import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import AddEditBlog from './pages/AddEditBlog';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addBlog' element={<AddEditBlog />}></Route>
      <Route path='/editBlog/:id' element={<AddEditBlog />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blog/:id' element={<Blog />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
