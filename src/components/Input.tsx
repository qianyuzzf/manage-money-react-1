import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    width: 100%;
    background: none;
    border: none;
    display: flex;
    align-items: center;
  }
`;

type Props = {
  inputName: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: Props) {
  const {inputName, children, className, ...rest} = props;
  return (
    <Label>
      <span>{inputName}</span>
      <input {...rest} className={className}/>
    </Label>
  );
}

export {Input};