import { Pipe, PipeTransform } from '@angular/core';
import { NoticesI } from '../Models/NoticesI';
import { NoticesService } from '../services/notices.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // transform(arreglo: any[], texto: string): any[] {

  //   // console.log(arreglo);
  //   if(texto===''){
  //     return arreglo;
  //   }

  //   texto = texto.toLowerCase();

  //   arreglo.filter( item => {
  //     return item.NoticesI.title.toLowerCase().includes( texto );
  //   });

  //   return arreglo;
  // }

  transform( arreglo: any[], texto: string = '',columna: string = 'title'): any[] {

    if ( texto === '' ) {
      return arreglo; 
    }

    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    // NoticesService.getAll()

    return arreglo.filter(
      
      item => item[columna].toLowerCase().includes( texto )
    );
    }

}
