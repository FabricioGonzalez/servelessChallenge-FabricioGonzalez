import Repository from '../../Data/Repositories/Repository';
import Employee from '../Entities/Employees';

class CreateEmployeeUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async CreateEmployee(employee: Employee): Promise<Employee | any> {
    const Employee = await this.repository.create(employee);

    return Employee;
  }
}

export default CreateEmployeeUsecase;
