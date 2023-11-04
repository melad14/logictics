import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Services from './Components/Services/Services';
import Links from './Components/Links/Links';
import Inco from './Components/Inco/Inco';
import Contspec from './Components/Contspec/Contspec';
import Freight from './Components/Freight/Freight.jsx';
import Custom from './Components/CustomClearance/Custom.jsx';
import Insurance from './Components/Insurance/Insurance.jsx';
import Quality from './Components/Quality/Quality.jsx';
import Support from './Components/Support/Support.jsx';
import Features from './Components/Features/Features.jsx';
import ServMore from './Components/ServMore/ServMore.jsx';



export default function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='logictics' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='links' element={<Links/>}/>
      <Route path='inco' element={<Inco/>}/>
      <Route path='contspec' element={<Contspec/>}/>
      <Route path='freight' element={<Freight/>}/>
      <Route path='custom' element={<Custom/>}/>
      <Route path='insurance' element={<Insurance/>}/>
      <Route path='quality' element={<Quality/>}/>
      <Route path='support' element={<Support/>}/>
      <Route path='features' element={<Features/>}/>
      <Route path='more' element={<ServMore/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}
