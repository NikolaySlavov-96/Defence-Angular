import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(date: string): any {

    const allDate = new Date(date);
    const year = allDate.getFullYear();
    const month = allDate.getMonth() + 1;
    const day = allDate.getDate();
    const hours = allDate.getHours();
    const minuts = allDate.getMinutes();
    return `${hours}:${minuts} - ${day}/${month}/${year}`
  }

}
