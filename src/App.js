import "./App.css";
import ReportsListPage from "./pages/ReportsListPage/ReportsListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={ <ReportsListPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
