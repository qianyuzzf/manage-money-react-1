import React, {useState} from 'react';
import {NumberPadSection} from './numberPad/NumberPadSection';

function NumberPad() {
  const [output, _setOutput] = useState('0');
  const setOutput = (x: string) => {
    if (output.length >= 16) {
      return;
    }
    _setOutput(x);
  };
  const onButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {
          return;
        } else {
          setOutput(output + text);
        }
        break;
      case '删除':
        if (output.length > 1) {
          setOutput(output.slice(0, -1));
        } else {
          setOutput('0');
        }
        break;
      case '清空':
        setOutput('0');
        break;
      case 'OK':
        //TODO
        break;
    }
  };
  return (
    <NumberPadSection>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </NumberPadSection>
  );
}

export {NumberPad};