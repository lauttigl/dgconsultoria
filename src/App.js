import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home/Home';
import { useState } from 'react';
import About from './Nosotrs/About';
import Contact from './Contact/Contact';
import { Services } from './Services/Services';

function App() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home setBackgroundImageUrl={setBackgroundImageUrl} />}/>
 <Route path="/about" element={<About setBackgroundImageUrl={setBackgroundImageUrl} />}/>
 <Route path="/contact" element={<Contact setBackgroundImageUrl={setBackgroundImageUrl} />}/>
<Route path="services" element={<Services/> }/>
  </Routes>
  </BrowserRouter>
 
  );
}

export default App;
