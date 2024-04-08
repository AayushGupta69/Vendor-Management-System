import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./pages/SignIn.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/signin" element={<SignInPage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App