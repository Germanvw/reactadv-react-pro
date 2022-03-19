import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages/index";
import { lazyRoutes } from "../../routes/routes";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      {/* Child routes */}
      <ul>
        {lazyRoutes.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        {lazyRoutes.map(({ to, path, Component }) => (
          <Route key={to} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<Navigate replace to={lazyRoutes[0].to} />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
