import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'latvianDate' })
export class LatvianDatePipe implements PipeTransform {
  transform(value: Date): string {
    const latvianMonths: Array<string> = [
      'janvārī',
      'februārī',
      'martā',
      'aprīlī',
      'maijā',
      'jūnijā',
      'jūlijā',
      'augustā',
      'septembrī',
      'oktobrī',
      'novembrī',
      'decembrī'
    ];
    return `${value.getFullYear()}. gada ${value.getDate()}. ${latvianMonths[value.getMonth()]}`;
  }
}
