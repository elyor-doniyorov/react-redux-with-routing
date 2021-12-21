import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectUsers } from './selectors';

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;

  img{
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users
}));

export function UsersList(props) {
  const { users } = useSelector(stateSelector);
  const isEmptyUsers = !users || (users && users.length === 0);
  if (isEmptyUsers)
    return null;

  return (
    <UsersContainers>
      {users.map((user, idx) => (
        <UserWrapper key={idx}>
          <UserImage>
            <img src={user.avatar} />
          </UserImage>
          <UserName>
            {user.first_name}
            {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainers>
  )
}