import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login";
import PublicRoutes from "./components/PublicRoutes";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="h-screen w-full flex bg-(--color-bgCustom)">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/*"
            element={
              <div className="h-screen w-full flex bg-(--color-bgCustom)">
                <Sidebar />
                <div className="flex-1 xl:ml-1/6 p-4 h-screen overflow-auto">
                  <Routes>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                    <Route
                      path="*"
                      element={<Navigate to="/dashboard" replace />}
                    />
                  </Routes>
                </div>
                <MobileMenu />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
