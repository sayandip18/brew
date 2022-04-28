import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Brewery from './components/brewery/Brewery';
import Search from './components/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/brewery/:breweryId" element={<Brewery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
