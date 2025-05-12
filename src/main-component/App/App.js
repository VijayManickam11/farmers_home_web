import React from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '../../components/Context/UserContext';


const App = () => { 

  return (
    <div className="App" id='scrool'>
      <UserProvider>
          <AllRoute/>
          <ToastContainer/>
          </UserProvider>
    </div>
  );
}

export default App;