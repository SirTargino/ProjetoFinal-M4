async function registrarUsuario() {
    const apiUrl = "http://localhost:4000/registrar-user";
    const nomeUsuario = document.getElementById("name").value;
    const emailUsuario = document.getElementById("email").value;
    const senhaUsuario = document.getElementById("password").value;
  
    const dadosUsuario = {
      user_name: nomeUsuario,
      email: emailUsuario,
      password: senhaUsuario,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao registrar usuário");
      }
  
      // Registro bem-sucedido
      alert("Usuário registrado com sucesso!");
      window.location.href = "registerEcoPonto.html";
    } catch (error) {
      // Erro durante o registro
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar usuário. Por favor, tente novamente.");
    }
  }  