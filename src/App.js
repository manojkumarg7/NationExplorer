import "./App.css";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/nationExplorer" element={<SplashScreen />} />
            <Route path="/nationexplorer/searchcomp" element={<SearchPage />} />
            <Route
              path="/nationexplorer/country/:countryId"
              element={<CountryDetails />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
