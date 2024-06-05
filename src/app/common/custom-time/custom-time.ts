import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTimeFormat'
})
export class CustomTimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const [hours, minutes] = value.split(':'); 
    return `${hours}:${minutes}`; 
  }
}