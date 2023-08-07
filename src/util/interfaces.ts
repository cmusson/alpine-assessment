// 1. Use TypeScript to define the User type with the following properties:
// ID (string), rank (number), name (string), email (string), image (string), and friends (array of user IDs).

export interface IUser {
  id: string;
  rank: number;
  name: string;
  email: string;
  image: string;
  friends: string[];
}

export interface IUserUpdated {
  id: string;
  rank: number;
  name: string;
  email: string;
  image: string;
  friends: string[];
  friendNames: string[];
  highestRankingFriend: string;
}
