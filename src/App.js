
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Verification/Login/Login';
import SignUp from './Pages/Verification/SignUp/SignUp';
import Footers from './Pages/Shared/Footers/Footers';
import NotFound from './Pages/Shared/NotFound/NotFound';
import InventoryDetails from './Pages/Home/InventoryDetails/InventoryDetails';
import Inventory from './Pages/Home/Inventory/Inventory';
import RequireAuth from './Pages/Verification/RequireAuth/RequireAuth';
import Update from './Pages/Home/Update/Update';
import ManageAllInventory from './Pages/Home/ManageAllInventory/ManageAllInventory';
import Additem from './Pages/Home/ManageAllInventory/Additems/Additem';
import MyItems from './Pages/Home/ManageAllInventory/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/add' element={<RequireAuth><Additem></Additem></RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetails></InventoryDetails></RequireAuth>}></Route>
        <Route path='/update/:id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path="/ManageInventory" element={<RequireAuth>
          <ManageAllInventory></ManageAllInventory></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footers></Footers>
      <ToastContainer />
    </div>
  );
}

export default App;
