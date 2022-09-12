import Header from './components/Header/Header.js';
import { ChakraProvider } from "@chakra-ui/react";
 import { Routes, Route /* ,Link as RouteLink */} from "react-router-dom";
 import Footer from './components/Footer.js'
import Home from './components/Home.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'
import About from './components/About'
import Contact from './components/Contact.js'
import HowToBid from './components/HowToBid.js' 
import Auctions from './components/Auctions.js'
import Charity from './components/Charity.js'
function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Home/About' element={<About/>}></Route>
        <Route path='/CONTACT%20US' element={<Contact/>}></Route>
        <Route path='/HOW%20TO%20BID' element={<HowToBid/>}></Route>
        <Route path='/ONLINE%20AUCTIONS' element={<Auctions/>}></Route>
        <Route path='/CHARITY' element={<Charity/>}></Route>

        
      </Routes> 
      <Footer/>

    </ChakraProvider>
  );
}

export default App;
