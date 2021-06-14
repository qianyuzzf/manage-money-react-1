import styled from 'styled-components';
import React from 'react';
import {Input} from '../Input';

const NoteSections = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void
}

function Notes(props: Props) {
  const note = props.value;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <NoteSections>
      <Input inputName="备注" type="text" placeholder="在这里添加备注"
             value={note} onChange={onChange}/>
    </NoteSections>
  );
}

export {Notes};