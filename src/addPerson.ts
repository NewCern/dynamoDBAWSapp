import { DynamoDB } from 'aws-sdk';
const dynamoDB = new DynamoDB.DocumentClient();

interface User {
  personId: string;
  firstName: string;
  lastName: string;
  address: string;
}

export const handler = async (event: any = {}): Promise<any> => {
  // const user: User = {
  //   personId: event.personId,
  //   firstName: event.firstName,
  //   lastName: event.lastName,
  //   address: event.address,
  // };

  const user = JSON.parse(event.body)

  if (!user.hasOwnProperty('personId')) {
    return {
      statusCode: 400,
      body: JSON.stringify('Missing personId'),
    };
  }
  

  const params = {
    TableName: 'PeopleTest',
    Item: user,
  };

  try {
    await dynamoDB.put(params).promise();
    return {
         statusCode: 200, 
         body: JSON.stringify(`User ${user.firstName} ${user.lastName} added to DynamoDB!`) 
        };
  } catch (error) {
    return { 
        //statusCode: 500, 
        body: JSON.stringify(`Error adding user to DynamoDB: ${error}`) 
    };
  }
};
