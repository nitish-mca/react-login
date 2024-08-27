import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/forgot-password'
import NavBar from './components/nav-bar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}



export default App;