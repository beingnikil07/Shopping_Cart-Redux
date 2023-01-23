import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';   //importing redux store 
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
