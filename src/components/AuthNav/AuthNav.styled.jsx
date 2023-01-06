import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
text-decoration: none;
font-size: 22px;
font-weight: 700;
color: black;
border-bottom: 4px double black;
margin: 5px;

&:hover {
  color: #d41443;
  border-bottom: 4px double #d41443;
`;
