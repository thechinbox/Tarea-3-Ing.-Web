export interface Noticias {
    id:number;
    imgPath:string;
    title:string;
    cardBody:string;
    autor:string,
    body:string;
    fecha:Date;
    idcategoria:number;
}

export let noticias:Array<Noticias>= [
    { "id":1,
      "imgPath":"calamar.jpg",
      "title": "El juego del Calamar se convierte en la serie más visitada de Netflix",
      "cardBody": "Cientos de jugadores cortos de dinero aceptan una extraña invitación a competir en juegos infantiles. Adentro les espera un premio irresistible... con un riesgo mortal. Violenta prueba de moral y humanidad protagonizada por Lee Jung‑jae (Chief of Staff) y Park Hae‑soo (Prison Playbook).. " ,
      "autor":"Rodrigo Cardenas",
      "body": `Quienes hayan visto El Juego del Calamar en Netflix durante las últimas semanas probablemente notaron que, además de su trama -en apariencia- simple, adictiva y algo morbosa, la serie es un fenómeno absoluto y tema de conversación en todo el mundo. También, que tal como en Chile, la serie surcoreana ocupa el primer lugar del top 10 de los títulos más vistos en otros 93 países del planeta.\n
      Ahora, el revuelo se traslada a números y a un récord: a menos de un mes de su estreno en la plataforma, Netflix oficializó esta tarde que El Juego del Calamar es la serie más vista de toda la historia de la plataforma. 
      “El Juego del Calamar llegó a 11 millones de fans, convirtiéndose en la serie más grande de Netflix de todos los tiempos”, indica la cuenta en español de la compañía.`,
      "fecha": new Date(Date.parse('5/10/2020')),
      "idcategoria": 0
    },
    { "id": 2,
      "imgPath":"rino.jpg",
      "title": "Muere el Rinoceronte más Viejo",
      "cardBody": "Toby, el rinoceronte blanco más viejo del mundo, murió el 6 de octubre a los 54 años en un zoológico de Italia, según informó un portavoz del establecimiento.",
      "autor":"Rodrigo Cardenas",
      "body": `Ha muerto en Italia el rinoceronte blanco más viejo del mundo. Toby, así se llamaba el animal, falleció a los 54 años el pasado 6 de octubre, según Elisa Livia Pennacchioni del Parco Natura Viva, un zoológico de Verona.
      Se derrumbó en el camino de regreso a su refugio nocturno y, después de aproximadamente media hora, su corazón se detuvo", explicó Livia Pennacchioni. “Nonno Toby”, que significa abuelo Toby, se exhibirá en el museo de ciencias MuSe de Trento después de ser embalsamado.El rinoceronte blanco puede pesar más de 3.500 kilogramos
      Este tipo de rinocerontes viven unos 40 años cuando se encuentran en cautiverio, como Toby; mientras que aquellos que viven en la naturaleza tienen una vida de 30 años. Toby era, por lo tanto, el rinoceronte blanco más longevo del mundo.
      
      El abuelo Toby era una especie de rinoceronte blanco meridional, mamífero terrestre más grande después del elefante. Pueden llegar a medir hasta dos metros de altura y cuatro de longitud y tener un peso mayor de 3.500 kilogramos.
      
      Con la muerte de Toby y de su compañera Sugar en 2012, el Parco Natura Viva solo se queda con un rinoceronte blanco llamado Benno, de 39 años de edad. Ahora, Toby será expuesto en el mencionado museo junto a un león blanco de su mismo zoológico que murió hace cinco años.`,
      
      "fecha": new Date(),
      "idcategoria": 1
    },
    { "id":3,
      "imgPath":"cicli.jpg",
      "title": "Ciclismo - El regreso de Chris Froome",
      "cardBody": "Chris Froome regresa al Tour de Francia. Así lo ha confirmado su equipo, el Israel Start-Up Nation, que en las últimas horas incluyó al británico en su alineación oficial para la 108ª edición de la Grande Boucle (26 de junio al 18 de julio)",
      "autor":"Rodrigo Cardenas",
      "body": ``,
      "fecha": new Date(),
      "idcategoria": 2
    },
    { "id":4,
      "imgPath":"bitcoin.jpg",
      "title": "Mastercard también dará el paso y aceptará criptomonedas en su red tras una nueva alianza",
      "cardBody": `El avance de las criptomonedas parece imparable y las empresas se mueven para abrirles espacio en sus servicios.`,
      "autor":"Rodrigo Cardenas",
      "body": `El avance de las criptomonedas parece imparable y las empresas se mueven para abrirles espacio en sus servicios.
      Aunque las criptomonedas están viviendo un importante auge en lo que se refiere a repercusión e inversores, todavía encuentran varias barreras en el sector. Para muchos puede ser complicado hacerse con ellas o ven problemas de cara a un uso real en la vida diaria más allá de la inversión.
      Sin embargo, esto puede cambiar con rapidez tras movimientos como los que se observan en el sector bancario. En marzo de este año supimos que Visa iba a aceptar una stablecoin, la criptomoneda USDC. Ahora en Mastercard también avanzan en esa dirección y han sellado un acuerdo con la firma de criptomonedas Bakkt. 
      Esta información que ha llegado gracias a CNBC es importante por varios factores, empezando por los servicios que empezarán a ofrecer.Según se informa, Bakkt posibilitará que los comerciantes de la red de pagos MasterCard accedan a servicios de criptografía para poder trabajar con estas criptomonedas, una forma de superar las barreras tecnológicas más habituales.
      Además, tienen el objetivo de proporcionar recompensas en criptomonedas para que los usuarios después puedan cambiarlas por alojamientos en hoteles o aerolíneas.
      Recordemos que ya a principios de año en Mastercard hablaron sobre abrirse a este tipo de servicios. Parece que ante la inversión que puede suponer desarrollar estas tecnologías desde cero, los primeros anuncios son en referencia a tejer contactos y aliarse con empresas como Bakkt.
      Sherri Haymond, vicepresidenta ejecutiva de asociaciones digitales de Mastercard, afirmó que "no solo empoderaremos a nuestros socios para ofrecer una combinación dinámica de opciones de activos digitales, sino que también brindaremos experiencias de consumidor diferenciadas y relevantes".
      Al ofrecer estas tecnologías es más que posible que haya comercios que den el salto, sea por probar o por necesidades de la clientela. Recordemos que son muchos, cada día más, los que invierten o guardan criptomonedas, y este tipo de empresas deben satisfacer a los clientes y sus demandas.`,
      "fecha": new Date(),
      "idcategoria": 3
    },
    { "id":5,
      "imgPath":"covid.png",
      "title": "Se reportan 2.205 nuevos casos y 71.016 exámenes a nivel nacional en las últimas 24 horas con una positividad de 2,95%",
      "cardBody": `10 regiones tienen una positividad menor o igual a 2%. Dos regiones disminuyen sus casos en los últimos siete días y sólo una en las últimas dos semanas.`,
      "autor":"Rodrigo Cardenas",
      "body": `El Ministerio de Salud informa 2.205 casos nuevos de COVID-19, con una positividad de 2,95% en las últimas 24 horas a nivel nacional, con 71.016 exámenes, PCR y test de antígeno.

      La positividad en la Región Metropolitana es de 4% y 10 regiones tienen una positividad menor o igual a 2%. La variación de nuevos casos confirmados a nivel nacional es 24% y 92% para la comparación de 7 y 14 días respectivamente.
      
      De los 2.205 casos nuevos, un 17% se diagnostica por test de antígeno, un 21% se origina por Búsqueda Activa de Casos (BAC) y un 25% de los notificados son asintomáticos. En tanto, la Región Metropolitana presenta un 18% por antígeno, un 16% por BAC y 21% de los casos notificados son asintomáticos.
      
      Según toma de muestra, las regiones con mayor positividad son Metropolitana, O’Higgins, Valparaíso y Coquimbo. En tanto, la región Metropolitana registra el índice de incidencia más alto a nivel país por 100 mil habitantes, seguido por las regiones de Antofagasta, Tarapacá, y Arica y Parinacota.`,
      "fecha": new Date(),
      "idcategoria": 4
    },
    { "id":6,
      "imgPath":"intel.jpg",
      "title": "Presentación Alder Lake: la arquitectura más revolucionaria de CPU",
      "cardBody": `Intel ha presentado su duodécima (12ª) generación de procesadores Intel Core para ordenadores, con seis nuevos chips diferentes entre los que se incluye su variante más potente para videojuegos hasta el momento, i9-12900K, con hasta 5,2 GHz de potencia.`,
      "autor":"Rodrigo Cardenas",
      "body": `Intel ha presentado su duodécima (12ª) generación de procesadores Intel Core para ordenadores, con seis nuevos chips diferentes entre los que se incluye su variante más potente para videojuegos hasta el momento, i9-12900K, con hasta 5,2 GHz de potencia.

      La 12ª generación de Intel Core estará integrada por 60 modelos de procesadores en total, pero la compañía estadounidense ha anunciado este miércoles sus seis primeros chips durante su evento Intel Innovation.
      
      "Los nuevos procesadores de sobremesa alcanzan nuevas cotas de rendimiento multihilo para los jugadores entusiastas y los creadores profesionales", como ha afirmado Intel en un comunicado. Estos chips emplea el proceso Intel 7, que ofrece un rendimiento escalable de 9 a 125 vatios para permitir todos los segmentos de PC, desde los portátiles ultrafinos y ligeros hasta los ordenadores de sobremesa para aficionados e incluso el 'edge'.
      
      Las funciones comunes de la familia Intel Core de 12ª generación incluyen una arquitectura híbrida que presenta una combinación de núcleos de rendimiento (núcleos P), el núcleo de CPU de mayor rendimiento que Intel ha construido, y núcleos eficientes (núcleos E), diseñados para un rendimiento escalable de cargas de trabajo multihilo.
      
      Asimismo, la tecnología Intel Thread Director permite que las dos nuevas microarquitecturas de núcleo trabajen juntas sin problemas, guiando al sistema operativo para que coloque el hilo adecuado en el núcleo correcto en el momento adecuado.
      
      Entre los modelos presentados, Intel Core i9-12900K se convierte en el buque insignia de la 12ª generación para 'gaming'. Este nuevo procesado cuenta con un turbo máximo de hasta 5,2 GHz y hasta 16 núcleos y 24 hilos.
      
      El Core i9-12900K proporciona un aumento de rendimiento entre generaciones, con mejoras de FPS de hasta el 28 por ciento según el videojuego, así como conectividad por Intel Killer WiFi 6E para una latencia hasta un 75 por ciento menor mientras se juega en multitarea.
      
      Por su parte, los núcleos P de alta frecuencia emparejados con los núcleos E para la descarga de tareas paralelas permiten hasta un 84 por ciento más de fotogramas por segundo para jugar, transmitir y grabar simultáneamente.
      
      El buque insignia 'gaming' de la nueva familia de Intrl viene completado por otros cinco modelos que también se han presentado: con una variante de Intel Core i9 (i9-12900KF), dos Intel Core i7 (i7-12700K y i7-12700KF) y otros dos Intel Core i5 (i5-12600K y i5-12600KF).
      
      Las funciones de estos chips se orientan también a la creación de contenidos, con un rendimiento de edición de fotos hasta un 36% más rápido, edición de vídeo hasta un 32% más rápida, modelado 3D hasta un 37% más rápido y hasta un 100% más de velocidad en el renderizado de fotogramas múltiples.
      
      Los nuevos procesadores ofrecen herramientas de 'overclocking' líderes en el sector para la máxima personalización del rendimiento, incluida la posibilidad de 'overclockear' los núcleos eficientes y la memoria DDR5.
      
      Además, Intel presentó el último Intel Extreme Memory Profile (XMP) 3.0 con soporte para DDR5, ofreciendo perfiles adicionales, incluyendo nuevos perfiles personalizados reescribibles y un ajuste flexible para el 'overclocking' de la memoria.
      
      Intel ha destacado como principales avances de la plataforma que son los primeros procesadores de la industria en ofrecer memoria DDR5 de hasta 4800MT/s, así como los primeros en ofrecer PCIe 5.0 (hasta 16 carriles), que ofrece hasta dos veces más rendimiento de I/O sobre PCIe 4.0, con hasta cuatro carriles adicionales de soporte de PCIe 4.0.
      
      Los nuevos chips cuentan con hasta 30 MB de caché Intel Smart Cache (L3) y 14 MB de caché L2 para aumentar la capacidad de memoria con una latencia reducida, así como conectividad discreta por cable universal Thunderbolt 4 para la expansión de dispositivos externos.
      
      Intel también ha anunciado un nuevo chipset de la serie Intel 600 para ordenadores de sobremesa, con nuevos carriles PCIe Gen 4.0 que cuentan con un total de 28 carriles fuera del chipset, USB 3.2 Gen 22 integrado con hasta el doble de ancho de banda y DMI Gen 4.0.`,
      "fecha": new Date(),
      "idcategoria": 5
    },
    { "id":7,
      "imgPath":"cowboy.jpeg",
      "title": "Trailer final de 'Cowboy Bebop' en imagen real: la adaptación del anime promete.",
      "cardBody": `A menos de un mes de su estreno el próximo 19 de noviembre, y después de un teaser que supuraba estilo anime, imitando los característicos títulos de crédito de la serie original, Netflix nos muestra un avance "convencional" de esta adaptación que promete convertirse en uno de sus productos más atractivos para los últimos meses del año. John Cho, Mustafa Shakir y Daniella Pineda dan vida a los icónicos Spike Spiegel, Jet Black y Faye Valentine.`,
      "autor":"Rodrigo Cardenas",
      "body": `A menos de un mes de su estreno el próximo 19 de noviembre, y después de un teaser que supuraba estilo anime, imitando los característicos títulos de crédito de la serie original, Netflix nos muestra un avance "convencional" de esta adaptación que promete convertirse en uno de sus productos más atractivos para los últimos meses del año. John Cho, Mustafa Shakir y Daniella Pineda dan vida a los icónicos Spike Spiegel, Jet Black y Faye Valentine.
      En este nuevo avance podemos ver más acerca de la ambientación y la estética de la serie, que no parece tan cartoon como parecía indicar el primer avance. Y sin embargo, mantiene todo lo que nos gusta de 'Cowboy Bebop': las frases lapidarias, los personajes exagerados y los escenarios y situaciones icónicas. Habrá que ver si el conjunto funciona por sí mismo o depende en demasía de su inspiración.
      `,
      "fecha": new Date(),
      "idcategoria": 0
    }
]