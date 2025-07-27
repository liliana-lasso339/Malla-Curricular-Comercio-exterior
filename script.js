// Espera a que todo el contenido HTML se cargue antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // --- Definición de Datos de la Carrera ---
    // Cada objeto representa un ramo con ID único, nombre, semestre y requisitos.
    const ramosData = [
        // Semestre 1
        { id: 'calculo', nombre: 'Cálculo', semestre: 1, requisitos: [] },
        { id: 'funda-economia', nombre: 'Fundamentos de Economía y Comercio', semestre: 1, requisitos: [] },
        { id: 'intro-derecho', nombre: 'Introducción al Derecho y Constitución Política', semestre: 1, requisitos: [] },
        { id: 'proceso-admin', nombre: 'Proceso Administrativo', semestre: 1, requisitos: [] },
        { id: 'taller-info', nombre: 'Taller de Habilidades Informáticas para la Gestión', semestre: 1, requisitos: [] },
        { id: 'funda-conta', nombre: 'Fundamentos de Contabilidad', semestre: 1, requisitos: [] },

        // Semestre 2
        { id: 'algebra-lineal', nombre: 'Álgebra Lineal', semestre: 2, requisitos: ['calculo'] },
        { id: 'sistemas-info', nombre: 'Sistemas de Información Gerencial', semestre: 2, requisitos: ['taller-info'] },
        { id: 'legis-comercial', nombre: 'Legislación Comercial', semestre: 2, requisitos: ['intro-derecho'] },
        { id: 'macroeconomia', nombre: 'Macroeconomía y Coyuntura', semestre: 2, requisitos: ['funda-economia'] },
        { id: 'regimen-aduanero', nombre: 'Régimen Aduanero', semestre: 2, requisitos: ['intro-derecho'] },
        { id: 'comprension-textos', nombre: 'Comprensión y Producción de Textos Académicos Generales', semestre: 2, requisitos: [] },
        { id: 'lenguas1', nombre: 'Lenguas con Fines Generales y Académicos I', semestre: 2, requisitos: [] },

        // Semestre 3
        { id: 'estadistica1', nombre: 'Estadística I para las Ciencias de la Administración', semestre: 3, requisitos: ['algebra-lineal'] },
        { id: 'mat-finanzas', nombre: 'Matemática para Finanzas', semestre: 3, requisitos: ['algebra-lineal'] },
        { id: 'legis-laboral', nombre: 'Legislación Laboral', semestre: 3, requisitos: ['legis-comercial'] },
        { id: 'economia-empresa', nombre: 'Economía de Empresa', semestre: 3, requisitos: ['macroeconomia'] },
        { id: 'importaciones', nombre: 'Importaciones', semestre: 3, requisitos: ['regimen-aduanero'] },
        { id: 'lenguas2', nombre: 'Lenguas con Fines Generales y Académicos II', semestre: 3, requisitos: ['lenguas1'] },
        { id: 'hatha-yoga', nombre: 'Estilos de Vida Saludable (HATHA YOGA)', semestre: 3, requisitos: [] },

        // Semestre 4
        { id: 'estadistica2', nombre: 'Estadística II para las Ciencias de la Administración', semestre: 4, requisitos: ['estadistica1'] },
        { id: 'ciencias-humanas', nombre: 'Ciencias Humanas', semestre: 4, requisitos: [] },
        { id: 'derecho-inter', nombre: 'Derecho Internacional Público y Privado', semestre: 4, requisitos: ['importaciones'] },
        { id: 'teoria-comercio', nombre: 'Teoría de Comercio Exterior', semestre: 4, requisitos: ['economia-empresa'] },
        { id: 'exportaciones', nombre: 'Exportaciones', semestre: 4, requisitos: ['importaciones'] },
        { id: 'lenguas3', nombre: 'Lenguas con Fines Generales y Académicos III', semestre: 4, requisitos: ['lenguas2'] },
        { id: 'teatro', nombre: 'Artístico y Humanístico (TEATROS Y TEATRALIDADES DEL MUNDO)', semestre: 4, requisitos: [] },
        
        // Semestre 5
        { id: 'humanismo', nombre: 'Humanismo, Pensamiento Administrativo y Organizaciones – Cátedra', semestre: 5, requisitos: ['ciencias-humanas'] },
        { id: 'investigacion-op', nombre: 'Investigación y Gestión de Operaciones', semestre: 5, requisitos: ['estadistica2'] },
        { id: 'regimen-cambiario', nombre: 'Régimen Cambiario', semestre: 5, requisitos: ['exportaciones'] },
        { id: 'mercadeo', nombre: 'Mercadeo', semestre: 5, requisitos: ['exportaciones'] },
        { id: 'tecnicas-negociacion', nombre: 'Técnicas de Negociación Internacional', semestre: 5, requisitos: ['exportaciones'] },
        { id: 'analisis-sistemas-prod', nombre: 'Análisis de los Sistemas de Producción de Bienes y Servicios', semestre: 5, requisitos: ['sistemas-info', 'estadistica2'] },
        { id: 'lenguas4', nombre: 'Lenguas con Fines Generales y Académicos IV', semestre: 5, requisitos: ['lenguas3'] },

        // Semestre 6
        { id: 'costos-presupuestos', nombre: 'Análisis de Costos y Presupuestos', semestre: 6, requisitos: ['funda-conta', 'sistemas-info'] },
        { id: 'estrategias-negocios', nombre: 'Estrategias y Negocios Internacionales', semestre: 6, requisitos: ['macroeconomia', 'tecnicas-negociacion'] },
        { id: 'logistica', nombre: 'Logística y Distribución Física Nacional e Internacional', semestre: 6, requisitos: ['tecnicas-negociacion'] },
        { id: 'tratados-acuerdos', nombre: 'Tratados y Acuerdos Comerciales', semestre: 6, requisitos: ['regimen-cambiario'] },
        { id: 'geoeconomia', nombre: 'Geoeconomía', semestre: 6, requisitos: ['macroeconomia', 'regimen-cambiario'] },
        { id: 'electiva-competitividad', nombre: 'Electiva Profesional (COMPETITIV. Y DESARROLLO ECON. REGIONAL)', semestre: 6, requisitos: [] },
        
        // Semestre 7
        { id: 'inteligencia-negocios', nombre: 'Inteligencia de Negocios y Analítica de Datos para la Gestión', semestre: 7, requisitos: ['sistemas-info'] },
        { id: 'admin-financiera', nombre: 'Administración y Gestión Financiera', semestre: 7, requisitos: ['costos-presupuestos'] },
        { id: 'contratacion-inter', nombre: 'Contratación Internacional', semestre: 7, requisitos: ['geoeconomia'] },
        { id: 'investigacion-mercados', nombre: 'Investigación de Mercados Internacionales', semestre: 7, requisitos: ['tratados-acuerdos', 'mercadeo'] },
        { id: 'formacion-social', nombre: 'Formación Social y Ciudadana', semestre: 7, requisitos: [] },
        { id: 'electiva7', nombre: 'Electiva Profesional', semestre: 7, requisitos: [] },

        // Semestre 8
        { id: 'consultorio', nombre: 'Consultorio Empresarial', semestre: 8, requisitos: ['contratacion-inter'] },
        { id: 'evaluacion-proyectos', nombre: 'Evaluación Financiera de Proyectos', semestre: 8, requisitos: ['admin-financiera'] },
        { id: 'finanzas-inter', nombre: 'Finanzas Internacionales', semestre: 8, requisitos: ['admin-financiera'] },
        { id: 'taller-escritura', nombre: 'Taller de Escritura Científica', semestre: 8, requisitos: ['comprension-textos'] },
        { id: 'integracion-economica', nombre: 'Integración Económica y Bloques Comerciales', semestre: 8, requisitos: ['tratados-acuerdos'] },
        { id: 'electiva8', nombre: 'Electiva Profesional', semestre: 8, requisitos: [] },

        // Semestre 9
        { id: 'normas-inter', nombre: 'Requisitos y Normas Internacionales para Bienes y Servicios', semestre: 9, requisitos: ['tratados-acuerdos'] },
        { id: 'electiva9', nombre: 'Electiva Profesional', semestre: 9, requisitos: [] },
        { id: 'trabajo-grado', nombre: 'Trabajo de Grado', semestre: 9, requisitos: ['consultorio'] }
    ];

    const frasesMotivacionales = [
        "¡Una asignatura más superada en el camino hacia mi meta profesional! Cada esfuerzo, cada noche de estudio, cada reto... ¡valió la pena!",
        "Hoy celebro más que una nota: celebro mi disciplina, mi constancia y mis ganas de crecer como profesional.",
        "Cada materia aprobada es un paso más cerca de mi título como Profesional en Comercio Exterior. ¡Vamos por más!",
        "Hoy apruebo una asignatura, mañana estaré negociando con el mundo. ¡Mi futuro se construye paso a paso!",
        "Pasar esta materia no solo representa una calificación, representa todo el esfuerzo silencioso que hay detrás. ¡Estoy haciendo que mi sueño se cumpla!",
        "Otra asignatura que queda atrás, y una versión más fuerte de mí que avanza. ¡Esto apenas comienza!",
        "Cada logro me acerca al profesional que quiero ser. ¡Hoy celebro lo que he logrado y lo que aún voy a conquistar!"
    ];

    const mallaContainer = document.getElementById('malla-curricular');
    const modal = document.getElementById('modal-requisitos');
    const modalMensaje = document.getElementById('modal-mensaje');
    const closeModalButton = document.querySelector('.close-button');

    // Carga los ramos aprobados desde el almacenamiento local o inicializa un array vacío.
    let ramosAprobados = JSON.parse(localStorage.getItem('ramosAprobadosComercio')) || [];

    /**
     * Genera dinámicamente el HTML de la malla a partir de los datos.
     */
    function generarMalla() {
        const numSemestres = Math.max(...ramosData.map(r => r.semestre));
        
        for (let i = 1; i <= numSemestres; i++) {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            semestreDiv.innerHTML = `<h2>Semestre ${i}</h2>`;
            
            const ramosDelSemestre = ramosData.filter(ramo => ramo.semestre === i);
            
            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.dataset.id = ramo.id;
                ramoDiv.textContent = ramo.nombre;
                semestreDiv.appendChild(ramoDiv);
            });
            mallaContainer.appendChild(semestreDiv);
        }
    }

    /**
     * Actualiza el estado visual de todos los ramos (aprobado, bloqueado, disponible).
     */
    function actualizarVisualizacion() {
        document.querySelectorAll('.ramo').forEach(ramoDiv => {
            const ramoId = ramoDiv.dataset.id;
            const ramoInfo = ramosData.find(r => r.id === ramoId);

            ramoDiv.classList.remove('aprobado', 'bloqueado');

            if (ramosAprobados.includes(ramoId)) {
                ramoDiv.classList.add('aprobado');
            } else {
                const requisitosCumplidos = ramoInfo.requisitos.every(reqId => ramosAprobados.includes(reqId));
                if (!requisitosCumplidos) {
                    ramoDiv.classList.add('bloqueado');
                }
            }
        });
    }

    /**
     * Guarda el estado actual en el almacenamiento local del navegador.
     */
    function guardarEstado() {
        localStorage.setItem('ramosAprobadosComercio', JSON.stringify(ramosAprobados));
    }
    
    /**
     * Muestra el modal con los requisitos faltantes.
     */
    function mostrarModal(requisitosFaltantes) {
        let listaHtml = '<ul>' + requisitosFaltantes.map(nombre => `<li>${nombre}</li>`).join('') + '</ul>';
        modalMensaje.innerHTML = 'Para cursar esta asignatura, primero debes aprobar:</p>' + listaHtml;
        modal.classList.add('visible');
    }

    /**
     * Oculta el modal de requisitos.
     */
    function ocultarModal() {
        modal.classList.remove('visible');
    }

    /**
     * Maneja el evento de clic sobre un ramo.
     */
    function handleRamoClick(e) {
        const ramoDiv = e.target.closest('.ramo');
        if (!ramoDiv) return;

        const ramoId = ramoDiv.dataset.id;
        const ramoInfo = ramosData.find(r => r.id === ramoId);
        
        if (ramoDiv.classList.contains('bloqueado')) {
            const requisitosFaltantesIds = ramoInfo.requisitos.filter(reqId => !ramosAprobados.includes(reqId));
            const nombresFaltantes = requisitosFaltantesIds.map(id => ramosData.find(r => r.id === id).nombre);
            mostrarModal(nombresFaltantes);
            return;
        }

        // Alternar estado: aprobar o desaprobar
        if (ramosAprobados.includes(ramoId)) {
            // Desaprobar: Quitar de la lista
            ramosAprobados = ramosAprobados.filter(id => id !== ramoId);
        } else {
            // Aprobar: Añadir a la lista y mostrar mensaje
            ramosAprobados.push(ramoId);
            const fraseAleatoria = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
            setTimeout(() => alert("¡Felicitaciones! 🎉\n\n" + fraseAleatoria), 100);
        }
        
        guardarEstado();
        actualizarVisualizacion();
    }
    
    // --- Inicialización y Asignación de Eventos ---
    
    generarMalla();
    actualizarVisualizacion();
    
    mallaContainer.addEventListener('click', handleRamoClick);
    closeModalButton.addEventListener('click', ocultarModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            ocultarModal();
        }
    });
});
