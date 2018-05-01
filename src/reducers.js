let obj={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
const reduce = (state = obj, action) => {
    switch (action.type) {
        case 'Data':
            return {
                ...state,
                status: action.data
            }
        default:
            return state
    }
}

export default reduce 