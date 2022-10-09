import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Login from './component/Login/Login';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import SignUp from './component/SignUp/SignUp';
import Error404Page from './component/Error404Page/Error404Page';
import Hotels from './component/Hotels/Hotels';
import Foods from './component/Foods/Foods';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/hotels' element={<Hotels></Hotels>}></Route>
        <Route path='/foods' element={<Foods></Foods>}></Route>
        <Route path='*' element={<Error404Page></Error404Page>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
