import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, inputStr: string, searchableList: any) {
      debugger
    if (inputStr) {
      inputStr = inputStr.toLowerCase();
      return value.filter(function(elm: any) {
        let isTrue = false;
        for (let k in searchableList) {
          if (elm[searchableList[k]].toLowerCase().indexOf(inputStr) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return elm;
          }
        }
      });
    }
    return value;
  }

}
