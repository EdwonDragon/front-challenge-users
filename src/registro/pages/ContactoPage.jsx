import { useState } from "react";

const initialForm = {
  email: "",
  telefono: "",
};

export const ContactoPage = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (form.email != "" && form.telefono != "") {
      sessionStorage.setItem("formContacto", JSON.stringify(form));
    }else{
      sessionStorage.setItem("formContacto", JSON.stringify({
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
            <div className="card-header">
              <h3>Datos de contacto</h3>
            </div>
            <div className="card-body">
              <div className="form-group mb-2">
                <input
                  onChange={handleChange}
                  value={form.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Correo electronico"
                />
                <input
                  onChange={handleChange}
                  value={form.telefono}
                  name="telefono"
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono celular"
                />
              </div>
            </div>
          </div>

          <div className="alert alert-pink" role="alert">
            {`${form.email}  `}
            <br />
            {`${form.telefono}`}
          </div>
        </div>
      </div>
    </div>
  );
};
