import Layout from '../components/Layout';
import {Types} from '../components/tally/Types';
import {useState} from 'react';
import {useRecordItems} from '../hooks/useRecordItems';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {RecordItems} from '../types/Types';
import Icon from '../components/Icon';

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 8px 16px;
  background: white;
  border-bottom: 1px solid #ddd;

  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    padding: 24px 16px;
  }

  > svg {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    color: #999;
  }
`;

function Detail() {
  const [type, setType] = useState<'-' | '+'>('-');
  const {recordItems} = useRecordItems();
  const selectedType = recordItems.filter(item => item.type === type);
  const hash: { [key: string]: RecordItems[] } = {};
  selectedType.forEach(item => {
    const key = item.time;
    if (key) {
      if (!(key in hash)) {
        hash[key] = [];
      }
      hash[key].push(item);
    }
  });
  const array = Object.entries(hash).sort((a, b) => {
    return a[0] < b[0] ? 1 : a[0] === b[0] ? 0 : -1;
  });
  const changeTime = (time: string) => {
    const today = dayjs();
    if (today.format('YYYY-MM-DD') === time) {
      return '今天';
    } else if (today.subtract(1, 'day').format('YYYY-MM-DD') === time) {
      return '昨天';
    } else {
      return time.replace('-', '年').replace('-', '月') + '日';
    }
  };
  return (
    <Layout>
      <Types value={type}
             className="type-wrapper1"
             onChange={(value) => setType(value)}/>
      {array.length === 0 ?
        <Img>
          <span>亲，暂时还没有数据哦 ...</span>
          <Icon name="no_money"/>
        </Img> :
        array.map(item => (
          <div key={item[0]}>
            <Header>
              <span>{changeTime(item[0])}</span>
              <span>￥{JSON.stringify(item[1].reduce((acc, cur) => acc + parseFloat(cur.amount), 0))}</span>
            </Header>
            {item[1].map(item => (
              <Items key={item.createAt}>
              <span className="tags">
                {item.tags.map(item => item.name).join('，')}
              </span>
                <span className="notes">
                {item.notes}
              </span>
                <span className="amount">
                ￥{item.amount}
              </span>
              </Items>
            ))}
          </div>
        ))}
    </Layout>
  );
}

export default Detail;