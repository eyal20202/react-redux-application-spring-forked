export const GET_DOGS = "GET_DOGS";
export const GET_DOGS_SUCCESS = "GET_DOGS_SUCCESS";
export const GET_DOGS_FAILURE = "GET_DOGS_FAILURE";

export const getDogs = () => ({ type: GET_DOGS });
export const getDogsSuccess = (dogs) => ({
  type: GET_DOGS_SUCCESS,
  payload: dogs
});
export const getDogsFailure = () => ({ type: GET_DOGS_FAILURE });

export function fetchDogs(animal) {
  return async (dispatch) => {
    dispatch(getDogs());
    try {
      fetch(
        `https://dogandcatfs.herokuapp.com/animal/type/${animal}`, {
          method: 'GET',
          crossDomain: true,
          headers: {
            'accept' : 'application/json',
            'Access-Control-Allow-Origin': "https://dogandcatfs.herokuapp.com/"
          }
        }
      )
      .then((response)=> response.json())
      .then(data => {
        console.log(data);
        dispatch(getDogsSuccess(data));
      })

    } catch (error) {
      dispatch(getDogsFailure());
    }
  };
}
