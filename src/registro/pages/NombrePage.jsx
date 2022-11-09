import { useState } from "react";

const initialForm = {
  nombre: "",
  segundoNombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
};
export const NombrePage = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (
      form.nombre != "" &&
      form.segundoNombre != "" &&
      form.apellidoPaterno != "" &&
      form.apellidoMaterno != ""
    ) {
      sessionStorage.setItem("formNombre", JSON.stringify(form));
    }else{
      sessionStorage.setItem("formNombre", JSON.stringify({
        ...form,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-3">
          <div className="profile-block">
            <img
              className="circular-img"
              src="https://randomuser.me/api/portraits/women/81.jpg"
            />
            <span className="circular-imag-overlay"></span>
          </div>
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-header"> <h3>¿Cual es tu nombre?</h3></div>
            <div className="card-body">
            
              <div className="form-group mb-2">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={form.nombre}
                  name="nombre"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  value={form.segundoNombre}
                  className="form-control"
                  placeholder="Segundo nombre"
                  name="segundoNombre"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  value={form.apellidoPaterno}
                  placeholder="Apellido paterno"
                  name="apellidoPaterno"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  value={form.apellidoMaterno}
                  className="form-control"
                  placeholder="Apellido materno"
                  name="apellidoMaterno"
                />
              </div>
            </div>
          </div>

          <div className="alert alert-pink" role="alert">
            {`${form.nombre} ${form.segundoNombre} ${form.apellidoPaterno} ${form.apellidoMaterno}`}
          </div>
        </div>
      </div>
    </div>
  );
};
