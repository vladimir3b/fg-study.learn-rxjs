import * as readLineSync from 'readline-sync';

export class someUtilities {

  public static clearConsole(): void {
    console.log('\x1bc');
    // or process.stdout.write('\x1bc');
  }

  public static line(n: number = 55): void {
    console.log('-'.repeat(n));
  }

  public static numberFromConsole(message: string, min?: number, max?: number): number {
    let number: number = readLineSync.questionInt(message);;
    if (typeof min === 'number') {
      number = (number >= min) ? number : min;
      if ((typeof max ==='number') && (min < max)) {
        number = (number <= max) ? number : max;
      }
    }
    return number;
  }

  public static stringFromConsole(message: string): string {
    return readLineSync.question(message);
  }

  public static randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * Math.abs(max - min) ) + min;
  }

}