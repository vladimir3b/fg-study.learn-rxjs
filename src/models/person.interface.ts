interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
}

interface IPersonExtended extends IPerson {
  fullName: () => string;
}

export {
  IPerson,
  IPersonExtended
}