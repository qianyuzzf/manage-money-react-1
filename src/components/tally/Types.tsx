import styled from 'styled-components';
import {useState} from 'react';

const TypeSections = styled.section`
  font-size: 18px;

  > ul {
    display: flex;

    &.type-wrapper1 {
      background: rgba(255, 218, 69, 1);
    }

    &.type-wrapper2 {
      background: #fff;
    }

    > li {
      width: 16.6667%;
      text-align: center;
      padding: 12px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 2px;
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
        <li/>
        <li/>
        {typeList.map(item => {
          return (
            <li key={item}
                className={type === item ? 'selected' : ''}
                onClick={() => props.onChange(item)}>
              {hashMap[item]}
            </li>
          );
        })}
        <li/>
        <li/>
      </ul>
    </TypeSections>
  );
}

export {Types};