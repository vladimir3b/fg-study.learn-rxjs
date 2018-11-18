import { someUtilities } from "./app/some-utilities";
import { MutableImmutable } from "./app/mutable-immutable";

let option: number = -1;

while (option) {
  someUtilities.clearConsole();
  console.log('(1) - Mutable and Immutable objects in Javascript');
  console.log('(2) - Observables');
  console.log('(0) - Exit');
  option = someUtilities.numberFromConsole('Make a choice : ', 0, 2);
  switch (option) {
    case 0:
      console.log('Goodbye!');
      break;
    case 1:
      someUtilities.clearConsole();
      console.log('01 - Mutable and Immutable objects in Javascript');

      MutableImmutable.spreadOperator((values: Array<any>) => console.log(values));

      someUtilities.line();
      someUtilities.stringFromConsole('Press EMTER...');
      break;
    case 2:
      someUtilities.clearConsole();
      console.log('02 - Observables');
      // HERE COMES YOUR CODE
      someUtilities.line();
      someUtilities.stringFromConsole('Press EMTER...');
      break;
  }
}




