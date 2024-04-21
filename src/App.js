import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import PrivateRoute from './Components/PrivateRoute';
import Signup from "./Pages/Signup"
// const isAuthenticated = true;
const App = () => {


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>

            {/* <Route path='/' element={<Shop />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/product/:productId' element={<Product />} />

            {/* <Route element={<PrivateRoute />}> */}
              <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
              <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
              <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                        
              <Route path='/cart' element={<Cart />} />
              <Route path='/' element={<Shop />} />

            {/* </Route> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;