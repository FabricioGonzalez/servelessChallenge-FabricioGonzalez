class EmployeeDTO {
  public name: string;
  public age: number;
  public position: string;
  public deleted: number = 0;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

export default EmployeeDTO;
