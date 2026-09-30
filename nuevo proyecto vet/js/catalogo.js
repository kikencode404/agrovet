const productos = [
    // FLAGASA - Cerdos
    {
        id: 1, linea: "FLAGASA", nombre: "Pian 0", categoria: "Cerdos",
        subcategoria: "Preiniciadores", presentacion: "25 kg", emoji: "🐖",
        protein: "20.00 % Min.", fat: "4.00 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "7.00 % Máx.", eln: "52.00 %"
    },
    {
        id: 2, linea: "FLAGASA", nombre: "Pian 1", categoria: "Cerdos",
        subcategoria: "Preiniciadores", presentacion: "25 kg", emoji: "🐖",
        protein: "22.00 % Min.", fat: "4.00 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "7.50 % Máx.", eln: "49.50 %"
    },
    {
        id: 3, linea: "FLAGASA", nombre: "Pian 2", categoria: "Cerdos",
        subcategoria: "Preiniciadores", presentacion: "25 kg", emoji: "🐖",
        protein: "20.50 % Min.", fat: "3.50 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "7.50 % Máx.", eln: "51.50 %"
    },
    {
        id: 4, linea: "FLAGASA", nombre: "C-400 Pre-iniciador", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "22.00 % Min.", fat: "5.00 % Min.", fiber: "4.00 % Max.",
        moisture: "12.00 % Max.", ash: "6.20 % Máx.", eln: "50.80 %"
    },
    {
        id: 5, linea: "FLAGASA", nombre: "C-410 iniciador", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "21.00 % Min.", fat: "6.00 % Min.", fiber: "3.50 % Max.",
        moisture: "12.00 % Max.", ash: "6.00 % Máx.", eln: "51.50 %"
    },
    {
        id: 6, linea: "FLAGASA", nombre: "C-420 Crecimiento", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "19.00 % Min.", fat: "6.00 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "6.00 % Máx.", eln: "52.00 %"
    },
    {
        id: 7, linea: "FLAGASA", nombre: "C-450 Gestación", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "13.00 % Min.", fat: "4.50 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "6.00 % Máx.", eln: "59.50 %"
    },
    {
        id: 8, linea: "FLAGASA", nombre: "C-460 Lactantes", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "17.00 % Min.", fat: "6.00 % Min.", fiber: "2.79 % Max.",
        moisture: "12.00 % Max.", ash: "5.00 % Máx.", eln: "57.21 %"
    },
    {
        id: 9, linea: "FLAGASA", nombre: "C-480 Súper Finalizador", categoria: "Cerdos",
        subcategoria: "Alta Magrez", presentacion: "25 kg", emoji: "🐖",
        protein: "18.50 % Min.", fat: "6.00 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "5.00 % Máx.", eln: "53.50 %"
    },
    {
        id: 10, linea: "FLAGASA", nombre: "C-100 iniciador", categoria: "Cerdos",
        subcategoria: "Línea Estándar", presentacion: "25 kg", emoji: "🐖",
        protein: "17.00 % Min.", fat: "4.00 % Min.", fiber: "7.00 % Max.",
        moisture: "12.00 % Max.", ash: "7.00 % Máx.", eln: "53.00 %"
    },
    {
        id: 11, linea: "FLAGASA", nombre: "CBB Crecimiento", categoria: "Cerdos",
        subcategoria: "Línea Comercial", presentacion: "25 kg", emoji: "🐖",
        protein: "13.50 % Min.", fat: "2.70 % Min.", fiber: "9.20 % Max.",
        moisture: "12.00 % Max.", ash: "7.40 % Máx.", eln: "55.20 %"
    },
    {
        id: 12, linea: "FLAGASA", nombre: "CBB Engorda", categoria: "Cerdos",
        subcategoria: "Línea Comercial", presentacion: "25 kg", emoji: "🐖",
        protein: "12.00 % Min.", fat: "3.70 % Min.", fiber: "9.20 % Max.",
        moisture: "12.00 % Max.", ash: "7.00 % Máx.", eln: "56.10 %"
    },

    // FLAGASA - Aves
    {
        id: 13, linea: "FLAGASA", nombre: "A6 Desarrollo de Pollas", categoria: "Aves",
        subcategoria: "Aves de postura", presentacion: "25 kg", emoji: "🐔",
        protein: "15.00 % Min.", fat: "3.25 % Min.", fiber: "5.00 % Max.",
        moisture: "12.00 % Max.", ash: "5.00 % Máx.", eln: "59.75 %"
    },
    {
        id: 14, linea: "FLAGASA", nombre: "A8 Gallinas de Postura", categoria: "Aves",
        subcategoria: "Aves de postura", presentacion: "25 kg", emoji: "🐔",
        protein: "15.50 % Min.", fat: "2.50 % Min.", fiber: "4.30 % Max.",
        moisture: "12.00 % Max.", ash: "12.00 % Máx.", eln: "53.70 %"
    },
    {
        id: 15, linea: "FLAGASA", nombre: "A13 Pollo de Engorda", categoria: "Aves",
        subcategoria: "Pollo de Engorda Alta Eficiencia", presentacion: "25 kg", emoji: "🐔",
        protein: "18.00 % Min.", fat: "3.50 % Min.", fiber: "4.13 % Max.",
        moisture: "12.00 % Max.", ash: "4.10 % Máx.", eln: "58.27 %"
    },
    {
        id: 16, linea: "FLAGASA", nombre: "Pollo Ahorro Crecimiento/Engorda", categoria: "Aves",
        subcategoria: "Pollo de Engorda Estándar", presentacion: "25 kg", emoji: "🐔",
        protein: "16.00 % Min.", fat: "5.00 % Min.", fiber: "4.40 % Max.",
        moisture: "12.00 % Max.", ash: "4.70 % Máx.", eln: "57.90 %"
    },
    {
        id: 17, linea: "FLAGASA", nombre: "PBB Pollo Crecimiento/Engorda", categoria: "Aves",
        subcategoria: "Pollo de Engorda Estándar", presentacion: "25 kg", emoji: "🐔",
        protein: "14.00 % Min.", fat: "5.10 % Min.", fiber: "7.70 % Max.",
        moisture: "12.00 % Max.", ash: "6.55 % Máx.", eln: "54.65 %"
    },
    {
        id: 18, linea: "FLAGASA", nombre: "Pollo Abarrotero", categoria: "Aves",
        subcategoria: "Pollo de Engorda Estándar", presentacion: "25 kg", emoji: "🐔",
        protein: "10.00 % Min.", fat: "5.40 % Min.", fiber: "7.00 % Max.",
        moisture: "12.00 % Max.", ash: "8.00 % Máx.", eln: "57.60 %"
    },

    // FLAGASA - Ganado
    {
        id: 19, linea: "FLAGASA", nombre: "Flagamineral", categoria: "Ganado",
        subcategoria: "Suplementos y Minerales", presentacion: "20 kg", emoji: "🐄",
        protein: "—", fat: "—", fiber: "—", moisture: "—", ash: "—", eln: "—",
        description: "Análisis indicado en el documento: Calcio 30.00 %, Sodio 9.00 %, Fosfato 4.00 %, Zinc 18,000 PPM, Hierro 240,000 PPM, Magneso 180,000 PPM, Cobre 17,000 PPM y Selenio 50 PPM."
    },
    {
        id: 20, linea: "FLAGASA", nombre: "G63 FlagaCarne Harina + Rolado", categoria: "Ganado",
        subcategoria: "Ganado de Engorda", presentacion: "25 kg", emoji: "🐄",
        protein: "14.00 % Min.", fat: "2.50 % Min.", fiber: "9.00 % Max.",
        moisture: "12.00 % Max.", ash: "11.00 % Máx.", eln: "51.50 %"
    },
    {
        id: 21, linea: "FLAGASA", nombre: "Lechero 18%", categoria: "Ganado",
        subcategoria: "Lechero Línea Verde", presentacion: "25 kg", emoji: "🐄",
        protein: "18.00 % Min.", fat: "5.50 % Min.", fiber: "10.00 % Max.",
        moisture: "12.00 % Max.", ash: "8.40 % Máx.", eln: "46.10 %"
    },
    {
        id: 22, linea: "FLAGASA", nombre: "G56 pellet 17%", categoria: "Ganado",
        subcategoria: "Lechero Línea Dorada", presentacion: "No indicada", emoji: "🐄",
        protein: "17.00 % Min.", fat: "3.35 % Min.", fiber: "9.70 % Max.",
        moisture: "12.00 % Max.", ash: "8.60 % Máx.", eln: "49.35 %"
    },

    // FLAGASA - Especialidades
    {
        id: 23, linea: "FLAGASA", nombre: "Flaga Conejo iniciador", categoria: "Conejos",
        subcategoria: "Conejos", presentacion: "25 kg", emoji: "🐇",
        protein: "18.52 % Min.", fat: "4.84 % Min.", fiber: "15.00 % Max.",
        moisture: "11.00 % Max.", ash: "8.67 % Máx.", eln: "41.97 %"
    },
    {
        id: 24, linea: "FLAGASA", nombre: "Flagasa Conejos", categoria: "Conejos",
        subcategoria: "Conejos", presentacion: "25 kg", emoji: "🐇",
        protein: "17.00 % Min.", fat: "5.00 % Min.", fiber: "17.00 % Max.",
        moisture: "11.00 % Max.", ash: "10.50 % Máx.", eln: "39.50 %"
    },
    {
        id: 25, linea: "FLAGASA", nombre: "Speed Roll", categoria: "Caballos",
        subcategoria: "Caballos", presentacion: "25 kg", emoji: "🐎",
        protein: "14.00 % Min.", fat: "4.80 % Min.", fiber: "8.00 % Max.",
        moisture: "12.00 % Max.", ash: "6.88 % Máx.", eln: "54.32 %"
    },
    {
        id: 26, linea: "FLAGASA", nombre: "Campero Rolado", categoria: "Caballos",
        subcategoria: "Caballos", presentacion: "25 kg", emoji: "🐎",
        protein: "13.60 % Min.", fat: "4.00 % Min.", fiber: "8.00 % Max.",
        moisture: "12.00 % Max.", ash: "6.68 % Máx.", eln: "54.52 %"
    },
    {
        id: 27, linea: "FLAGASA", nombre: "Caballo Arriero", categoria: "Caballos",
        subcategoria: "Caballos", presentacion: "25 kg", emoji: "🐎",
        protein: "13.50 % Min.", fat: "3.71 % Min.", fiber: "11.23 % Max.",
        moisture: "12.00 % Max.", ash: "10.32 % Máx.", eln: "49.24 %"
    },
    {
        id: 28, linea: "FLAGASA", nombre: "Gallo Entrepelea", categoria: "Gallos",
        subcategoria: "Gallos de Pelea", presentacion: "25 kg", emoji: "🐓",
        protein: "16.00 % Min.", fat: "5.78 % Min.", fiber: "4.50 % Max.",
        moisture: "12.00 % Max.", ash: "6.00 % Máx.", eln: "63.00 %"
    },
    {
        id: 29, linea: "FLAGASA", nombre: "Pavos Inicio Flagasa", categoria: "Pavos",
        subcategoria: "Pavos", presentacion: "25 kg", emoji: "🦃",
        protein: "22.00 % Min.", fat: "5.00 % Min.", fiber: "3.59 % Max.",
        moisture: "12.00 % Max.", ash: "6.51 % Máx.", eln: "50.90 %"
    },
    {
        id: 30, linea: "FLAGASA", nombre: "Pavos Crecimiento/Engorda Flagasa", categoria: "Pavos",
        subcategoria: "Pavos", presentacion: "25 kg", emoji: "🦃",
        protein: "19.00 % Min.", fat: "4.60 % Min.", fiber: "4.59 % Max.",
        moisture: "12.00 % Max.", ash: "6.14 % Máx.", eln: "53.67 %"
    },

    // NUTRISOW - Aves
    {
        id: 31, linea: "NUTRISOW", nombre: "Pollo Fase I", categoria: "Aves",
        subcategoria: "Inicio (1ª a 3ª semana)", presentacion: "40 kg", emoji: "🐔",
        protein: "21.5 % Min.", fat: "3.0 % Min.", fiber: "3.5 % Max.",
        moisture: "12.0 % Max.", ash: "5.5 % Max.", eln: "54.5 %",
        description: "Alimento para pollos de engorda en etapa de inicio, desde la primera a la tercera semana de edad."
    },
    {
        id: 32, linea: "NUTRISOW", nombre: "Pollo Fase II", categoria: "Aves",
        subcategoria: "Crecimiento (4ª a 5ª semana)", presentacion: "40 kg", emoji: "🐔",
        protein: "19.5 % Min.", fat: "2.5 % Min.", fiber: "3.5 % Max.",
        moisture: "12.0 % Max.", ash: "5.5 % Max.", eln: "57.0 %",
        description: "Alimento para pollos de engorda en etapa de crecimiento, desde la cuarta a la quinta semana de edad."
    },
    {
        id: 33, linea: "NUTRISOW", nombre: "Pollo Fase III", categoria: "Aves",
        subcategoria: "Finalización (6ª semana en adelante)", presentacion: "40 kg", emoji: "🐔",
        protein: "17.5 % Min.", fat: "2.5 % Min.", fiber: "3.0 % Max.",
        moisture: "12.0 % Max.", ash: "5.5 % Max.", eln: "59.5 %",
        description: "Alimento para pollos de engorda en etapa de finalización, desde la sexta semana de edad hasta lograr el peso requerido de mercado."
    },
    {
        id: 34, linea: "NUTRISOW", nombre: "Pollo Gordo", categoria: "Aves",
        subcategoria: "Finalización (7ª semana en adelante)", presentacion: "40 kg", emoji: "🐔",
        protein: "14.5 % Min.", fat: "2.5 % Min.", fiber: "5.0 % Max.",
        moisture: "12.0 % Max.", ash: "5.0 % Max.", eln: "61.0 %",
        description: "Alimento para pollos de engorda en etapa de finalización, desde la séptima semana de edad en adelante."
    },
    {
        id: 35, linea: "NUTRISOW", nombre: "Aves Postura Sow", categoria: "Aves",
        subcategoria: "Gallinas de postura", presentacion: "40 kg", emoji: "🐔",
        protein: "17.0 % Min.", fat: "2.0 % Min.", fiber: "4.0 % Max.",
        moisture: "12.0 % Max.", ash: "12.5 % Max.", eln: "52.5 %",
        description: "Alimento para gallinas de postura en etapa de producción. Formulado para aportar los nutrientes requeridos en la etapa de postura."
    },

    // NUTRISOW - Gallos
    {
        id: 36, linea: "NUTRISOW", nombre: "Gallo de Mantenimiento", categoria: "Gallos",
        subcategoria: "Aves deportivas", presentacion: "40 kg", emoji: "🐓",
        protein: "12.0 % Min.", fat: "4.0 % Min.", fiber: "3.5 % Max.",
        moisture: "12.0 % Max.", ash: "3.0 % Max.", eln: "65.5 %",
        description: "Alimento para aves deportivas, gallos adultos en la etapa de mantenimiento, en periodo de descanso."
    },
    {
        id: 37, linea: "NUTRISOW", nombre: "Gallo de Pelea", categoria: "Gallos",
        subcategoria: "Aves deportivas", presentacion: "40 kg", emoji: "🐓",
        protein: "12.0 % Min.", fat: "4.0 % Min.", fiber: "3.5 % Max.",
        moisture: "12.0 % Max.", ash: "3.0 % Max.", eln: "65.5 %",
        description: "Alimento para aves deportivas, gallos adultos durante la etapa previa al combate."
    },

    // NUTRISOW - Ganado
    {
        id: 38, linea: "NUTRISOW", nombre: "Becerras Desarrollo", categoria: "Ganado",
        subcategoria: "Bovinos en crecimiento y desarrollo", presentacion: "40 kg", emoji: "🐄",
        protein: "15.0 % Min.", fat: "2.0 % Min.", fiber: "6.5 % Max.",
        moisture: "12.0 % Max.", ash: "10.0 % Max.", eln: "54.5 %",
        description: "Alimento para bovinos en etapa de crecimiento y desarrollo a partir de los 6 meses de edad. Estimula el desarrollo de las becerras para tener un peso y tamaño adecuado para iniciar su etapa reproductiva."
    },
    {
        id: 39, linea: "NUTRISOW", nombre: "Lechero 18 % Básico", categoria: "Ganado",
        subcategoria: "Bovinos lecheros", presentacion: "40 kg", emoji: "🐄",
        protein: "18.0 % Min.", fat: "2.5 % Min.", fiber: "9.0 % Max.",
        moisture: "12.0 % Max.", ash: "17.5 % Max.", eln: "41.0 %",
        description: "Alimento para bovinos lecheros en etapa de producción."
    },
    {
        id: 40, linea: "NUTRISOW", nombre: "Nutrigos 10%", categoria: "Ganado",
        subcategoria: "Bovinos de engorda", presentacion: "40 kg", emoji: "🐄",
        protein: "10.0 % Min.", fat: "2.5 % Min.", fiber: "6.0 % Max.",
        moisture: "12.0 % Max.", ash: "20.5 % Max.", eln: "49.0 %",
        description: "Alimento para bovinos en etapa de engorda."
    },
    {
        id: 41, linea: "NUTRISOW", nombre: "Nutrigos 12%", categoria: "Ganado",
        subcategoria: "Bovinos de engorda", presentacion: "40 kg", emoji: "🐄",
        protein: "12.0 % Min.", fat: "3.0 % Min.", fiber: "8.0 % Max.",
        moisture: "12.0 % Max.", ash: "18.0 % Max.", eln: "47.0 %",
        description: "Alimento para bovinos en etapa de engorda."
    },
    {
        id: 42, linea: "NUTRISOW", nombre: "Nutrigos 14%", categoria: "Ganado",
        subcategoria: "Bovinos de engorda", presentacion: "40 kg", emoji: "🐄",
        protein: "14.0 % Min.", fat: "3.0 % Min.", fiber: "7.0 % Max.",
        moisture: "12.0 % Max.", ash: "12.0 % Max.", eln: "52.0 %",
        description: "Alimento para bovinos en etapa de engorda."
    },

    // NUTRISOW - Equinos
    {
        id: 43, linea: "NUTRISOW", nombre: "Corcel Azteca", categoria: "Caballos",
        subcategoria: "Equinos adultos", presentacion: "40 kg", emoji: "🐎",
        protein: "12.0 % Min.", fat: "2.5 % Min.", fiber: "5.5 % Max.",
        moisture: "12.0 % Max.", ash: "7.0 % Max.", eln: "61.0 %",
        description: "Alimento para equinos adultos de trabajo y de entrenamiento."
    },

    // NUTRISOW - Ovinos
    {
        id: 44, linea: "NUTRISOW", nombre: "Cordero Mix Engorda", categoria: "Ovinos",
        subcategoria: "Ovinos de engorda", presentacion: "40 kg", emoji: "🐑",
        protein: "15.0 % Min.", fat: "2.5 % Min.", fiber: "4.5 % Max.",
        moisture: "12.0 % Max.", ash: "9.0 % Max.", eln: "57.0 %",
        description: "Alimento para ovinos de engorda en etapa de finalización."
    },

    // NUTRISOW - Cerdos
    {
        id: 45, linea: "NUTRISOW", nombre: "Cerdos 30/70 Platino", categoria: "Cerdos",
        subcategoria: "Cerdos de engorda - crecimiento", presentacion: "40 kg", emoji: "🐖",
        protein: "16.5 % Min.", fat: "2.5 % Min.", fiber: "3.0 % Max.",
        moisture: "12.0 % Max.", ash: "4.5 % Max.", eln: "61.5 %",
        description: "Alimento para cerdos de engorda en etapa de crecimiento."
    },
    {
        id: 46, linea: "NUTRISOW", nombre: "Cerdos Desarrollo Comercial", categoria: "Cerdos",
        subcategoria: "Cerdos de engorda - crecimiento", presentacion: "40 kg", emoji: "🐖",
        protein: "13.0 % Min.", fat: "2.5 % Min.", fiber: "5.5 % Max.",
        moisture: "12.0 % Max.", ash: "15.0 % Max.", eln: "52.0 %",
        description: "Alimento para cerdos de engorda en etapa de crecimiento."
    },
    {
        id: 47, linea: "NUTRISOW", nombre: "Cerdos Final Magro", categoria: "Cerdos",
        subcategoria: "Cerdos de engorda - finalización", presentacion: "40 kg", emoji: "🐖",
        protein: "16.5 % Min.", fat: "2.5 % Min.", fiber: "4.0 % Max.",
        moisture: "12.0 % Max.", ash: "6.0 % Max.", eln: "59.0 %",
        description: "Alimento medicado con clorhidrato de ractopamina para cerdos en etapa de finalización. El documento señala que está elaborado y balanceado con ingredientes de alta calidad y micronutrientes, aminoácidos, vitaminas, minerales y aditivos."
    },
    {
        id: 48, linea: "NUTRISOW", nombre: "Cerdos 70/100 Sow", categoria: "Cerdos",
        subcategoria: "Cerdos de engorda - finalización", presentacion: "40 kg", emoji: "🐖",
        protein: "14.0 % Min.", fat: "2.5 % Min.", fiber: "5.0 % Max.",
        moisture: "12.0 % Max.", ash: "8.0 % Max.", eln: "58.5 %",
        description: "Alimento para cerdos de engorda en etapa de finalización."
    },
    {
        id: 49, linea: "NUTRISOW", nombre: "Cerdos Engorda Comercial", categoria: "Cerdos",
        subcategoria: "Cerdos de engorda - finalización", presentacion: "40 kg", emoji: "🐖",
        protein: "12.0 % Min.", fat: "2.5 % Min.", fiber: "5.5 % Max.",
        moisture: "12.0 % Max.", ash: "13.0 % Max.", eln: "55.0 %",
        description: "Alimento para cerdos de engorda en etapa de finalización."
    },
    {
        id: 50, linea: "NUTRISOW", nombre: "Gestación", categoria: "Cerdos",
        subcategoria: "Cerdas reproductoras - gestación", presentacion: "40 kg", emoji: "🐖",
        protein: "13.0 % Min.", fat: "2.5 % Min.", fiber: "8.0 % Max.",
        moisture: "12.0 % Max.", ash: "6.5 % Max.", eln: "58.0 %",
        description: "Alimento para cerdas reproductoras durante la etapa de gestación."
    },
    {
        id: 51, linea: "NUTRISOW", nombre: "Lactancia", categoria: "Cerdos",
        subcategoria: "Cerdas reproductoras - lactancia", presentacion: "40 kg", emoji: "🐖",
        protein: "16.5 % Min.", fat: "3.0 % Min.", fiber: "4.0 % Max.",
        moisture: "12.0 % Max.", ash: "6.0 % Max.", eln: "58.5 %",
        description: "Alimento para cerdas reproductoras durante la etapa de lactancia."
    }
];

const categorias = [
    { nombre: "Cerdos", emoji: "🐖", descripcion: "Alimentos para porcinos" },
    { nombre: "Aves", emoji: "🐔", descripcion: "Pollos y gallinas" },
    { nombre: "Ganado", emoji: "🐄", descripcion: "Alimentos para bovinos" },
    { nombre: "Caballos", emoji: "🐎", descripcion: "Alimentos para equinos" },
    { nombre: "Conejos", emoji: "🐇", descripcion: "Especialidades para conejos" },
    { nombre: "Gallos", emoji: "🐓", descripcion: "Alimentos para gallos" },
    { nombre: "Pavos", emoji: "🦃", descripcion: "Especialidades para pavos" },
    { nombre: "Ovinos", emoji: "🐑", descripcion: "Alimentos para ovinos" }
];

const lineas = [
    {
        nombre: "FLAGASA",
        emoji: "🐖",
        descripcion: "Alimentos para cerdos, aves, ganado y especialidades.",
        filtro: "FLAGASA"
    },
    {
        nombre: "NUTRISOW",
        emoji: "🐄",
        descripcion: "Alimentos para aves, gallos, ganado, equinos, ovinos y cerdos.",
        filtro: "NUTRISOW"
    }
];

const productGrid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const categoryFilter = document.getElementById("categoryFilter");
const lineFilter = document.getElementById("lineFilter");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

let categoriaSeleccionada = "todas";
let lineaActual = 0;

function renderCategorias() {
    categoryGrid.innerHTML = categorias.map(cat => `
        <button class="category-card" data-category="${cat.nombre}">
            <div class="category-icon">${cat.emoji}</div>
            <h3>${cat.nombre}</h3>
            <p>${cat.descripcion}</p>
        </button>
    `).join("");

    categorias.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat.nombre;
        option.textContent = cat.nombre;
        categoryFilter.appendChild(option);
    });

    categoryGrid.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            categoriaSeleccionada = card.dataset.category;
            categoryFilter.value = categoriaSeleccionada;
            renderProductos();
            document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function crearTarjeta(producto) {
    return `
        <article class="product-card">
            <div class="product-image">
                <span class="product-line">${producto.linea}</span>
                <span aria-label="Imagen de ${producto.categoria}">${producto.emoji}</span>
            </div>
            <div class="product-body">
                <h3>${producto.nombre}</h3>
                <div class="product-category">${producto.categoria}</div>
                <div class="product-subcategory">${producto.subcategoria || "Información de categoría no indicada"}</div>
                <span class="product-presentation">${producto.presentacion}</span>
                <button class="btn btn-primary detail-button" data-id="${producto.id}">
                    Ver información
                </button>
            </div>
        </article>
    `;
}

function renderProductos() {
    const texto = searchInput.value.trim().toLowerCase();
    const linea = lineFilter.value;
    const categoria = categoriaSeleccionada;

    const filtrados = productos.filter(producto => {
        const coincideTexto =
            producto.nombre.toLowerCase().includes(texto) ||
            producto.categoria.toLowerCase().includes(texto) ||
            producto.subcategoria.toLowerCase().includes(texto) ||
            producto.linea.toLowerCase().includes(texto);

        const coincideLinea = linea === "todos" || producto.linea === linea;
        const coincideCategoria = categoria === "todas" || producto.categoria === categoria;

        return coincideTexto && coincideLinea && coincideCategoria;
    });

    productGrid.innerHTML = filtrados.map(crearTarjeta).join("");

    resultCount.textContent = `Mostrando ${filtrados.length} de ${productos.length} productos`;

    if (filtrados.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    productGrid.querySelectorAll(".detail-button").forEach(button => {
        button.addEventListener("click", () => abrirModal(Number(button.dataset.id)));
    });
}

function abrirModal(id) {
    const producto = productos.find(item => item.id === id);
    if (!producto) return;

    document.getElementById("modalImage").textContent = producto.emoji;
    document.getElementById("modalLine").textContent = producto.linea;
    document.getElementById("modalCategory").textContent = producto.categoria;
    document.getElementById("modalTitle").textContent = producto.nombre;
    document.getElementById("modalSubcategory").textContent = producto.subcategoria || "";
    document.getElementById("modalPresentation").textContent = producto.presentacion;
    document.getElementById("modalProtein").textContent = producto.protein || "—";
    document.getElementById("modalFat").textContent = producto.fat || "—";
    document.getElementById("modalFiber").textContent = producto.fiber || "—";
    document.getElementById("modalMoisture").textContent = producto.moisture || "—";
    document.getElementById("modalAsh").textContent = producto.ash || "—";
    document.getElementById("modalELN").textContent = producto.eln || "—";
    document.getElementById("modalDescription").textContent = producto.description || "";

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
}

function cerrarModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

function actualizarCarrusel() {
    const linea = lineas[lineaActual];

    document.getElementById("lineNumber").textContent = `0${lineaActual + 1} / 02`;
    document.getElementById("lineTitle").textContent = linea.nombre;
    document.getElementById("lineDescription").textContent = linea.descripcion;
    document.getElementById("lineEmoji").textContent = linea.emoji;
    document.getElementById("lineButton").dataset.line = linea.filtro;

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === lineaActual);
    });
}

function seleccionarLinea(linea) {
    lineFilter.value = linea;
    categoriaSeleccionada = "todas";
    categoryFilter.value = "todas";
    renderProductos();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("prevLine").addEventListener("click", () => {
    lineaActual = (lineaActual - 1 + lineas.length) % lineas.length;
    actualizarCarrusel();
});

document.getElementById("nextLine").addEventListener("click", () => {
    lineaActual = (lineaActual + 1) % lineas.length;
    actualizarCarrusel();
});

document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        lineaActual = Number(dot.dataset.index);
        actualizarCarrusel();
    });
});

document.getElementById("lineButton").addEventListener("click", event => {
    seleccionarLinea(event.currentTarget.dataset.line);
});

searchInput.addEventListener("input", renderProductos);

lineFilter.addEventListener("change", () => {
    renderProductos();
});

categoryFilter.addEventListener("change", () => {
    categoriaSeleccionada = categoryFilter.value;
    renderProductos();
});

document.getElementById("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    lineFilter.value = "todos";
    categoryFilter.value = "todas";
    categoriaSeleccionada = "todas";

    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.remove("active");
    });

    renderProductos();
});

modalClose.addEventListener("click", cerrarModal);
modalBackdrop.addEventListener("click", cerrarModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        cerrarModal();
    }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

renderCategorias();
renderProductos();
actualizarCarrusel();
