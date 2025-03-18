// Reemplaza esto con tu clave de API de Spoonacular
const apiKey = '14a96f3eeb7242fdb189b3560d91cd49';

async function buscarRecetas() {
    const ingredientes = document.getElementById("ingredients").value;

    if (!ingredientes) {
        alert("Por favor, ingresa algunos ingredientes.");
        return;
    }

    // URL de la API para buscar recetas por ingredientes
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientes}&number=6&apiKey=${apiKey}`;
   
  

    try {
        // Hacer la solicitud a la API
        const response = await fetch(url);
        const recetas = await response.json();

        // Mostrar las recetas en la página
        mostrarRecetas(recetas);
    } catch (error) {
        console.error("Error al buscar recetas:", error);
        alert("Hubo un error al buscar las recetas.");
    }
}

async function buscarRecetasLista(nombre) {

    const textoIngredientes = document.getElementById("ingredients");

    // Limpiar el cuadro de texto de busqueda de alimentos
    textoIngredientes.value = "";


    const ingredientes = nombre 

    if (!ingredientes) {
        alert("Por favor, ingresa algunos ingredientes.");
        return;
    }

    // URL de la API para buscar recetas por ingredientes
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientes}&number=6&apiKey=${apiKey}`;

    try {
        // Hacer la solicitud a la API
        const response = await fetch(url);
        const recetas = await response.json();

        // Mostrar las recetas en la página
        mostrarRecetas(recetas);
    } catch (error) {
        console.error("Error al buscar recetas:", error);
        alert("Hubo un error al buscar las recetas.");
    }
}


function mostrarRecetas(recetas) {
    const recipesContainer = document.getElementById('recipe-container');
    
    recipesContainer.innerHTML = "";
    // Lista de recetas
    const recipeList = document.createElement('div');
    recipeList.classList.add('recipe-list');
    
    recetas.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');

        
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;
        recipeItem.appendChild(recipeImage);

        
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeItem.appendChild(recipeTitle);

        
        const recipeLink = document.createElement('a');
        recipeLink.href =   `detalle.html?id=${recipe.id}`
        recipeLink.target = "_blank";
        recipeLink.textContent = "Ver receta completa";
        recipeItem.appendChild(recipeLink);

        recipeList.appendChild(recipeItem);
    });


    recipesContainer.appendChild(recipeList);
}

