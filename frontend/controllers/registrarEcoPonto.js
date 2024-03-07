async function registrarLocal() {
    const apiUrl = "http://localhost:4000/registrar-local";
    const nomeEcoponto = document.getElementById("name").value;
    const enderecoEcoponto = document.getElementById("adress").value;
    const cidadeEcoponto = document.getElementById("city").value;
    const descricaoEcoponto = document.getElementById("description").value;
  
    const dadosLocal = {
      ecoponto_name: nomeEcoponto,
      adress_ecoponto: enderecoEcoponto,
      city_ecoponto: cidadeEcoponto,
      description_ecoponto: descricaoEcoponto,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosLocal),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao registrar local");
      }
  
      // Registro bem-sucedido
      alert("Local registrado com sucesso!");
    } catch (error) {
      // Erro durante o registro
      console.error("Erro ao registrar local:", error);
      alert("Erro ao registrar local. Por favor, tente novamente.");
    }
  }
  