import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard } from "./pages/dashboard";
import { Navbar } from "./globalComponents/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
