/* Pestaña lateral */
function toggleMenu(id) {
    var submenu = document.getElementById(id);
    if (!submenu) return; // Evitar errores si el elemento no existe
    
    var parentLi = submenu.parentElement;

    // Si el submenú ya está abierto, lo cerramos
    if (parentLi.classList.contains("open")) {
        parentLi.classList.remove("open");
    } else {
        // Primero, cerramos todos los submenús, pero solo si pertenecen al mismo nivel
        var submenus = parentLi.querySelectorAll('ul');
        submenus.forEach(function(sub) {
            sub.style.display = "none";
        });
        
        // Ahora, abrimos el submenú
        submenu.style.display = "block";
        parentLi.classList.add("open");
    }
}

/* Mostrar contenido dinámico */

function mostrarContenido(id) {
    var contenido = document.getElementById(id);
    if (!contenido) return;
    
    var contenedores = document.getElementsByClassName('contenido');
    for (var i = 0; i < contenedores.length; i++) {
        contenedores[i].style.display = 'none';
    }
    contenido.style.display = 'block';
}

/* Búsqueda en Datos Máquinas */
function doSearch() {
    var input, filter, table, tr, td, i, j, txtValue, found;
    input = document.getElementById("searchTerm");
    filter = input.value.toUpperCase();
    table = document.getElementById("DatosIP");
    tr = table.getElementsByTagName("tr");

    // Recorre todas las filas de la tabla (excepto la primera, que es el encabezado)
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none"; // Ocultar la fila por defecto
        td = tr[i].getElementsByTagName("td");

        // Recorre todas las celdas de la fila
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                // Si se encuentra el término de búsqueda en cualquier celda, mostrar la fila
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break; // Deja de buscar si ya se encontró un resultado en esta fila
                }
            }
        }
    }
}

/* Búsqueda en PDF */
let pdfs = []; // Variable para almacenar los datos cargados

// Cargar los PDFs desde el archivo JSON
async function cargarPDFs(categoria) {
    const tabla = document.querySelector("#tablaPDFs tbody");
    tabla.innerHTML = ""; // Limpia la tabla antes de cargar los datos

    try {
        // Filtra los PDFs por categoría
        const pdfsFiltrados = pdfData.filter(pdf => pdf.category === categoria);

        // Agrega las filas a la tabla
        pdfsFiltrados.forEach(pdf => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td><a href="../pdfs/pdfs/${pdf.nombre}" target="_blank">${pdf.nombre}</a></td>
                <td>${pdf.descripcion || "Sin descripción"}</td>
            `;
            tabla.appendChild(fila);
        });
        
        // Si no hay resultados, muestra un mensaje
        if (pdfsFiltrados.length === 0) {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td colspan="2">No se encontraron resultados para la categoría "${categoria}".</td>`;
            tabla.appendChild(fila);
        }
    } catch (error) {
        console.error("Error al cargar los PDFs:", error);
    }
}

// Filtrar los PDFs por término de búsqueda
function filtrarTabla() {
    const input = document.getElementById("filtro").value.toLowerCase();
    const filas = document.querySelectorAll("#tablaPDFs tbody tr");

    filas.forEach(fila => {
        const texto = fila.textContent.toLowerCase();
        fila.style.display = texto.includes(input) ? "" : "none";
    });
}

/* Filtro fallas */

const searchInputUnique = document.getElementById('searchInputUnique');
const solutionListUnique = document.getElementById('solutionListUnique');
const categoryContainer = document.querySelector('.contenido-lateral');
const fixedCategory = categoryContainer ? categoryContainer.getAttribute('data') : "";
const fixedShow = categoryContainer ? categoryContainer.getAttribute('show') : "";

function filterSolutionsUnique() {
    const searchTerm = searchInputUnique.value.toLowerCase();

    // Filtrar las soluciones que tienen show !== "false" y coinciden con el término de búsqueda
    const filteredSolutions = allSolutions.filter(solution => {
        const fallaMatch = solution.falla.toLowerCase().includes(searchTerm);
        const problemMatch = solution.problem.toLowerCase().includes(searchTerm);
        const idMatch = solution.id.toLowerCase().includes(searchTerm);
        const showMatch = solution.show !== "false"; // Aplicar el filtro de show

        return solution.category === fixedCategory && showMatch && (problemMatch || fallaMatch || idMatch);
    });

    displaySolutionsUnique(filteredSolutions);
}

function displaySolutionsUnique(filteredSolutions) {
    filteredSolutions.sort((a, b) => a.falla.localeCompare(b.falla));

    solutionListUnique.innerHTML = filteredSolutions.length
        ? filteredSolutions.map(solution => {
            const problemImagesHTML = solution.problem.match(/<img[^>]+src="([^"]+)"/g)?.map(img => {
                return `<img src="${img.match(/src="([^"]+)"/)[1]}" alt="Imagen del problema" style="max-width: auto; height: auto; margin: 5px;">`;
            }).join('') || '';

            const solutionImagesHTML = solution.solution.match(/<img[^>]+src="([^"]+)"/g)?.map(img => {
                return `<img src="${img.match(/src="([^"]+)"/)[1]}" alt="Imagen de la solución" style="max-width: 200px; height: auto; margin: 5px;">`;
            }).join('') || '';

            return `
                <li class="solution-item-unique">
                    <h3>
                        <span class="left-text"><strong>${solution.falla}</strong></span>
                        <span class="right-text">ID: ${solution.id}</span>
                    </h3><br>

                    <p><strong>Problema:</strong><br> ${solution.problem}</p>
                    <br>

                    <p><strong>Solución:</strong><br> ${solution.solution}</p>
                    <br>

                    <p><strong>Tiempo Estimado:</strong><br> ${solution.timeEst}</p>
                </li>
            `;
        }).join('')
        : '<li>&#128532 No se encontraron soluciones para el término de búsqueda.<br><br>¿Deseas añadir tu solución?<br><br>Utiliza el siguiente <a href="../html/formulario.html" target="_blank"><u>formulario.</u></a></li>';
}

if (searchInputUnique) {
    searchInputUnique.addEventListener('input', filterSolutionsUnique);
    filterSolutionsUnique();  // Llamada inicial
}

/* Cambio de tema claro/oscuro */

// Función para aplicar el tema
function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('.menu-lateral').classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('.footer').classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('.contenido-lateral').classList.toggle('dark-theme', theme === 'dark');

    // Verificar si el header existe antes de aplicar la clase
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('dark-theme', theme === 'dark');
    }

    // Aplicar la clase dark-theme a todas las tablas
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.classList.toggle('dark-theme', theme === 'dark');
    });

    // Aplicar la clase dark-theme a todos los divs
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.classList.toggle('dark-theme', theme === 'dark');
    });

    // Aplicar la clase dark-theme a todos los enlaces en el menú
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.classList.toggle('dark-theme', theme === 'dark');
    });

    // Aplicar la clase dark-theme a todos los enlaces en contenido-lateral
    const contentLinks = document.querySelectorAll('.contenido-lateral a');
    contentLinks.forEach(link => {
        link.classList.toggle('dark-theme', theme === 'dark');
    });

    // Aplicar la clase dark-theme a todas las filas de las tablas
    const rows = document.querySelectorAll('table tr:nth-child(even)');
    rows.forEach(row => {
        row.classList.toggle('dark-theme', theme === 'dark');
    });

    // Aplicar la clase dark-theme a los PDFs cargados dinámicamente
    const pdfRows = document.querySelectorAll('#tablaPDFs tbody tr');
    pdfRows.forEach(row => {
        row.classList.toggle('dark-theme', theme === 'dark');
    });
}

// Obtener el tema guardado en localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Añadir evento al botón para cambiar el tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Detectar cambios en el DOM para aplicar el tema oscuro a nuevos elementos
const observer = new MutationObserver(() => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    applyTheme(currentTheme);
});

// Configurar el observador para observar cambios en el cuerpo del documento
observer.observe(document.body, { childList: true, subtree: true });

// Función para abrir una ventana emergente
function abrirVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "block";
    }
}

// Función para cerrar una ventana emergente
function cerrarVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "none";
    }
}

// Función de búsqueda en la tabla
function doSearch() {
    const input = document.getElementById("searchTerm").value.toLowerCase();
    const rows = document.querySelectorAll("#DatosIP tbody tr");

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// Función para abrir una ventana emergente
function abrirVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "block";
    }
}

// Función para cerrar una ventana emergente
function cerrarVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "none";
    }
}