exports.getUser = async (event) => {
  const userId = event.pathParameters.id;

  const queryParams = event.queryStringParameters;
  const userType = queryParams.userType;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `User ID: ${userId}, Type: ${userType}`,
      },
      null,
      2
    ),
  };
};

exports.createUser = async (event) => {
  const body = JSON.parse(event.body);
  const { name, email } = body;

  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `User created successfully`,
        user: { name, email },
      },
      null,
      2
    ),
  };
};
