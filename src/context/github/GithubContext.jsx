import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{
    const initialState = {
      users: [],
      user: {},
      repos:[],
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

// get a single user details
const getUser = async (login) => {

  setLoading()

 
  const response = await fetch(`${GITHUB_URL}users/${login}`, {
    headers:{
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  })

  if(response.status === 404){
    window.location = '/notfound'
  }else{
    
    // destructuring the data which we get
    // const data = await response.json()
    const data = await response.json()
    
    dispatch({
      type: 'GET_USER',
      payload: data
    })
  }

}
// get user repos
const getUserRepos = async (login) => {

  setLoading()

  const params = new URLSearchParams({
    sort: 'created',
    per_page:10,
  })

  const response = await fetch(`${GITHUB_URL}users/${login}/repos?${params}`, {
    headers:{
      Authorization: `Bearer ${GITHUB_TOKEN}`
    }
  })

  // destructuring the data which we get
  // const data = await response.json()
  const data = await response.json()
  
  dispatch({
    type: 'GET_REPOS',
    payload: data
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
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
        }}>
          {children}
      </GithubContext.Provider>


}


export default GithubContext;