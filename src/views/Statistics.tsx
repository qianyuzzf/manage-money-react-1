import Layout from '../components/Layout';
import {Types} from '../components/tally/Types';
import {useState} from 'react';
import {useRecordItems} from '../hooks/useRecordItems';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {RecordItems} from '../types/Types';

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
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
      hash[key].unshift(item);
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
             className="type-wrapper2"
             onChange={(value) => setType(value)}/>
      {array.map(item => (
        <div key={item[0]}>
          <Header>
            {changeTime(item[0])}
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

export default Statistics;