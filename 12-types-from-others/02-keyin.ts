type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      favourite: { firstName: string; lastName: string; birthday: string };
      friends: {
        firstName: string;
        lastName: string;
        birthday: string;
      }[];
    };
  };
};

type FriendList = APIResponse["user"]["friendList"];
// type Friends = APIResponse["user"]["friendList"]["friends"];
type Friends = FriendList["friends"];
