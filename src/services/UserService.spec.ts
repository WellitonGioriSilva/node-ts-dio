import { IUser, UserService } from "./UserService";

describe("UserServic", () => {
  const mockDb: IUser[] = [];
  const userService = new UserService(mockDb);

  it("Deve criar um novo usuário ao banco de dados", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Welliton Giori", "gioriwelliton47@gmail.com");
    expect(mockConsole).toHaveBeenCalledWith(mockDb);
  });
});
