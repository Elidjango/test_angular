import { Pipe, PipeTransform } from '@angular/core';
import * as mmt from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string, defs?: string, format: string = ""):any {
    let result: any = mmt(value);

    if (defs.toLowerCase() === "fromnow" && format === "") {
      result = mmt(value).fromNow();
    } else if (defs.toLowerCase() === "todate" && format === "") {
      result = mmt(value).toDate();
    } else {
      if (format != "") {
        result = mmt(value).format(`${format}`);
      }
    }
    
    return result;
  }

}
