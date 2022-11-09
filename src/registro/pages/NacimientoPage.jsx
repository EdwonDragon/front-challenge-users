import { useState } from "react";

const initialForm = {
  fechaNacimiento: "",
};

export const NacimientoPage = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (form.fechaNacimiento) {
      sessionStorage.setItem("formNacimiento", JSON.stringify(form));
    }else{
      sessionStorage.setItem("formNacimiento", JSON.stringify({
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
              <h3>¿Cual es tu fecha de nacimiento?</h3>
            </div>
            <div className="card-body">
              <div className="form-group mb-2">
                <input
                  type="date"
                  onChange={handleChange}
                  value={form.fechaNacimiento}
                  name="fechaNacimiento"
                  className="form-control"
                  placeholder="Fecha de nacimiento"
                />
              </div>
            </div>
          </div>

          <div className="alert alert-pink" role="alert">
            {`${form.fechaNacimiento} `}
          </div>
        </div>
      </div>
    </div>
  );
};
