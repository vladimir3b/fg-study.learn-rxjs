import { Observable, Observer } from 'rxjs';

import { someUtilities } from '../00-some-utilities';

export class Observables {

  public observable: Observable<string>;

  constructor() {
    this.observable = Observable.create((observer: Observer<string>) => {
      try {
        let option: number;
        let execute: boolean = true;
        // while (execute) {
        for (let i=0; i<=10; i++){
          option = someUtilities.randomInteger(2, 250) % 5;
          setTimeout(() => {
            switch (option) {
              case 1:
                observer.next('Message 1: "Hello sweety!".');
                break;
              case 2:
                observer.next('Message 2: "Hello Bobby!".');
                break;
              case 3:
                observer.next('Message 3: "No one will see this message!".');
                break;
              case 4:
                execute = false;
                observer.complete();
                break;
              default:
                if (someUtilities.randomInteger(2, 250) % 2 === 0) {
                  execute = false;
                  console.error('This is an error from the observable.');
                }
            }
          }, someUtilities.randomInteger(400, 2500));
        }
      } catch(error) {
        observer.error(error);
      }

    });
  }

}