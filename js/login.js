document.getElementById("formularioLogin").addEventListener("submit", (e) => {
    e.preventDefault();
    }) 
    
    const submit = document.getElementById("access");
    
    submit.addEventListener("click", () => {
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("contraseña").value;
    
        if (usuario && contraseña) {
            document.cookie = "authenticated=true; path=/"
    
            window.location.href = "index.html";
        } 
    })


