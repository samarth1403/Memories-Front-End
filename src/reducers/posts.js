//Reducers is a Function which accepts state and action and returns output based on type of action . It will return either action or state changed by action
// const reducer = (state , action) =>{
//     if(action.type === 'CREATE'){
//         return state
//     }
// }

//We will use Switch case if there are multiple if statements

//In reducers state is always initialized with some value
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    case "UPDATE":
      return posts.map((post) =>
        post.id === action.payload._id ? action.payload : post
      );

    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);

    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post);

    default:
      return posts;
  }
};
