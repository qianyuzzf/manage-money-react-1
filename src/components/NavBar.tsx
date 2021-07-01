import styled from 'styled-components';
import Icon from './Icon';
import React from 'react';

const Nav = styled.nav`
  padding: 12px 16px;
  font-size: 18px;
  background: rgba(255, 218, 69, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    width: 24px;
    height: 24px;
  }
`;

type Props = {
  typeName: string
} & React.InputHTMLAttributes<HTMLInputElement>

function NavBar(props: Props) {
  const {typeName} = props;
  return (
    <Nav>
      <Icon name="head_sculpture"/>
      <span>{typeName}</span>
      <Icon/>
    </Nav>
  );
}

export {NavBar};