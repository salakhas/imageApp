function commomFetchFunction(value){
    return fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=nq09tWXzARwU8KjggUE_XnNLnGWL_evJwQuoDawY-Vo`)
}

export default commomFetchFunction;