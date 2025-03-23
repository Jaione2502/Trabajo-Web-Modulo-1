document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada con éxito");
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleModo = document.getElementById("modo-oscuro");

    toggleModo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
        }
    });

    // Comprobar modo guardado
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
    }
});

