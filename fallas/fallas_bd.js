const allSolutions = [   
    {
       id: "57254",
       falla: "Sin red AOI",
       problem: "Se perdio la red en la AOI.<br>",
       category: "AOI-Saki",
       solution: "Haz un ping a cualquier otra maquina.<br>Revisa que la IP sea estatica y tenga bien sus <a href=\"../html/Datos_Maquinas.html\"><u>datos</u></a>.<br>Verifica que el cable ethernet no tenga falso.<br>En caso de no poder conectar, apoyate con IT.<br>",
       timeEst: "5 a 60 Min"
    },
    {
       id: "14716",
       falla: "Falla al iniciar la prueba",
       problem: "Manda la siguiente alerta al iniciar la prueba.<br><br><img src=\"../fallas/img_fallas/problem_14716_1.jpg\" alt=\"problem_14716_1.jpg\"><br><br><img src=\"../fallas/img_fallas/problem_14716_2.jpg\" alt=\"problem_14716_2.jpg\"><br><br><img src=\"../fallas/img_fallas/problem_14716_3.jpg\" alt=\"problem_14716_3.jpg\"><br>La prueba continua, cuando termina de inspeccionar, se cierra el programa.<br>",
       category: "AOI-Saki",
       solution: "Nos menciona el error que tiene una falla con el MPVClient.<br>Revisamos que este deshabilitado.<br>Volvemos a probar la tarjeta.<br><br><img src=\"../fallas/img_fallas/solution_14716_1.jpg\" alt=\"solution_14716_1.jpg\"><br>",
       timeEst: "< 5 Min"
    },
    {
       id: "97535",
       falla: "No lee la información la PLR",
       problem: "La PLR recibe la información, pero no la abre.<br><br><img src=\"../fallas/img_fallas/problem_97535_1.jpg\" alt=\"problem_97535_1.jpg\"><br>",
       category: "AOI-Vitrox",
       solution: "Revisa que el disco duro de la PLR no este llene.<br>De ser asi, elimina información.<br>Asegurate de hacer respaldo de los Tiles en servidor 230.<br>Elimina información de C:\\Defects\\data.<br>En la AOI, vacia la carpeta C:\\cpi\\img.<br>Vacia el Index de la PLR.<br>Vuelve a probar la tarjeta.<br>",
       timeEst: "< 5 Min"
    },
    {
       id: "57519",
       falla: "Serial ilegible",
       problem: "Falló la lectura del QR/Cod. de barras.<br><br><img src=\"../fallas/img_fallas/problem_57519_1.jpg\" alt=\"problem_57519_1.jpg\"><br>",
       category: "AOI-Saki",
       solution: "En la misma ventana, teclear el serial.<br>Si ves que el serial si esta bien, no se encuentra dañado o no esta muy al borde.<br>Depura el serial, prueba cambiando el tipo de luz.<br>",
       timeEst: "<1 Min",
       show: "true"
    },
    {
       id: "10215",
       falla: "Añadir defecto",
       problem: "No esta el defecto para fallar.<br>",
       category: "AOI-Vitrox",
       solution: "Entramos a Settings.<br><br><img src=\"../fallas/img_fallas/solution_10215_1.jpg\" alt=\"solution_10215_1.jpg\"><br>Vamos a la pestaña de Defects Details.<br>Añadimos el defecto en donde dice English y le damos al +.<br><br><img src=\"../fallas/img_fallas/solution_10215_2.jpg\" alt=\"solution_10215_2.jpg\"><br>",
       timeEst: "2 Min",
       show: "true"
    },
    {
       id: "56974",
       falla: "Añadir usuario",
       problem: "No esta registrado el personal.<br>",
       category: "AOI-Vitrox",
       solution: "Entramos como adminitrador.<br>Pasamos el mouse al lado izquierdo para que salga el menu.<br>Entramos a Admin.<br><br><img src=\"../fallas/img_fallas/solution_56974_1.jpg\" alt=\"solution_56974_1.jpg\"><br>Añadimos el Usuario, Contraseña y le damos Add.<br><br><img src=\"../fallas/img_fallas/solution_56974_2.jpg\" alt=\"solution_56974_2.jpg\"><br>",
       timeEst: "2 Min",
       show: "true"
    }, 
    {
       id: "72924",
       falla: "No manda información",
       problem: "La AOI no manda la información a la PLR.<br>",
       category: "AOI-Vitrox",
       solution: "Caso 1.<br>No tiene red la AOI y/o la PLR.<br>Abre cualquier pagina, como 42Q, Kiosko.<br>Verifica haciendo un Ping.<br><br><img src=\"../fallas/img_fallas/solution_72924_1.jpg\" alt=\"solution_72924_1.jpg\"><br>Caso 2.<br>No esta mapeada la AOI a la PLR.<br><br>Caso 3.<br>Esta deshabilitado el DefectPackage.<br>Vamos a Utilities.<br><img src=\"../fallas/img_fallas/solution_58168_3.jpg\" alt=\"solution_58168_3.jpg\"><br>Seleccionamos Configuration Files.<br>Verificamos que este activado DefectPackager<br><img src=\"../fallas/img_fallas/solution_72924_2.jpg\" alt=\"solution_72924_2.jpg\"><br>",
       timeEst: "5 Min",
       show: "true"

    },
    {
       id: "84745",
       falla: "Multiple Tarjetas",
       problem: "Hay más de una tarjeta dentro de la AOI.<br><br><img src=\"../fallas/img_fallas/problem_84745_1.jpg\" alt=\"problem_84745_1.jpg\"><br>",
       category: "AOI-Saki",
       solution: "Abre la AOI.<br>Revisa que solo se encuentre 1 Pallet/tarjeta dentro.<br>Cierra la AOI.<br>Presiona el boton de Reset.<br>Vuelve a inspeccionar.<br>",
       timeEst: "1 Min",
       show: "true"
    },
    {
       id: "56401",
       falla: "No manda información",
       problem: "No manda información a la VVTS",
       category: "AXI-Vitrox",
       solution: "Revisa que este mapeada la VVTS al AXI.<br>Entramos como Administrador a la VVTS.<br>Vamos a Settings.<br><br><img src=\"../fallas/img_fallas/solution_56401_1.jpg\" alt=\"solution_56401_1.jpg\"><br>Le damos en Test y comprobamos que salga Computer found.<br><br><img src=\"../fallas/img_fallas/solution_56401_2.jpg\" alt=\"solution_56401_2.jpg\"><br>En dado caso que salga Computer not found.<br><br><img src=\"../fallas/img_fallas/solution_56401_3.jpg\" alt=\"solution_56401_3.jpg\"><br>Verificamos que tengamos red.<br>Hacemos un Ping de la VVTS a la AXI.<br>En la VVTS mapeamos por CMD como administrador con el siguiente comando.<br>net use Z:\\10.249.49.??\\Defects\\USER:10.249.49.??\\administrator Please!<br>Intercambia los ?? por la IP del AXI a mapear.<br>Volvemos a verificar dandole en Test.<br>",
       timeEst: "5 Min",
       show: "true"
    },
    {
        id: "74562",
        falla: "Warning",
        problem: "Se detiene programa por exceso de No Good.<br><img src=\"../fallas/img_fallas/problem_74562_1.jpg\" alt=\"problem_74562_1.jpg\"><br>",
        category: "AOI-Saki",
        solution: "Vamos a la pestaña de Warning Control en la parte inferior.<br><br><img src=\"../fallas/img_fallas/solution_74562_1.jpg\" alt=\"solution_74562_1.jpg\"><br>Limpiamos la alerta de Warning<br><img src=\"../fallas/img_fallas/solution_74562_2.jpg\" alt=\"solution_74562_2.jpg\"><br>Depuramos el programa.<br>Volvemos a probar la tarjeta",
        timeEst: "1 a 5 Min",
        show: "false",
    },
    {
        id: "82002",
        falla: "Imagenes de referencia",
        problem: "El equipo no manda imágenes de referencia.<br>Estan desactualizadas las imágenes de referencia.",
        category: "AOI-Vitrox",
        solution: "Ingresa una tarjeta al equipo.<br>Selecciona la opción de Scan Full Board and Good Image.<br><img src=\"../fallas/img_fallas/solution_82002_1.jpg\" alt=\"solution_82002_1.jpg\"><br>Al finalizar, vuelve a inspeccionar la tarjeta<br><br><br>En caso de ser tarjeta Long Board, repite el proceso en la parte 2.<br>Una vez terminado ve a C:\\cpi\\goodimages<br>Busca la carpeta de la parte 1 y parte 2.<br>Copia todo el contenido de la 1 y pegalo en la 2.<br>Te preguntara si quieres reemplazar o ignorar, darle ignorar<br>Ahora copia todo lo de la carpeta 2 en la 1<br>Te preguntara si quieres reemplazar o ignorar, darle ignorar<br>Al finalizar, vuelve a inspeccionar la tarjeta.",
        timeEst: "1 a 5 Min",
        show: "true"
    },
    {
        id: "58168",
        falla: "Conveyor desajustado",
        problem: "El equipo no hace el acomodo del conveyor automáticamente cuando se cambia de modelo.",
        category: "AOI-Vitrox",
        solution: "Primero revisamos que tenga la medida guardada en el programa, para eso vamos a esta opción.<br><img src=\"../fallas/img_fallas/solution_58168_1.jpg\" alt=\"solution_58168_1.jpg\"><br>Revisamos que en Panel Width tenga la medida correspondiente.<br><img src=\"../fallas/img_fallas/solution_58168_2.jpg\" alt=\"solution_58168_2.jpg\"><br>Una vez confirmado, vamos a Utilities.<br><img src=\"../fallas/img_fallas/solution_58168_3.jpg\" alt=\"solution_58168_3.jpg\"><br>Se nos abrira SmartG Settings.<br>Vamos a la pestaña de Auto Width Adjustmen.<br>Revisamos que AWA PLC Control este activado.<br><img src=\"../fallas/img_fallas/solution_58168_4.jpg\" alt=\"solution_58168_4.jpg\"><br>Volvemos a cargar el programa para que ajuste el conveyor a la medida.",
        timeEst: "5 Min",
        show: "true"
    },
    {
        id: "98559",
        falla: "Tarjeta atorada",
        problem: "Se atoro tarjeta <br><img src=\"../fallas/img_fallas/problem_98559_1.jpg\" alt=\"problem_98559_1.jpg\"><br>",
        category: "AOI-Saki",
        solution: "Revisa donde se atoro la tarjeta, entre la FIFO & AOI<br>Que el el sensor de presencia si detecte el pallet<br>Revisa que el conveyor no este muy ajustado.<br>De ser así, ajústalo a la medida.<br><img src=\"../fallas/img_fallas/solution_98559_1.jpg\" alt=\"../fallas/img_fallas/solution_98559_1.jpg\"><br>",
        timeEst: "5 Min",
        show: "false"
    },
    {
        id: "68722",
        falla: "Interlock",
        problem: "Falla en interlocks.<br><img src=\"../fallas/img_fallas/problem_68722_1.jpg\" alt=\"problem_68722_1\"><br>",
        category: "AXI-Vitrox",
        solution: "Revisa que todas las puertas estén cerradas correctamente.<br>Que ningún sensor de los interlocks tenga algún falso.<br><img src=\"../fallas/img_fallas/solution_68722_1.jpg\" alt=\"solution_68722_1\"><br>",
        timeEst: "10 a 30 Min",
        show: "true"
    },
    {
        id: "25934",
        falla: "Tarjeta atorada",
        problem: "La tarjeta se atoro/no llego al sensor.<br><img src=\"../fallas/img_fallas/problem_25934_1.jpg\" alt=\"problem_25934_1\">",
        category: "AXI-Vitrox",
        solution: "Abre la puerta de servicio.<br>Revisa el porque se atoro la tarjeta (conveyor muy cerrado/entro mal la tarjeta/banda caída, etc).<br>Asegurate que no haya nada dentro del AXI antes de cerrar.<br>Dale Production.<br>Te saldrá la siguiente ventana<br><img src=\"../fallas/img_fallas//solution_25934_1.jpg\" alt=\"solution_25934_1\"><br>En caso de estar seguro que no hay, dale que No.<br>Vuelve a darle Production.<br>",
        timeEst: "5 Min",
        show: "true"
    },
    {
        id: "12985",
        falla: "Rayos X",
        problem: "No encienden los Rayos.<br><img src=\"../fallas/img_fallas/problem_12985_1.jpg\" alt=\"problem_12985_1\"><br>MFX alarmado<br><img src=\"../fallas/img_fallas/problem_12985_2.jpg\" alt=\"problem_12985_2\">",
        category: "AXI-Vitrox",
        solution: "Reiniciar equipo por completo.<br>Calentar tubo mediante MFX.<br> Iniciar con 80 en Voltage y Current.<br> Ir subiendo de 10 en 10 cada 10 Min hasta llegar a los 130.<br> Apaga Rayos y cierra MFX.<br> Abrir V810 y correr Warm Up de 15 Min.<br> Correr servicios.<br> Valida con una tarjeta",
        timeEst: "120 min",
        show: "true"
    },
    {
        id: "12155",
        falla: "Escala de grises",
        problem: "Pide actualizar escala de grises.",
        category: "AXI-Vitrox",
        solution: "Darle Unload.<br>Saca la tarjeta.<br>Empezara a actualizar la escala.<br>",
        timeEst: "30 Min",
        show: "true"
    },
    {
        id: "12265",
        falla: "Camara",
        problem: "Falla de cámara<br><img src=\"../fallas/img_fallas/problem_12265_1.jpg\" alt=\"problem_12265_1\">",
        category: "AXI-Vitrox",
        solution: "Verificar conexiones en el Atom.<br>Hacer un Ping 192.168.128.X (donde X es el numero de cámara).<br>Verifica que sean detectadas en el Smart Troubleshooting Tool.<br>Verifica que no haya ningún objeto dentro, mayormente en el plato.<br>Actualiza camaras e Inicializa.<br>Haz el Swap con cualquier otra camara (Manual).<br>Si la falla migra de camara, coloca la camara de Spare.<br>Actualiza en el Smart Troubleshooting Tool (Manual).<br>Te va pedir reiniciar el equipo.<br>En el v810 Actualiza camaras e Inicializa.<br>Valida con una o dos tarjetas.<br>Manda correo pidiendo el reemplazo a SMT-O.",
        timeEst: "2 Horas",
        show: "true"
    },
];
