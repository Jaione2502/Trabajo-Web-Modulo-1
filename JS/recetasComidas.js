const apiKey = '14a96f3eeb7242fdb189b3560d91cd49';
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=lunch&type=lunch&cuisine=spanish&number=6&apiKey=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    obtenerRecetas();
});

async function obtenerRecetas() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        mostrarRecetas(data.results);
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
    }
}

function mostrarRecetas(recetas) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = '';
    recetas.forEach(receta => {
        const recetaCard = document.createElement('div');
        recetaCard.classList.add('recipe-card');

        recetaCard.innerHTML = `
            <img src="https://spoonacular.com/recipeImages/${receta.id}-312x231.jpg" alt="${receta.title}">
            <h3>${receta.title}</h3>           
            <a href="detalle.html?id=${receta.id}">Ver receta completa</a>
        `;

        container.appendChild(recetaCard);
    });
}