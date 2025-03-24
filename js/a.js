const searchInput = document.getElementById('searchInputUnique');
const solutionList = document.getElementById('solutionListUnique');

// Filtro automático por categoría y show: true
function filterSolutions(category) {
    // Filtra las soluciones automáticamente según la categoría y show: "true"
    const filteredSolutions = allSolutions.filter(solution =>
        solution.category === category && solution.show === "true"
    );
    return filteredSolutions;
}

// Filtro adicional por término de búsqueda del usuario
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Obtén el valor de la categoría seleccionada o predeterminada
    const category = document.querySelector('.contenido-lateral').getAttribute('data');

    // Filtra las soluciones por la categoría y show: true, y luego por el término de búsqueda
    const filteredSolutions = filterSolutions(category).filter(solution =>
        solution.falla.toLowerCase().includes(searchTerm) ||
        solution.problem.toLowerCase().includes(searchTerm) ||
        solution.solution.toLowerCase().includes(searchTerm)
    );
    
    renderSolutions(filteredSolutions);
});

// Función para renderizar las soluciones en el HTML
function renderSolutions(solutions) {
    solutionList.innerHTML = '';
    solutions.forEach(solution => {
        const solutionItem = document.createElement('li');
        solutionItem.innerHTML = `
            <h3>${solution.falla}</h3>
            <p>${solution.problem}</p>
            <p><strong>Solución:</strong> ${solution.solution}</p>
            <p><strong>Tiempo Estimado:</strong> ${solution.timeEst}</p>
        `;
        solutionList.appendChild(solutionItem);
    });
}

// Filtra las soluciones por categoría inicialmente
const category = document.querySelector('.contenido-lateral').getAttribute('data');
const initialSolutions = filterSolutions(category);
renderSolutions(initialSolutions);