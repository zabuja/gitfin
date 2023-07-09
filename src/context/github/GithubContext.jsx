import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{
    const initialState = {
      users: [],
      loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

// get initial users(used for testing purposes)
    // const fetchUsers = async () => {

    //     setLoading()

    //     const response = await fetch(`${GITHUB_URL}users`, {
    //       headers:{
    //         Authorization: `Bearer ${GITHUB_TOKEN}`
    //       }
    //     })
    //     const data = await response.json()
    //     dispatch({
    //       type: 'GET_USERS',
    //       payload: data
    //     })
    //   }
// get the search results
const searchUsers = async (text) => {

  setLoading()

  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
    headers:{
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  })

  // destructuring the data which we get
  // const data = await response.json()
  const {items} = await response.json()
  
  dispatch({
    type: 'GET_USERS',
    payload: items
  })
}

// clear users after search from state
const clearUsers = () => {
  dispatch({type:'CLEAR_USERS'})
}

      // set loading function

      const setLoading = () => dispatch({type:'SET_LOADING'})


      return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
        }}>
          {children}
      </GithubContext.Provider>


}


export default GithubContext;