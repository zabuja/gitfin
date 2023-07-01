import React from "react";
import { useEffect } from "react";
const UserResults = () => {
  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}`, {
      headers:{
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return <div>UserResults</div>
}

export default UserResults;
