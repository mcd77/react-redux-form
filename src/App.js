import './App.css';
import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import FirstName from "./pages/Firstname"
import LastName from "./pages/Lastname"
import Email from "./pages/Email"
import Phone from "./pages/Phone"
import Review from "./pages/Review"
import Confirmation from "./pages/Confirmation"


function App() {
  return (
    <div>
      <HashRouter baseurl="/">
        <Routes>
        <Route path='/' exact element={<FirstName />} />
        <Route path='/firstname' exact element={<FirstName />} />
        <Route path='/lastname' exact element={<LastName />} />
        <Route path='/email' exact element={<Email />} />
        <Route path='/phone' exact element={<Phone />} />
        <Route path='/review' exact element={<Review />} />
        <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;