import Layout from '../components/Layout';
import styled from 'styled-components';
import {NavBar} from '../components/NavBar';
import dayjs from 'dayjs';
import {useRecordItems} from '../hooks/useRecordItems';
import Icon from '../components/Icon';

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

const Main = styled.main`
  > .top {
    font-size: 18px;
    padding: 16px;
  }

  > .main {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    background: white;
    padding: 8px 16px;
    align-items: center;

    > div:nth-child(2) {
      margin-left: auto;
      margin-right: 16px;
      color: #eb2b2b;
    }

    > div:nth-child(3) {
      color: #a6a6a6;
      font-size: 14px;
    }
  }
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    padding: 0 16px;
  }

  > svg {
    margin-top: 40px;
    width: 100%;
    height: 100%;
    color: #999;
  }
`;

function Home() {
  const {recordItems} = useRecordItems();
  recordItems.sort((a, b) => {
    if (a.createAt && b.createAt) {
      return a.createAt < b.createAt ? 1 : a.createAt === b.createAt ? 0 : -1;
    } else {
      return 1;
    }
  });
  const array = recordItems.slice(0, 7);
  return (
    <Layout>
      <NavBar typeName="谦谦记账"/>
      <Nav>
        <div>今天是</div>
        <div>{dayjs().format('YYYY年MM月DD日')}</div>
        <div>赶快来记一笔账吧</div>
      </Nav>
      <Main>
        <div className="top">最近收支</div>
        {array.length === 0 ?
          <Img>
            <span>亲，暂无最近收支情况 ...</span>
            <Icon name="no_money"/>
          </Img> :
          array.map(item => (
            <div className="main" key={item.createAt}>
              <div>{item.tags[0].name}</div>
              <div>￥{item.amount}</div>
              <div>{item.tags[0].type === '+' ? '收入' : '支出'}</div>
            </div>
          ))}
      </Main>
    </Layout>
  );
}

export default Home;