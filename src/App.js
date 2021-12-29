import { collection, query } from "firebase/firestore";
import "./App.css";
import MainRoutes from "./MainRouter";

function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
