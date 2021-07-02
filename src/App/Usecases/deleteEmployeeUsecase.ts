import Repository from 'src/Data/Repositories/Repository';
import Employee from '../Entities/Employees';

class DeleteEmployeeUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async DeleteEmployee(id: string): Promise<Employee> {
    const Employee = await this.repository.delete<Employee>(id);

    return Employee;
  }
}

export default DeleteEmployeeUsecase;
