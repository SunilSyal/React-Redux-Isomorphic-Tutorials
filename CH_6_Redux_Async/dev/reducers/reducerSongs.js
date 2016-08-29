export default function (state, action = {songs:[]}) {

  console.log('===============================================');
  console.log(state);

  switch (action.type) {
    case "FETCH_PLAYLIST": {
      state = action.payload;
    }

    default:
      return state ? state : [];
  }

}
