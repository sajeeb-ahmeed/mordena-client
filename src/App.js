
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
import AllInventory from './Pages/Home/ManageAllInventory/AllInventory';
import Update from './Pages/Home/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>
        <Route path='/update/:id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path="/ManageInventory" element={
          <RequireAuth>
            <AllInventory></AllInventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footers></Footers>
    </div>
  );
}

export default App;
