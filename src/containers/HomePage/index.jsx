import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import Axios from 'axios';
import { useEffect } from 'react';


const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users
}));

export function HomePage(props) {
  const {users} = useSelector(stateSelector);
  const fetchUsers = async () => {
    const response = await Axios.get('https://reqres.in/api/users').catch((err) => {
      console.log('Err: ', err);
    })
    console.log('Users: ', response.data.data)
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>Hello World!</div>
}
