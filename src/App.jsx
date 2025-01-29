import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/home/HomePage";
import MainLayout from "./component/Layout/MainLayout";
import MenuListPage from "./Page/Menu/MenuListPage";
import CategoryPage from "./Page/Menu/CategoryPage";
import OrderSystem from "./Page/order/OrderPage";
import OrderHistoryPage from "./Page/Order_history/OrderHistoryPage";
import TablePage from "./Page/tableList/TableList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuListPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/order" element={<OrderSystem/>} />
          <Route path="/orderhistory" element={<OrderHistoryPage/>} />


        
        </Route>

        {/* {LgoinScreen} */}
        
          
      </Routes>
    </BrowserRouter>
  );
};
export default App;
