import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = { createUser: jest.fn() };
  const userController = new UserController(mockUserService as UserService);
  it("Deve adicionar um novo usuário", () => {
    const mockResponse = makeMockResponse();
    const mockRequest = {
      body: { nome: "Welliton", email: "gioriwelliton47@gmail.com" },
    } as Request;
    const response = userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "usuário criado",
    });
  });
});
