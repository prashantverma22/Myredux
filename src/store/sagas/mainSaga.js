import { call, put, takeLatest } from "redux-saga/effects";
import { TEST_SAGA, STORE_DEMO_SAGA } from "../actions/actionType";

// const userReducerStates = (state) => state.reducer;

function* checkSaga(value) {

  try {
    // let details = yield select(userReducerStates);
    // const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts/1');
    // console.log(response);

    //Method GET
    const getresp = yield call(() =>
      // fetch("https://api.chucknorris.io/jokes/random")
      fetch('http://dummy.restapiexample.com/api/v1/employees',{
        method: 'GET'
     })
     .then((response) => response.json())
        .then(myJson => myJson)
    );
        // console.log(getresp);
        console.log('Saga Data ', value.payload);

    //Method POST
    const postresp = yield call(() =>
      fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => response.json())
        .then(myJson => myJson),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json',
        },
        body: JSON.stringify(postresp)
      }
    );
    // console.log('checkSaga', value.payload);

    yield put({
        type: STORE_DEMO_SAGA,
        payload: getresp
    })

  } catch (error) {
    console.log(error)
  }
}

function* firstSaga() {
  console.log("Hello this is my first saga")
  yield takeLatest(STORE_DEMO_SAGA, checkSaga);
}
export { firstSaga };