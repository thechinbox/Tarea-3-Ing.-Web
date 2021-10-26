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

export let seleccionada = 0;

export function setid(id:number){
  seleccionada = id;
}
export function setdefault(){
  seleccionada = 0;
}
export function getid():number{
  return seleccionada
}

export let noticias:Array<Noticias>= [
    { "id":1,
      "imgPath":"https://as02.epimg.net/meristation/imagenes/2021/09/28/videos/1632823754_596212_1632823812_noticia_normal.jpg",
      "title": "El juego del Calamar se convierte en la serie más visitada de Netflix",
      "cardBody": "Cientos de jugadores cortos de dinero aceptan una extraña invitación a competir en juegos infantiles. Adentro les espera un premio irresistible... con un riesgo mortal. Violenta prueba de moral y humanidad protagonizada por Lee Jung‑jae (Chief of Staff) y Park Hae‑soo (Prison Playbook).. " ,
      "autor":"",
      "body": `Quienes hayan visto El Juego del Calamar en Netflix durante las últimas semanas probablemente notaron que, además de su trama -en apariencia- simple, adictiva y algo morbosa, la serie es un fenómeno absoluto y tema de conversación en todo el mundo. También, que tal como en Chile, la serie surcoreana ocupa el primer lugar del top 10 de los títulos más vistos en otros 93 países del planeta.\n
      Ahora, el revuelo se traslada a números y a un récord: a menos de un mes de su estreno en la plataforma, Netflix oficializó esta tarde que El Juego del Calamar es la serie más vista de toda la historia de la plataforma. 
      “El Juego del Calamar llegó a 11 millones de fans, convirtiéndose en la serie más grande de Netflix de todos los tiempos”, indica la cuenta en español de la compañía.`,
      "fecha": new Date(Date.parse('5/10/2020')),
      "idcategoria": 0
    },
    { "id": 2,
      "imgPath":"https://images.radio.com/aiu-media/rinoceronte5-3d1efc0b-9064-49d5-8cc8-52c97d7ed775.jpg",
      "title": "Muere el Rinoceronte más Viejo",
      "cardBody": "Toby, el rinoceronte blanco más viejo del mundo, murió el 6 de octubre a los 54 años en un zoológico de Italia, según informó un portavoz del establecimiento.",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 1
    },
    { "id":3,
      "imgPath":"https://as01.epimg.net/ciclismo/imagenes/2021/06/16/mas_ciclismo/1623829697_841805_1623829885_noticia_normal_recorte1.jpg",
      "title": "Ciclismo - El regreso de Chris Froome",
      "cardBody": "Chris Froome regresa al Tour de Francia. Así lo ha confirmado su equipo, el Israel Start-Up Nation, que en las últimas horas incluyó al británico en su alineación oficial para la 108ª edición de la Grande Boucle (26 de junio al 18 de julio)",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 2
    },
    { "id":4,
      "imgPath":"",
      "title": "",
      "cardBody": "",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 6
    },
    { "id":5,
      "imgPath":"",
      "title": "",
      "cardBody": "",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 6
    },
    { "id":6,
      "imgPath":"",
      "title": "",
      "cardBody": "",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 6
    },
    { "id":7,
      "imgPath":"",
      "title": "",
      "cardBody": "",
      "autor":"",
      "body": "",
      "fecha": new Date(),
      "idcategoria": 6
    }
]