import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Pages/Common/Header/Header";
import Footer from "./Pages/Common/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/Common/NotFound/NotFound";
import Service from "./Pages/Home/Service/Service";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service/:serviceId' element={<Service/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
