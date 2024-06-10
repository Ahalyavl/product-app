import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';

import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Routes>
     <Route path='/' element ={<AddProduct/>}/>
      <Route path='/search' element ={<SearchProduct/>}/>
      <Route path='/delete' element ={<DeleteProduct/>}/>
      <Route path='/ViewProduct' element ={<ViewProduct/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
