import { BrowserRouter as Router } from "react-router-dom";
import AppProviders from "./AppProviders";
import { ROUTE_INDEX_COMPONENT } from "./routes/index";
import RenderRoutes from "./utils/RenderRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AppProviders>
          <RenderRoutes route={ROUTE_INDEX_COMPONENT} />
        </AppProviders>
      </Router>
    </div>
  );
}

export default App;
