import { IPerson, IPersonExtended } from "../../models/person.interface";
import { PersonExtended } from "../../models/person.model";
import { someUtilities } from "../some-utilities";


export class MutableImmutable {

  /**
   * Properties
   */
  // IPerson objects
  public static person: IPerson;
  public static person1: IPerson;
  public static person2: IPerson;

  // Arrays
  public static vector: Array<string>;
  public static vector1: Array<string>;
  public static vector2: Array<string>;
  public static vector3: any;

  // IPersonExtended objects
  public static personExtended: IPersonExtended;
  public static personExtended1: IPersonExtended;
  public static personExtended2: any;

  /**
   * Methods
   */
  public static initialize() {

    // IPerson objects
    this.person =  {
      firstName: 'John',
      lastName: 'Smith',
      age: 45,
      gender: 'male'
    };
    this.person1 = this.person;
    this.person2 = { ...this.person };

    // Arrays
    this.vector = [
      'mother',
      'father',
      'brother',
      'sister',
      'cousin',
      'grandfather',
      'grandmother'
    ];
    this.vector1 = this.vector;
    this.vector2 = [ ...this.vector ];
    this.vector3 = { ...this.vector };

    // IPersonExtended objects
    this.personExtended =  new PersonExtended('Liviu', 'Dragnea', 57, 'male');
    this.personExtended1 = this.personExtended;
    this.personExtended2 =  { ...this.personExtended }; // this will not clone the methods, so this.personExtended2 is not an IPersonExtended

  }


  public static spreadOperator(callback: (...message: Array<any>) => void): void {

    this.initialize();
    someUtilities.freeLines(2);
    console.log('a. Using spreading operator to create immutable objects:');
    someUtilities.freeLines(1);
    console.log('Objects person, person1 and person2 have similar content:');
    console.log('person = ', this.person);
    console.log('person1 = ', this.person1);
    console.log('person2 = ', this.person2);
    someUtilities.freeLines(1);
    console.log('If we mutate person1, person will be mutated too, but person2 won\'t.');
    this.person1.firstName = 'Jane';
    this.person1.gender = 'female'; // person1 will refer person so, changing person1, will mutate person
    console.log('person = ', this.person);
    console.log('person1 = ', this.person1);
    console.log('person2 = ', this.person2);
    someUtilities.freeLines(1);
    console.log('If we mutate person2, person and person1 won\'t be mutated.');
    this.person2.firstName = 'Miriam';
    this.person2.lastName = 'Moses';
    this.person2.gender = 'female'; // person2 won't refer person so, changing person2, won't mutate person
    console.log('person = ', this.person);
    console.log('person1 = ', this.person1);
    console.log('person2 = ', this.person2);
    someUtilities.enterAndClean();
    // ------------------------------------------------------------------------
    console.log('b. Using spreading operator to create immutable arrays:');
    someUtilities.freeLines(1);
    console.log('Arrays vector, vector1 and vector2 have the similar content:');
    console.log('vector = ', this.vector);
    console.log('vector1 = ', this.vector1);
    console.log('vector2 = ', this.vector2);
    someUtilities.freeLines(1);
    console.log('By changing vector1, we will also mutate vector, array vector2 won\'t be mutated');
    this.vector1[1] = 'Cristian';
    this.vector1[2] = 'Ionita';
    this.vector1[3] = 'Damigeana';
    console.log('vector = ', this.vector);
    console.log('vector1 = ', this.vector1);
    console.log('vector2 = ', this.vector2);
    someUtilities.freeLines(1);
    console.log('By changing vector2, we won\'t mutate vector and vector1.');
    this.vector2[0] = 'Iron Maiden';
    this.vector2[4] = 'Slayer';
    this.vector2[5] = 'Metallica';
    console.log('vector = ', this.vector);
    console.log('vector1 = ', this.vector1);
    console.log('vector2 = ', this.vector2);
    // ------------------------------------------------------------------------
    console.log('c. Using spreading operator on objects created from a class:');
    someUtilities.freeLines(1);
    console.log('personExtended = ', this.personExtended);
    console.log('personExtended1 = ', this.personExtended1);
    console.log('personExtended2 = ', this.personExtended2);
  }

};
