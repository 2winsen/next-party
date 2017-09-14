import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'lvDate' })
export class LvDatePipe implements PipeTransform {
  transform(value: Date): String {
    var lvMonths:Array<String> = [
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
    return `${value.getDate()}. ${lvMonths[value.getMonth()]} ${value.getFullYear()}. gadā`;
  }
}