import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 20%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="home"/>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Icon name="detail"/>
          <Link to="/detail">明细</Link>
        </li>
        <li>
          <Icon name="tally"/>
          <Link to="/tally">记账</Link>
        </li>
        <li>
          <Icon name="label"/>
          <Link to="/label">标签</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;