import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-full flex bg-bgCustom">
      <Sidebar />
      <div className="flex-1 ml-1/6 p-4 h-screen overflow-auto">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
