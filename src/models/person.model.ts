import { IPersonExtended } from "./person.interface";

export class PersonExtended implements IPersonExtended {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public gender: 'male' |'female'
  ) {}
  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}