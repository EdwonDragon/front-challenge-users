import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

export const UsuariosApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
