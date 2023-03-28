const form = document.getElementById('form-login');
const datoLogin = document.getElementById('dato-login');
const apiDataContainer = document.getElementById('apiDataContainer');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = datoLogin.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Muestra los resultados de la API en el programa
      apiDataContainer.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Altura: ${data.height} cm</p>
        <p>Peso: ${data.weight} kg</p>
      `;
    })
    .catch(error => console.error(error));
});
