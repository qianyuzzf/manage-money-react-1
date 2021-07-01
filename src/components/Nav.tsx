import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;

  > ul {
    display: flex;

    > li {
      width: 20%;

      > a {
        margin: 0 10%;
        padding: 4px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &.selected {
          color: rgba(255, 204, 0, 1);
        }

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="selected">
            <Icon name="home"/>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/detail" activeClassName="selected">
            <Icon name="detail"/>
            明细
          </NavLink>
        </li>
        <li>
          <NavLink to="/tally" activeClassName="selected">
            <Icon name="tally"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/label" activeClassName="selected">
            <Icon name="label"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;