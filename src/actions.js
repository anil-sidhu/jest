
// export const profile = (params) => ({
//     type: 'Data',
//     data: "profile status is changed",
//   })

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}