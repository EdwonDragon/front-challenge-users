export const postUsuarios = async () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var nacimiento = JSON.parse(sessionStorage.getItem("formNacimiento"));
        var nombre = JSON.parse(sessionStorage.getItem("formNombre"));
        var contacto = JSON.parse(sessionStorage.getItem("formContacto"));
        const data = { ...nombre, ...nacimiento, ...contacto };
        var raw = JSON.stringify({
            ...data,
        });

        // console.log(raw);
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:8000/api/usuarios/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.estado) {
                    Swal.fire({
                        icon: "success",
                        title: "Registrar",
                        text: result.msg,
                        showConfirmButton: true,
                    });
                } else {
                    let mensaje = "";
                    result.errors.forEach((msg) => {
                        mensaje += msg.msg + ' ';
                    });
                    Swal.fire({
                        icon: "warning",
                        title: "Oops...",
                        text: mensaje,
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    } catch (error) { }
};