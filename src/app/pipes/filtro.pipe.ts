import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string = ''): any[] {

    if ( texto === '' ) {
      return arreglo; 
    }

    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    // texto = texto.toLowerCase();

    return arreglo.filter(
      // item => item[columna].toLowerCase().includes( texto )
      notice => notice.header.title.toLowerCase().includes( texto )
    );

    // return arreglo.filter(notice =>{
    //   return notice.header.title.toLowerCase()
    //   .includes(texto);
    // })
    }

}
