const initialValue = {
  data: []
};

export const dataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "DELETE_ITEM":
      const newData = state.data.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        data: newData
      };
    default:
      return state;
  }
};
