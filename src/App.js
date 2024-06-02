
import Add from "./components/Add/Add"
import Topsec from "./components/Assests/Topsec/Topsec"
import Catogery from "./components/Catogery/Catogery"
import Dealsoftheday from "./components/Dealsoftheday/Dealsoftheday"
import Footer from "./components/Footer/Footer"
import Gender from "./components/Gender/Gender"

import Navigation from "./components/Navigation/Navigation"
import NewProducts from "./components/Newproducts/Newproducts"
import Topselling from "./components/Topselling/Topselling"



const App=()=>
{
  return (
    <>
   


    <Topsec/>
    <Navigation/>
    <Add/>
    <Catogery/>
    <Dealsoftheday/>
    <Gender/>
    <Topselling/>
    <NewProducts/>
     <Footer/>
     
    
    
    </>
  )
}
export default App