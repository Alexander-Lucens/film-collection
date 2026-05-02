import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;

    if (hours === 0) return `${minutes} min`;
    if (minutesLeft === 0) return `${hours} h`;

    return `${hours} h ${minutesLeft} min`;
  }
}
