import { Routes, Route } from "react-router-dom";
import { UsuariosPage } from "../registro/pages/UsuariosPage";



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<UsuariosPage />}></Route>
    </Routes>
  );
};
