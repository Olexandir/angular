export interface User {
  age: number;
  avatar: string;
  createdAt: string;
  gender: string;
  id: string;
  isAlive: boolean;
  name: string;
  occupation: string;
}

export interface UserList {
  [key: string]: User;
}
