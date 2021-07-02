import { Sequelize } from 'sequelize';

const connection = new Sequelize('postgres', 'postgres', 'fabricio', {
  dialect: 'postgres',
  host: 'serverless.c8lcautyaje0.us-east-2.rds.amazonaws.com',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
});

export default connection;
