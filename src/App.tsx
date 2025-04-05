import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <div className="h-screen w-full flex bg-(--color-bgCustom)">
      <Sidebar />
      <div className="flex-1 xl:ml-1/6 p-4 h-screen overflow-auto">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <MobileMenu />
    </div>
  );
}

export default App;
