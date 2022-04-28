import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Brewery from './components/Brewery';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/brewery" element={<Brewery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
