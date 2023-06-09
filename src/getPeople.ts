import { DynamoDB } from 'aws-sdk';
const dynamoDB = new DynamoDB.DocumentClient();

interface User {
  firstName: string;
  lastName: string;
  address: string;
}

export const handler = async (): Promise<any> => { 
  const params = {
    TableName: 'PeopleTest',
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    const users = data.Items as User[];
    return {
         statusCode: 200, 
         body: JSON.stringify(users) 
        };
  } catch (error) {
    return { 
        statusCode: 500, 
        body: JSON.stringify(`Error getting users from DynamoDB: ${error}`) 
    };
  }
};