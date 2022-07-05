
import './App.css';
import Body from '../Body/Body';
import Footer from '../Footer/footer';
import Navbar from '../NavBar/Navbar'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
function App() {
  return (
    <div >
    <BrowserRouter>
          <Navbar />
      <Routes>
              <Route path='/' element={<Body greetings={"HOME"}/>}/>
              <Route path='/category/ :catid' element={<Body greetings={"FILTRADO"}/>}/>
              <Route path='/item' element={<ItemDetail/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
