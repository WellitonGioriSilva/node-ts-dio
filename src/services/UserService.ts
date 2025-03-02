export interface IUser {
  name: string;
  email: string;
}

const db = [
  {
    name: "Giori",
    email: "gioriwelliton47@gmail.com",
  },
];

export class UserService {
  db: IUser[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log(this.db);
  };

  getAllUser = () => {
    return this.db;
  };

  deleteUser = () => {
    return this.db;
  };
}
