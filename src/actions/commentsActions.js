export const GET_COMMENTS = "GET COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const getComments = () => ({ type: GET_COMMENTS });
export const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments
});
export const getCommentsFailure = () => ({ type: GET_COMMENTS_FAILURE });

export function fetchComments(animal,age) {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      fetch(
        `https://dogandcatfs.herokuapp.com/animal/type/${animal}?age=${age}`, {
        method: 'GET',
        crossDomain: true,
        headers: {
          'accept': 'application/json',
          'Access-Control-Allow-Origin': "https://dogandcatfs.herokuapp.com/"
        }
      }
      )
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          dispatch(getCommentsSuccess(data));
        })
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
}
