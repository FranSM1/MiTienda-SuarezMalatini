import {Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from '../Footer/footer';
import Navbar from '../NavBar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Home from '../Home/Home';

function App() {
  return (
    <div >
         <Navbar />
         <Routes>
          <Route path='/home' element={ <Home/>}> </Route>
          <Route path='/nosotros' element={ <Home/>}> </Route>
          <Route path='/contactos' element={ <Home/>}> </Route>
        </Routes>
    <ItemListContainer/>
        <Footer/>
    </div>
  );
}

export default App;
