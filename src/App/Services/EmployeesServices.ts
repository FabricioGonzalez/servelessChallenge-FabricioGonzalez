import EmployeeDTO from 'src/Data/EmployeeDTO';
import CreateEmployeeUsecase from '../Usecases/createEmployeeUsecase';
import DeleteEmployeeUsecase from '../Usecases/deleteEmployeeUsecase';
import GetAllEmployeeUsecase from '../Usecases/getAllEmployeeUsecase';
import GetOneEmployeeUsecase from '../Usecases/getOneEmployeeUsecase';
import UpdateEmployeeUsecase from '../Usecases/updateEmployeeUsecase';

class EmployeeService {
  private createEmployeeUsecase: CreateEmployeeUsecase;
  private getAllEmployeeUsecase: GetAllEmployeeUsecase;
  private getOneEmployeeUsecase: GetOneEmployeeUsecase;
  private deleteEmployeeUsecase: DeleteEmployeeUsecase;
  private updateEmployeeUsecase: UpdateEmployeeUsecase;

  constructor(
    Create: CreateEmployeeUsecase,
    Get: GetAllEmployeeUsecase,
    GetOne: GetOneEmployeeUsecase,
    Delete: DeleteEmployeeUsecase,
    Update: UpdateEmployeeUsecase,
  ) {
    this.createEmployeeUsecase = Create;
    this.getAllEmployeeUsecase = Get;
    this.getOneEmployeeUsecase = GetOne;
    this.deleteEmployeeUsecase = Delete;
    this.updateEmployeeUsecase = Update;
  }
  async create(employee: EmployeeDTO) {
    const createdEmployee = await this.createEmployeeUsecase.CreateEmployee(
      employee,
    );
    return createdEmployee;
  }
  async findAll() {
    const Employees = await this.getAllEmployeeUsecase.GetEmployee();
    return Employees;
  }
  async FindOne(id: string) {
    const Employee = await this.getOneEmployeeUsecase.GetEmployee(id);
    return Employee;
  }

  async update(id: string, employee: EmployeeDTO) {
    const updatedEmployee = await this.updateEmployeeUsecase.updateEmployee(
      id,
      employee,
    );
    return updatedEmployee;
  }
  async delete(id: string) {
    const deletedEmployee = await this.deleteEmployeeUsecase.DeleteEmployee(id);
    return deletedEmployee;
  }
}

export default EmployeeService;
