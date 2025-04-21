import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import GenreView from './views/GenreView'; // ⬅️ Import GenreView
import { AuthContext } from './context/AuthContext';

function App() {
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/genre/:id" element={<GenreView />} /> {/* ⬅️ New route */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
