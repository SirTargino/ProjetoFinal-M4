async function registrarEmpresa() {
    const company_name = document.getElementById("name").value;
    const adress = document.getElementById("adress").value;
    const city = document.getElementById("city").value;
    const cnpj = document.getElementById("cnpj").value;
  
    const apiUrl = "http://localhost:4000/registrar-empresa";
  
    const dadosEmpresa = {
      company_name,
      adress,
      city,
      cnpj,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosEmpresa),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao registrar empresa');
      }
  
      const dadosResposta = await response.json();
  
      alert("Sucesso! Sua empresa foi registrada!")
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }