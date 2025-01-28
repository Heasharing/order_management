import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Page/home/HomePage'
import LoginPage from './Page/auth/LoginPage';
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
import PrintPage from './Page/PrintView/PrintPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import InvoicePage from './Page/order/InvoicePage';
import FooterPage from './Page/Footer/FooterPage';
import ShoppingCart from './Page/Card/ShoppingCart';
// import TablePage from './Page/order/TablePage';
import MenuPage from './Page/Menu/MenuPage';
// import InvoiceTable from './component/Invoietable';
import CategoryPage from './Page/Menu/CategoryPage'
import TableList from './Page/tableList/TableList';
import OrderSystem from './Page/order/OrderPage';
import OrderHistoryPage from './Page/Order_history/OrderHistoryPage.jsx';
// import Overview_page from './Page/product/Overview.jsx';



function App() {
  return (
   <BrowserRouter>
   <Routes>
   {/* <Route path=""  element={<LoginPage />} /> */}
    <Route 
    element={
    
            <MainLayout/>
  }> 
      <Route path="/home" element={<HomePage/>} />
      <Route path="/customer"  element={<CustomerPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/role"  element={<RolePage/>} />
      <Route path="/model"  element={<ModelPage/>} />\
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/models"  element={<ModalPopUp/>} />
      <Route path="/setting"  element={<SettingPage/>} />
      <Route path ="/regis" element={<RegistersPage />} />
      <Route path ="/print" element={<PrintPage/>} />
      <Route path="/footer" element={<FooterPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/table" element={<TableList />} />
      <Route path="/order" element={<OrderSystem />} />
      <Route path="/orderhistory" element={<OrderHistoryPage />} />
     



      


      {/* <Route path="/profiles" element={ProfilePage} /> */}


      


     

      




      <Route path="/about" element={<AboutPage />} />
      
      <Route path="*" element={<RouteNotFound />} />
    </Route>
    {/* {LgoinScreen} */}
    <Route>
    <Route element={<MainLayoutLogin/>}>
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="*" element={<RouteNotFound />} />
    </Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
