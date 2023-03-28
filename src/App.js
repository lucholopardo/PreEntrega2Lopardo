
import './App.css';
import Bootstrap from './components/navbar/navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () { 
  return ( 
    <BrowserRouter>
    <div className="App">
      

      <header className="App-header">
         <Bootstrap/>
        <Routes>
        
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
        
        <Route path="/detalle/:cityid" element={<ItemDetailContainer />} />
       
        
        
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  )
}

export default App;
