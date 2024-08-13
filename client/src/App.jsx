import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = ()=>{
  return(
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/all-books" element={<Books/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}