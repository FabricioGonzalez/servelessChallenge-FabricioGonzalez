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
    const { id }: any = event.pathParameters;

    const body: any = event.body;

    const employee = await Service.update(id, JSON.parse(body));

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
