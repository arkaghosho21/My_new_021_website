import { Container } from "postcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./assets/react.svg";
import Dashboard from "./container/Dashboard";
import Middle from "./container/Middle";
import Bloges from "./container/Bloges";
import Marketing from "./container/Marketing";
import Contact_us from "./container/Contact_us";
import Navbar from "./container/Navbar";

function App() {


  return (
    <div className="text-9ml">
      <Navbar />
      <Dashboard />
      <Bloges />
      <Marketing />
      <Middle />
      <Contact_us />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navbar/>}/>
    //     <Route index element={<Dashboard/>} />
    //     <Route path="bloges" element={<Bloges/>}/>
    //     <Route path="marketing" element={<Marketing/>}/>
    //     <Route path="middle" element={<Middle/>}/>
    //     <Route path="contact" element={<Contact_us/>}/>
    //   </Routes>
    // </BrowserRouter>

  )
}

export default App
