import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import Service from '../index';

const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const id: any = event.pathParameters;

    const employee = await Service.delete(id);

    const response = {
      statusCode: 200,
      body: JSON.stringify(employee),
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
