const addPrefixMiddleware = (store) => (next) => (action) => {
  if (action.type === "users/fetchUsers/fulfilled") {
    const modifiedAction = {
      ...action,
      payload: action.payload.map((user) => ({
        ...user,
        first_name: `linux-dex ${user.first_name}`,
      })),
    };
    return next(modifiedAction);
  }
  return next(action);
};

export default addPrefixMiddleware;
