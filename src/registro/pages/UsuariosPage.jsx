import { ContactoPage } from "./ContactoPage";
import { NacimientoPage } from "./NacimientoPage";
import { NombrePage } from "./NombrePage";
import { Subbmit } from "./Subbmit";

export const UsuariosPage = () => {
  sessionStorage.clear();

  return (
    <>
      <div id="header"></div>
      <div id="content">
        <div id="content-line">
          <div id="form-header ">
            <div className="heading">Formulario</div>
            <i id="icnonoClipboard" className="fa-solid fa-clipboard-question fa-4x"></i>
            <div className="form-description">
              <i className="fa-solid fa-clock"></i> 5 minutos para responder
            </div>
          </div>
        </div>
        <div id="main-content">
          <div id="form-items">
            <NombrePage></NombrePage>

            <NacimientoPage></NacimientoPage>

            <ContactoPage></ContactoPage>

            <Subbmit></Subbmit>
          </div>
        </div>
      </div>
    </>
  );
};
