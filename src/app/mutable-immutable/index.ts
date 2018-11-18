import { IPerson, IPersonExtended } from "../../models/person.interface";
import { PersonExtended } from "../../models/person.model";

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


  public static spreadOperator(): void {

    console.log('Using spreading operator to create immutable objects ---------------------------');
    console.log('person = ', this.person);
    this.person1.firstName = 'Jane';
    this.person1.gender = 'female'; // person1 will refer person so, changing person1, will mutate person
    console.log('person = ', this.person);
    console.log('person2 = ', this.person2);
    this.person2.firstName = 'Miriam';
    this.person2.lastName = 'Moses';
    this.person2.gender = 'female'; // person2 won't refer person so, changing person2, won't mutate person
    console.log('person = ', this.person);
    console.log('person2 = ', this.person2);

  }

};
