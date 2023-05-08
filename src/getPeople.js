"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
const dynamoDB = new aws_sdk_1.DynamoDB.DocumentClient();
const handler = () => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: 'PeopleTest',
    };
    try {
        const data = yield dynamoDB.scan(params).promise();
        const users = data.Items;
        return {
            statusCode: 200,
            body: JSON.stringify(users)
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(`Error getting users from DynamoDB: ${error}`)
        };
    }
});
exports.handler = handler;
// To get individual
// import { DynamoDB } from 'aws-sdk';
// const dynamoDB = new DynamoDB.DocumentClient();
// interface User {
//   firstName: string;
//   lastName: string;
//   address: string;
// }
// export const handler = async (event: any = {}): Promise<any> => {
//   const params = {
//     TableName: 'PeopleTest',
//     Key: {
//       firstName: event.firstName,
//       lastName: event.lastName
//     }
//   };
//   try {
//     const data = await dynamoDB.get(params).promise();
//     const user = data.Item as User;
//     return {
//          statusCode: 200, 
//          body: JSON.stringify(user) 
//         };
//   } catch (error) {
//     return { 
//         statusCode: 500, 
//         body: JSON.stringify(`Error getting users from DynamoDB: ${error}`) 
//     };
//   }
// };
