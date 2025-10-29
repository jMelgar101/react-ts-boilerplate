import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CrudContainer from './containers/CrudContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="crud" element={<CrudContainer />} />
      </Route>
    </Routes>
  );
}

export default App;

