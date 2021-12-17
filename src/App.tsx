import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Home from './components/Home';
import Faqs from './components/layout/static/Faqs';
import Footer from './components/layout/static/Footer';
import Navbar from './components/layout/Navbar';
import Updates from './components/layout/static/Updates';

import { genPopup } from './utils/funcs';
import popups from './components/layout/json/popups.json';

function App() {

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  useEffect(() => {
    genPopup(popups, 6);
  }, [])

  return (
    <div className='body'>

      <Navbar />

      <Router>

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/updates' element={<Updates />}/>
          <Route path='/faqs' element={<Faqs />} />

        </Routes>

        <Footer />

      </Router>

      <div className="popup" id='popup'>
        <p className="popup-text"></p>
      </div>
      
    </div>
  )
}

export default App
