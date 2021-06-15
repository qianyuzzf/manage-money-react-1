import styled from 'styled-components';
import {useState} from 'react';

const TypeSections = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

    &.type-wrapper1 {
      background: #c4c4c4;
    }

    &.type-wrapper2 {
      background: #fff;
    }

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

type Props = {
  value: string;
  onChange: (value: ('-' | '+')) => void;
  className?: string
}

function Types(props: Props) {
  const hashMap = {
    '-': '支出',
    '+': '收入'
  };
  type TypeList = keyof typeof hashMap;
  const [typeList] = useState<TypeList[]>(['-', '+']);
  const type = props.value;
  return (
    <TypeSections>
      <ul className={props.className}>
        {typeList.map(item => {
          return (
            <li key={item}
                className={type === item ? 'selected' : ''}
                onClick={() => props.onChange(item)}>
              {hashMap[item]}
            </li>
          );
        })}
      </ul>
    </TypeSections>
  );
}

export {Types};