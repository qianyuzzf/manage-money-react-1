import styled from 'styled-components';
import React from 'react';
import {Input} from '../Input';

const NoteSections = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

const MyInput = styled(Input)`
  height: 56px;
`;

type Value = { notes: string, time: string }

type Props = {
  value: Value;
  onChange: (value: Value) => void
}

function Notes(props: Props) {
  const propsData = JSON.parse(JSON.stringify(props.value));
  const onChangeNotes: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange({...propsData, notes: e.target.value});
  };
  const onChangeTime: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange({...propsData, time: e.target.value});
  };
  return (
    <NoteSections>
      <MyInput inputName="时间" type="date"
               value={propsData.time} onChange={onChangeTime}/>
      <MyInput inputName="备注" type="text" placeholder="在这里添加备注"
               value={propsData.notes} onChange={onChangeNotes}/>
    </NoteSections>
  );
}

export {Notes};