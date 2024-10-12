import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlisting from './Component/Userlisting';
import Updateuser from './Component/Updateuser'
import Adduser from './Component/Adduser';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
      <BrowserRouter>
      <div className="header">
        <Link className="header-link" to={'/'}>Home</Link>
        <Link className="header-link" to={'/user'}>User</Link>
      </div>
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<Userlisting />}></Route>
        <Route path="/user/add" element={<Adduser />}></Route>
        <Route path="/user/edit/:code" element={<Updateuser />}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position='bottom-right'>

      </ToastContainer>
    </div>
    </Provider>
    
  );
}

export default App;
