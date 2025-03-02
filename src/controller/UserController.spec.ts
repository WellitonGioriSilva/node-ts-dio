import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    deleteUser: jest.fn(),
  };
  const userController = new UserController(mockUserService as UserService);
  const mockResponse = makeMockResponse();
  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: { nome: "Welliton", email: "gioriwelliton47@gmail.com" },
    } as Request;
    const response = userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "usuário criado",
    });
  });
  it("Caso não informe o nome do usuário", () => {
    const mockRequest = {
      body: { nome: "", email: "gioriwelliton47@gmail.com" },
    } as Request;
    const response = userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: nome obrigatório",
    });
  });
  it("Caso não informe o email do usuário", () => {
    const mockRequest = {
      body: { nome: "Welliton Giori", email: "" },
    } as Request;
    const response = userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: email obrigatório",
    });
  });
  it("Deve deletar um usuário", () => {
    const mockRequest = {
      body: { nome: "Welliton Giori" },
    } as Request;
    const response = userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "usuário deletado",
    });
  });
});
