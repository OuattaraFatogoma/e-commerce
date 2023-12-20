import './App.css';
import { Route, Routes } from "react-router-dom";
import {Navbar, Sidebar, Footer } from './components';
import {Home, About, Shop, Cart, ErrorPage} from './pages';


function App() {
  return (
    <main className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
