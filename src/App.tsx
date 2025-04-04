import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-full bg-[#fafafa]">
      <Sidebar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
    </div>
  );
}

export default App;
