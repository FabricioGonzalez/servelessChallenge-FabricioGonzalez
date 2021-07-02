import Repository from 'src/Data/Repositories/Repository';
import Employee from '../Entities/Employees';

class UpdateEmployeeUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async updateEmployee(
    id: string,
    employee: Employee,
  ): Promise<Employee | any> {
    const Employee = await this.repository.update<Employee>(id, employee);

    return Employee;
  }
}

export default UpdateEmployeeUsecase;
