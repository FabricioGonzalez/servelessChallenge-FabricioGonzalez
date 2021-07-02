import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { v5 } from 'uuid';
import EmployeeDTO from 'src/Data/EmployeeDTO';
import Service from '../index';

/* const isValid = (data: any) => {
  const propertyNames = Object.getOwnPropertyNames(data);
  const amountInvalid = propertyNames
    .map((property) => (!!data[property] ? null : `${property} is Missing!!`))
    .filter((item) => !!item);
  return {
    valid: amountInvalid.length === 0,
    error: amountInvalid,
  };
}; */

const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const body: any = event.body;

    let data = JSON.parse(body);

    let item: EmployeeDTO = {
      name: data.name,
      age: data.age,
      position: data.position,
      deleted: 0,
    };

    let erro = null;

    await Service.create(item).catch((err: Error) => (erro = err));

    const response = {
      statusCode: 200,
      body: JSON.stringify(body, erro),
    };

    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: `${error}`,
    };
  }
};

export { handler };
