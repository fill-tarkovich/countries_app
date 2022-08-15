import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import CountriesList from "./components/CountriesList";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="countries/:single" element={<SingleCountry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
