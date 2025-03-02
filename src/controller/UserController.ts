import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;
  constructor(userService = new UserService()) {
    this.userService = userService;
  }
  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.nome) {
      response.status(400).json({ message: "Bad request: nome obrigatório" });
      return;
    }

    this.userService.createUser(user.nome, user.email);
    response.status(201).json({ message: "usuário criado" });
    return;
  };

  getAllUser = (request: Request, response: Response) => {
    const users = this.userService.getAllUser();
    response.status(200).json({ dados: users });
    return;
  };

  deleteUser = (request: Request, response: Response) => {
    const users = this.userService.deleteUser();
    response.status(200).json({ message: "usuário deletado" });
    return;
  };
}
