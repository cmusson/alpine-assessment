import { IUser } from "./interfaces";

// Implement a function called formatUser that takes a User object as input.
// This function should fill in two additional properties: friendNames (an array of all friends' names)
// and highestRankingFriend (the ID of the friend with the highest rank). The friendNames array should
// contain the names of the users based on their IDs. Find the optimal place for this function so it's
// called as infrequently as possible.

export const formatUser = (user: IUser, allUsers: IUser[]) => {
  if (user.friends.length === 0)
    return {
      ...user,
      friendNames: [],
      highestRankingFriend: "",
    };

  const orderedFriends = user.friends.sort((a, b) => Number(a) - Number(b));

  const friendNames = orderedFriends.map((id) => {
    const matchedObject = allUsers.find((obj) => obj.id === id);
    return matchedObject ? matchedObject.name : null;
  });

  const highestRankingFriend = friendNames[0];

  const updatedUser = {
    ...user,
    friendNames,
    highestRankingFriend,
  };

  return updatedUser;
};
