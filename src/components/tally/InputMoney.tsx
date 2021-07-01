import React, {useState} from 'react';
import styled from 'styled-components';
import {Input} from '../Input';
import {Space} from '../Space';
import {Button} from '../Button';

const InputMoneySection = styled.section`
  padding: 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
  onOk?: () => void
  resetRecord?: () => void
}

function InputMoney(props: Props) {
  const initOutput = props.value;
  const [output, _setOutput] = useState(props.value);
  const setOutput = (newOutput: string) => {
    if (newOutput.length > 16) {
      _setOutput(newOutput.slice(0, 16));
    } else {
      _setOutput(newOutput);
      props.onChange(newOutput);
    }
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = e.target.value;
    const reg = /^[0-9]+(\.[0-9]{1,2})?$/;
    const reg2 = /^[0-9]*\.$/;
    if (output === '0') {
      if (value === '0.') {
        setOutput(value);
      } else {
        setOutput(value.slice(1));
      }
    } else if (output.length === 1) {
      if (value === '') {
        setOutput('0');
      } else {
        setOutput(value);
      }
    } else if (output.indexOf('.') < 0) {
      if (value.indexOf('.') >= 0 || reg.test(value)) {
        setOutput(value);
      }
    } else {
      if (reg2.test(value) || reg.test(value)) {
        setOutput(value);
      }
    }
  };
  const submit = () => {
    if (props.onOk) {
      props.onOk();
    }
  };
  const reset = () => {
    if (props.resetRecord) {
      const bool = window.confirm('你确定要重置吗');
      if (bool) {
        props.resetRecord();
      }
    }
  };
  return (
    <InputMoneySection>
      <Input inputName="金额" type="text" placeholder="在这里输入金额"
             value={initOutput === '' ? initOutput : output}
             onChange={onChange}/>
      <Space height={48}/>
      <Button onClick={submit}>保存</Button>
      <Button onClick={reset}>重置</Button>
    </InputMoneySection>
  );
}

export {InputMoney};