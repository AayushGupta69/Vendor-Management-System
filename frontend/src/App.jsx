import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./pages/SignIn.jsx";
import {SignUpPage} from "./pages/SignUp.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
