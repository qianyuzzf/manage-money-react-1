import React, {useState} from 'react';
import styled from 'styled-components';
import {Input} from '../Input';
import {Space} from '../Space';
import {Button} from '../Button';

const InputMoneySection = styled.section`

`;

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void
}

function InputMoney(props: Props) {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (newOutput: string) => {
    if (newOutput.length > 16) {
      _setOutput(newOutput.slice(0, 16));
    } else {
      _setOutput(newOutput);
    }
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = e.target.value;
    const reg = /^[0-9]+(\.[0-9]{1,2})?$/;
    const reg2 = /^[0-9]*\.$/;
    if (output === '0') {
      setOutput(value.slice(1));
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
    props.onChange(parseFloat(output));
    setTimeout(() => {
      if (props.onOk) {
        props.onOk();
      }
    }, 0);
  };
  return (
    <InputMoneySection>
      <Input inputName="金额" type="text" placeholder="在这里输入金额"
             value={output} onChange={onChange}/>
      <Space height={48}/>
      <Button onClick={submit}>保存</Button>
    </InputMoneySection>
  );
}

export {InputMoney};