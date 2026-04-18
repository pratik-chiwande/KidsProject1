import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Topheader from "./Components/Topheader/Topheader";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import 'animate.css';
import About from "./Components/About/About";
import Classes from "./Components/Classes/Classes";
import Teachers from "./Components/Teachers/Teachers";
import TeachersPage from "./Components/Teachers/TeachersPage";


function App() {
  return (
    <>

      <BrowserRouter>
        <Topheader />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/home1" element={<Home/>} /> 
         <Route path="/about" element={<About/>} />
         <Route path="/about1" element={<About/>} />
         <Route path="/about2" element={<About/>} />
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes1" element={<Classes/>}/>
          <Route path="/classes2" element={<Classes/>}/>
          <Route path="/classes3" element={<Classes/>}/>
          <Route path="/classes4" element={<Classes/>}/>
          <Route path="/teacher1" element={<TeachersPage/>}/>
          <Route path="/teacher2" element={<TeachersPage/>}/>
          <Route path="/teacher3" element={<TeachersPage/>}/>
          <Route path="/teacher4" element={<TeachersPage/>}/>
          <Route path="/pages" element={<h1>hello</h1>}/>
          <Route path="/pages1" element={<h1>hello</h1>}/>
          <Route path="/pages2" element={<h1>hello</h1>}/>
          <Route path="/pages3" element={<h1>hello</h1>}/>
          <Route path="/pages4" element={<h1>hello</h1>}/>
          <Route path="/blog" element={<h1>hello</h1>}/>
          <Route path="/blog1" element={<h1>hello</h1>}/>
          <Route path="/blog2" element={<h1>hello</h1>}/>
          <Route path="/blog3" element={<h1>hello</h1>}/>
          <Route path="/blog4" element={<h1>hello</h1>}/>
          <Route path="/shop" element={<h1>hello</h1>}/>
          <Route path="/shop1" element={<h1>hello</h1>}/>
          <Route path="/shop2" element={<h1>hello</h1>}/>
          <Route path="/shop3" element={<h1>hello</h1>}/>
          <Route path="/shop4" element={<h1>hello</h1>}/>
          <Route path="/contact" element={<h1>hello</h1>}/>
          <Route path="/contact1" element={<h1>hello</h1>}/>
          <Route path="/contact2" element={<h1>hello</h1>}/>
          <Route path="/contact3" element={<h1>hello</h1>}/>
          <Route path="/contact4" element={<h1>hello</h1>}/>
          <Route path="/*" element={<h1>404 Not found Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;