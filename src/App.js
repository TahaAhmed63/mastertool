import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index4 from './pages/index-4';
// import { Provider } from "react-redux";
// import store from "../src/redux/store";
// import  About from './Components/About';
// import Collection from './Components/Collection';
import CollectionDetail from './pages/collection';
import News from './Components/News';
import Contact from './Components/Contact';
import Header from './layout/Header';

import NftSingle from './pages/nft-single';
// import Charecter from './pages/Charecter';
import AboutMain from './pages/AboutMain';
import CharecterMain from './pages/CharecterMain';
import AllCharecter from './Components/allCharecter';
import ListCharecter from './Components/ListCharecter';
import { useEffect } from 'react';

function App() {
  useEffect(() => { 
    console.log("hell")
 
 
      window.scrollTo(0,0)
 
     window.history.scrollRestoration ="manual"
  }, []);
  return (

    <BrowserRouter>       
< Header/>


    <Routes>

      <Route  path="/" element={<Index4 />}></Route>

    
      <Route  path="/about" element={<AboutMain/>}></Route>
      <Route  path="/collection" element={<CharecterMain />}></Route>
      <Route  path="/collection-detail" element={<CollectionDetail />}></Route>
      <Route  path="/charector-detail" element={<ListCharecter />}></Route>

      <Route  path="/Cards" element={<AllCharecter />}></Route>


      <Route  path="/news" element={<News />}></Route>
      <Route  path="/contact" element={<Contact />}></Route>
      <Route path="/nft/:id" element={<NftSingle />} />





      </Routes>
 

      </BrowserRouter>
 
  
  );
}

export default App;
