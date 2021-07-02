import Repository from 'src/Data/Repositories/Repository';
import Employee from '../Entities/Employees';

class GetAllEmployeeUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetEmployee(): Promise<Employee[]> {
    const Employees = await this.repository.findAll<Employee>();

    return Employees;
  }
}

export default GetAllEmployeeUsecase;
