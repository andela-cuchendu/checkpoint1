import keyMirror from 'keymirror';

/* Define action constants */
const NewsActionTypes = keyMirror({
  GET_SOURCES: null,
  GET_NEWS: null,
  GET_ERROR: null,
});

export default NewsActionTypes;
