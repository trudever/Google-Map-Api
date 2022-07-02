import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';

import Page404 from './views/NotFound/404';
import SearchPage from './views/Search';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
