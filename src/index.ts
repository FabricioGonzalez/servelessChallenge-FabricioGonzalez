import EmployeeService from './App/Services/EmployeesServices';
import CreateEmployeeUsecase from './App/Usecases/createEmployeeUsecase';
import DeleteEmployeeUsecase from './App/Usecases/deleteEmployeeUsecase';
import GetAllEmployeeUsecase from './App/Usecases/getAllEmployeeUsecase';
import GetOneEmployeeUsecase from './App/Usecases/getOneEmployeeUsecase';
import UpdateEmployeeUsecase from './App/Usecases/updateEmployeeUsecase';
import PostgresRepository from './Data/Repositories/PostgresRepository/repository';

const Repository = new PostgresRepository();

const createEmployee = new CreateEmployeeUsecase(Repository);
const deleteEmployee = new DeleteEmployeeUsecase(Repository);
const getAllEmployee = new GetAllEmployeeUsecase(Repository);
const getOneEmployee = new GetOneEmployeeUsecase(Repository);
const updateEmployee = new UpdateEmployeeUsecase(Repository);

const Service = new EmployeeService(
  createEmployee,
  getAllEmployee,
  getOneEmployee,
  deleteEmployee,
  updateEmployee,
);

export default Service;
