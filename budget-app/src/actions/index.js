export const addData = item => ({
  type: "ADD_DATA",
  payload: item
});

export const delItem = item => ({
  type: "DELETE_ITEM",
  payload: item
});
