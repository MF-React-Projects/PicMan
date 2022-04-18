import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Pages/Common/Header/Header";
import Footer from "./Pages/Common/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/Common/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Blog from "./Pages/Blog/Blog";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path={'/checkout/'} element={
                    <RequireAuth>
                        <Checkout/>
                    </RequireAuth>
                }/>
                <Route path={'/checkout/:serviceId'} element={
                    <RequireAuth>
                        <Checkout/>
                    </RequireAuth>
                }/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blogs' element={<Blog/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
