export interface Categorias {
    id:number;
    categoria:string;
    color:string;
}

categoriasD:Array<Categorias>();
export let categoriasD = [
    {"id": 0 ,"categoria": "Entretenimiento", "color": "success"},
    {"id": 1 ,"categoria": "Mundo", "color":"primary"},
    {"id": 2 ,"categoria": "Deporte", "color":"dark-red"},
    {"id": 3 ,"categoria": "Economia", "color":"violet"},
    {"id": 4 ,"categoria": "Salud", "color":"dark-blue"},
    {"id": 5 ,"categoria": "Tecnologia", "color":"danger"},
    {"id": 6 ,"categoria": "Ninguna", "color":"primary"}
  ];