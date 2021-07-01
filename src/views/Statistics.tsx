import Layout from '../components/Layout';
import * as echarts from 'echarts';
import styled from 'styled-components';
import {NavBar} from '../components/NavBar';
import {useRecordItems} from '../hooks/useRecordItems';
import {useUpdate} from '../hooks/useUpdate';

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

function Statistics() {
  const {recordItems} = useRecordItems();
  const hash: { value: number, name: string }[] = [];
  recordItems.forEach(item => {
    const key = item.tags[0].name;
    if (key) {
      for (let i = 0; i < hash.length; i++) {
        if (key === hash[i].name) {
          hash[i].value += parseFloat(item.amount);
          return;
        }
      }
      hash.push({value: parseFloat(item.amount), name: key});
    }
  });
  useUpdate(() => {
    const root = document.querySelector('#root') as HTMLDivElement;
    const main = document.querySelector('.main') as HTMLDivElement;
    const width = root.clientWidth;
    main.style.width = `${width * 0.8}px`;
    main.style.height = `${width}px`;
    const myChart = echarts.init(main);
    myChart.setOption({
      title: {
        text: '收支统计',
        subtext: '每种类型的花销及收入统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        left: 'left',
        bottom: 'bottom'
      },
      series: [
        {
          name: '收支',
          type: 'pie',
          radius: '50%',
          data: hash,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }, [hash]);

  return (
    <Layout>
      <NavBar typeName="统计"/>
      <Wrapper>
        <div className="main"/>
      </Wrapper>
    </Layout>
  );
}

export default Statistics;