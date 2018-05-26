import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      Nombre:'Alcedo',
      Especialidad:'Html',
      Descripcion:'HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web.'
    },
    {
      Nombre:'Prieto',
      Especialidad:'CSS',
      Descripcion:'Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.'
    }
  ]

  constructor() { 
  console.log('Hola Mundo')  
  }
  
  obtenerEquipo(){
    return this.equipo;
  }
}
