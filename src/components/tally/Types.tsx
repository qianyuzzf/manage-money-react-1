import styled from 'styled-components';
import {useState} from 'react';

const TypeSections = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

function Types() {
  const hashMap = {
    '-': '支出',
    '+': '收入'
  };
  type TypeList = keyof typeof hashMap;
  const [typeList] = useState<TypeList[]>(['-', '+']);
  const [type, setType] = useState('-');
  return (
    <TypeSections>
      <ul>
        {typeList.map(item => {
          return (
            <li className={type === item ? 'selected' : ''}
                onClick={() => setType(item)}>
              {hashMap[item]}
            </li>
          );
        })}
      </ul>
    </TypeSections>
  );
}

export {Types};