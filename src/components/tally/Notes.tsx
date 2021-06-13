import styled from 'styled-components';

const NoteSections = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

function Notes() {
  return (
    <NoteSections>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"/>
      </label>
    </NoteSections>
  );
}

export {Notes};