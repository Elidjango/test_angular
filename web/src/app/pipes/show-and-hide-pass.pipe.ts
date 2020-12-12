import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAndHidePass'
})
export class ShowAndHidePassPipe implements PipeTransform {

  transform(value: string, show: boolean = false): string {
    return (show) ? value : "■".repeat(value.length);
  }

}
