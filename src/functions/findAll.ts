import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import Service from '../index';

const handler: APIGatewayProxyHandler = async (
  _event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const employees = await Service.findAll();
    const response = {
      statusCode: 200,
      body: JSON.stringify(employees),
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: 'error',
    };
  }
};

export { handler };
