import Repository from 'src/Data/Repositories/Repository';
import Employee from '../Entities/Employees';

class GetOneEmployeeUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetEmployee(id: string): Promise<Employee> {
    const Employee = await this.repository.findOne<Employee>(id);

    return Employee;
  }
}

export default GetOneEmployeeUsecase;
