export const initialValue = {
  data: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return {
        state
      };
  }
};
