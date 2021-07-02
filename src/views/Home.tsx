import Layout from '../components/Layout';
import styled from 'styled-components';
import {NavBar} from '../components/NavBar';
import dayjs from 'dayjs';

const Nav = styled.nav`
  border-top: 2px solid #f5f5f5;
  background: #ffda45;
  padding: 16px;

  div:nth-child(1) {
    font-size: 20px;
  }

  div:nth-child(2) {
    font-size: 28px;
    text-align: center;
    padding: 16px 0;
  }

  div:nth-child(3) {
    font-size: 18px;
    padding: 8px 0 0 0;
    text-align: right;
  }
`;

function Home() {
  return (
    <Layout>
      <NavBar typeName="谦谦记账"/>
      <Nav>
        <div>今天是</div>
        <div>{dayjs().format('YYYY年MM月DD日')}</div>
        <div>赶快来记一笔账吧</div>
      </Nav>
    </Layout>
  );
}

export default Home;