import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";

export const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}