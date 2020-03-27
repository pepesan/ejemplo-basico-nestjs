export class RestDto {
  id: number;
  name: string;
  age: number;

  constructor(id: number = 0,
              name: string = '',
              age: number = 0) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

}
