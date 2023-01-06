import React from 'react';
import { MdContactPhone } from 'react-icons/fa';
import { HomePageBox } from './Home.styled';

export default function Home() {
  return (
    <HomePageBox>
      <h1>Welcome to your Phonebook</h1>
      <div>
        <MdContactPhone size={36} />
      </div>
    </HomePageBox>
  );
}
