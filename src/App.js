
import './App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {BrowserRouter ,Routes,Route}  from "react-router-dom"
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import ProfileUpdate from './pages/ProfileUpdate';
import ProductAuctionPage from './pages/ProductAuctionPage';
import Temp from './pages/Temp';
import PasswordUpdate from './pages/PasswordUpdate';
import AuctionDetails from './pages/AuctionDetails';
import Success from './pages/Success';
import Failure from './pages/Failure'

function App() {
  return (
   <>
    {/* <Header data={data} /> */}
    {/* <Header/> */}
    <Routes>
      {/* <Route element={<Registration setData={setData} data={data}/>} path="/" /> */}
      <Route element={<Signin/>} path='/signin'/>
      <Route element={<HomePage/>} path='/'/>
      <Route element={<DashboardPage/>} path='/dashboard'/>
      <Route element={<ProfilePage/>} path='/profile'/>
      <Route element={<Signup/>} path='/signup'/>
      <Route element={<AddProduct/>} path='/addproduct'/>
      <Route element={<ViewProduct/>} path='/viewproduct'/>
      <Route element={<ProfileUpdate/>} path='/profileupdate'/>
      <Route element={<PasswordUpdate/>} path='/passwordupdate'/>
      <Route element={<AuctionDetails/>} path='/auctiondetails'/>
      <Route element={<Success/>} path='/success'/>
      <Route element={<Failure/>} path='/failure'/>
      <Route path='/productauction'>
        <Route path=':id' Component={ProductAuctionPage} />
        </Route>

    </Routes>
    {/* <Footer/> */}
     {/* <img src='/images/'/> */}

     {/* <FashionOpt/> */}
    
   
     </>
  );
}

export default App;
