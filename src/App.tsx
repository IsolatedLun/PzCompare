import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Faqs from './components/layout/static/Faqs.js';
import Footer from './components/layout/static/Footer.js';
import Navbar from './components/layout/Navbar.js';
import Updates from './components/layout/static/Updates.js';

function App() {

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

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
