import { DataTypes } from 'sequelize';
import Repository from '../Repository';
import connection from './connection';

import Employee from './Models/Employee';

Employee.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: 'employees', sequelize: connection, modelName: 'employees' },
);

class PostgresRepository implements Repository {
  static async clear(): Promise<void> {
    await Employee.destroy({ where: { name: 'test' } });
  }

  async create<Employee>(employee: Employee): Promise<Employee | any> {
    let data = await Employee.create(employee);

    return data;
  }
  async update<Employee>(
    Id: string,
    employee: Employee,
  ): Promise<Employee | any> {
    let data = await Employee.update(employee, {
      where: {
        id: Id,
        deleted: 0,
      },
    });
    return data;
  }
  async findOne<Employee>(Id: string): Promise<Employee | any> {
    let data = await Employee.findAll({
      where: {
        id: Id,
        deleted: 0,
      },
    });

    return data;
  }
  async findAll<Employee>(): Promise<Employee[] | any> {
    let data = await Employee.findAll({
      where: {
        deleted: 0,
      },
    });

    return data;
  }
  async delete<Employee>(Id: string): Promise<Employee | any> {
    let data = await Employee.update(
      { deleted: 1 },
      {
        where: {
          id: Id,
        },
      },
    );

    return data;
  }
}

export default PostgresRepository;
