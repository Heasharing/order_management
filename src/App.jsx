import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Page/home/HomePage'
import AboutPage from './Page/about/AboutPage'
import LoginPage from './Page/auth/LoginPage';
import RegisterPage from './Page/auth/RegisterPage';
import RouteNotFound from './Page/404Error'
import MainLayout from "./component/Layout/MainLayout";
import MainLayoutLogin from "./component/Layout/MainLayoutLogin";
import CustomerPage from "./Page/customer/CustomerPage";
import ProductPage from "./Page/product/ProductPage";
import RolePage from './Page/Role/RolePage';
import SettingPage from './component/setting/SettingPage';
import ModelPage from './Page/Model/ModelPage';
import RegistersPage from './component/setting/RegisterPage';
import ModalPopUp from './Page/Model/ModalPopUp';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<MainLayout/>}>
      <Route path="/"  element={<HomePage />} />
      <Route path="/customer"  element={<CustomerPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/role"  element={<RolePage/>} />
      <Route path="/model"  element={<ModelPage/>} />
      <Route path="/models"  element={<ModalPopUp/>} />
      <Route path="/setting"  element={<SettingPage/>} />
      <Route path ="/regis" element={<RegistersPage />} />
     

      




      <Route path="/about" element={<AboutPage />} />
      
      <Route path="*" element={<RouteNotFound />} />
    </Route>
    {/* {LgoinScreen} */}
    <Route>
    <Route element={<MainLayoutLogin/>}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
