import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';


const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users
}));

export function HomePage(props) {
  const {users} = useSelector(stateSelector);
  console.log("Users: ", users);
  return <div>Hello World!</div>
}
