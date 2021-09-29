export function manageFriends(state, action) {
  // your code here
  // state = { friends: [] }
  // action = {
  //   type: "friends/add",
  //   payload: {
  //     name: "Chrome Boi",
  //     hometown: "NYC",
  //     id: 1
  //   }
  // }
  // action = {
  //   type: "friends/remove",
  //   payload: 1,
  // }

  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] }
    case "friends/remove":
      return { friends: state.friends.filter((f) => f.id !== action.payload)}
    default:
      return state
  }
}
