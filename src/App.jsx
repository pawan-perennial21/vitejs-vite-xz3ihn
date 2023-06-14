import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
