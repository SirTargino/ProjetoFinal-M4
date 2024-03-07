document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:4000/obter-empresas";
    const locationsContainer = document.getElementById("empresas-reciclagem");
  
    async function fetchRecyclingLocations() {
      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
  
        const data = responseData.allCompanies || [];
  
        data.forEach(empresa => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          const name = document.createElement("h2");
          name.textContent = empresa.company_name;
  
          card.appendChild(name);
  
          locationsContainer.appendChild(card);
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }
  
    fetchRecyclingLocations();
  });