interface AllApiResponse {
  statusCode: number;
  status: string;
}

export interface UserApiResponse extends AllApiResponse {
  body: {
    username: string;
    email: string;
  };
}

interface FavouriteApiResponse {
  statusCode: number;
  status: string;
  body: {
    name: string;
    episode: string;
  };
}

interface GenericAPIResponse<ApiBody> {
  statusCode: number;
  status: string;
  body: ApiBody;
}

interface User {
  username: string;
  email: string;
}

const response: GenericAPIResponse<User> = {
  status: "OK",
  statusCode: 200,
  body: {
    username: "kevin",
    email: "kevin@kevincunningham.co.uk",
  },
};

const response2: GenericAPIResponse<User[]> = {
  status: "OK",
  statusCode: 200,
  body: [
    {
      username: "kevin",
      email: "kevin@kevincunningham.co.uk",
    },
  ],
};
