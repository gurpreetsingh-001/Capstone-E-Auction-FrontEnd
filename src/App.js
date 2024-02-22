
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
    </Routes>
    {/* <Footer/> */}
     {/* <img src='/images/'/> */}

     {/* <FashionOpt/> */}
    
   
     </>
  );
}

export default App;
