import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers:any[],searchKey:string): any[] {
    const result:any = []

    if(!allUsers || searchKey==""){
      return allUsers
    }
      allUsers.forEach((item=>{
        console.log(item);
        
          if(item.name?.trim().toLowerCase().includes(searchKey.trim().toLocaleLowerCase())){
            result.push(item)
          }
      }))
      return result;
    }
   
  }


