import {Pipe} from '@angular/core';
@Pipe({
  name: 'search'
})
export class Search{
  transform(data:any, key:any, term = ""){
    if(!data) return null;
    return data.filter((item:any) => {
      return item[key].toLowerCase().includes(term.toLowerCase());
    })
  }
}
