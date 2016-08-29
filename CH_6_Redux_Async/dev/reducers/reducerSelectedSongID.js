export default function (state = null, action) {

  console.log('+++++++++++++++++++++++++++++++++++++');
  console.log(state);

    switch (action.type) {
        case 'SONG_SELECTED':
            state = action.payload;
            break;
    }
    return state;
}
