document.addEventListener("DOMContentLoaded", function () {

    const apiUrl = "http://localhost:4000/obter-locais";

    const locationsContainer = document.getElementById("locais-reciclagem");

    async function fetchRecyclingLocations() {
        try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();

            const data = responseData.allLocais || [];

            data.forEach(location => {
                const card = document.createElement("div");
                card.classList.add("card");

                const name = document.createElement("h2");
                name.textContent = location.ecoponto_name;

                const address = document.createElement("p");
                address.textContent = `Endereço: ${location.adress_ecoponto}`;

                const city = document.createElement("p");
                city.textContent = `Cidade: ${location.city_ecoponto}`;

                const description = document.createElement("p");
                description.textContent = `Descrição: ${location.description_ecoponto}`;

                const id = document.createElement("p");
                id.textContent = `Id: ${location.id}`;

                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(city);
                card.appendChild(description);
                card.appendChild(id)

                locationsContainer.appendChild(card);
            });
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    fetchRecyclingLocations();
});