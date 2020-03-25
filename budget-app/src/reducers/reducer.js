export const initialValue = {
  data: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state
      };
    default:
      return {
        state
      };
  }
};
