import { BrowserRouter as Router } from "react-router-dom";
import AppProviders from "./AppProviders";
import renderRoutes from "./utils/renderRoutes";
import ROUTE_INDEX_COMPONENT from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AppProviders>{renderRoutes(ROUTE_INDEX_COMPONENT)}</AppProviders>
      </Router>
    </div>
  );
}

export default App;
