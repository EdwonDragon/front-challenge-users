import { postUsuarios } from "../../helpers/postUsurios";
import { useState } from "react";

const initialState = {
  fechaNacimiento: "",
  correo: "",
  telefono: "",
  nombre: "",
  estado:false
};

export const Subbmit = () => {
  const [infoFinal, setInfoFinal] = useState(initialState);
  const handleSubmit = () => {
    postUsuarios().then(() => {
      var nacimiento = JSON.parse(sessionStorage.getItem("formNacimiento"));
      var nombre = JSON.parse(sessionStorage.getItem("formNombre"));
      var contacto = JSON.parse(sessionStorage.getItem("formContacto"));

      const info = {
        estado:true,
        fechaNacimiento: nacimiento.fechaNacimiento,
        correo: contacto.email,
        telefono: contacto.telefono,
        nombre:
          nombre.nombre +
          " " +
          nombre.segundoNombre +
          " " +
          nombre.apellidoPaterno +
          " " +
          nombre.apellidoMaterno,
      };
      setInfoFinal(info);
     
    });
  };

  return (
    <>
      <div className="alert alert-secondary" role="alert">
        Si tus datos son correctos por favor continuamos
      </div>

      <div className="d-grid gap-2 col-12 mx-auto">
        <button onClick={handleSubmit} className="btn btn-pink">
          Iniciar
        </button>
      </div>
      <br />

      <div className="alert alert-pink" role="alert">
        
        {(infoFinal.estado)?"Fecha de nacimiento: " + infoFinal.fechaNacimiento:''}<br />
        {(infoFinal.estado)?"Correo electronico: " + infoFinal.correo:''}<br />
        {(infoFinal.estado)?"Teléfono celular: " + infoFinal.telefono:''}<br />
        {(infoFinal.estado)?"Nombre: " + infoFinal.nombre:''}
      </div>
    </>
  );
};
