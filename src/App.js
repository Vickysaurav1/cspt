import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-slate-400 to-slate-600">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
