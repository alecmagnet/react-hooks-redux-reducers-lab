export function managePresents(state, action) {
  // your code here
  // state = { numberOfPresents: 0 }
  // action = {
  //   type: "presents/increase",
  // }

  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}
