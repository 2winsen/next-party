import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'latvianDate' })
export class LatvianDatePipe implements PipeTransform {
  transform(value: Date): String {
    var latvianMonths: Array<String> = [
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
    return `${value.getDate()}. ${latvianMonths[value.getMonth()]} ${value.getFullYear()}. gadā`;
  }
}