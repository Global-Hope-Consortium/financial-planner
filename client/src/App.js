import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Affirmations from './components/Affirmations';
import Plans from './components/Plans';
import UnifiedView from './components/UnifiedView';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/unified-view" element={<UnifiedView />} />
      </Routes>
    </Router>
  );
};

export default App;