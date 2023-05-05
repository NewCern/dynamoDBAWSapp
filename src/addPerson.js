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
const handler = (event = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        firstName: event.firstName,
        lastName: event.lastName,
        address: event.address,
    };
    const params = {
        TableName: 'PeopleTest',
        Item: user,
    };
    try {
        yield dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(`User ${user.firstName} ${user.lastName} added to DynamoDB!`)
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(`Error adding user to DynamoDB: ${error}`)
        };
    }
});
exports.handler = handler;
