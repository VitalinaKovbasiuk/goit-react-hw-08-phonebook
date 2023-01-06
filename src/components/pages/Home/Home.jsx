import React from 'react';
import { FaTty } from 'react-icons/fa';
import { HomePageBox, Tel } from './Home.styled';

export default function Home() {
  return (
    <HomePageBox>
      <h1>Welcome to your Phonebook</h1>
      <Tel>
        <FaTty size={36} />
      </Tel>
    </HomePageBox>
  );
}
