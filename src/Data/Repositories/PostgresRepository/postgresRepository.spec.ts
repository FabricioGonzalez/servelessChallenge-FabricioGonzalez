import connection from './connection';
import PostgresRepository from './repository';

describe('Test Suite to Database', () => {
  it('should check connection', async () => {
    await connection.authenticate().then();
  });
  it('should test if service is inserting and return the right value', async () => {
    const pg = new PostgresRepository();

    const data = {
      id: 'sdsadasds',
      name: 'test',
      age: 20,
      position: 'manager',
      deleted: 0,
    };
    await PostgresRepository.clear();

    await pg.create(data);
  });
});
