import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rules from "./pages/Rules";
import AppLayout from "./components/Layouts/AppLayout";
function App() {
  
  return (
    <>
    <BrowserRouter>
       
    <Routes>
      <Route path="/" element={<Home/>}></Route>
         <Route element={<AppLayout/>}>
           
           <Route path="/Player" element={<Player/>}/>
           <Route path="/Rules" element={<Rules/>}/>
       
       
       </Route>

        
    
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
