import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

const App = () => (
  <Router>
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '1200px' }, margin: '0 auto' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Box>
  </Router>
);

export default App;
