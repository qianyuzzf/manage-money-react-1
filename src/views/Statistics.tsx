import Layout from '../components/Layout';
import {useEffect} from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';
import {NavBar} from '../components/NavBar';

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

function Statistics() {
  useEffect(() => {
    const root = document.querySelector('#root') as HTMLDivElement;
    const main = document.querySelector('.main') as HTMLDivElement;
    const width = root.clientWidth;
    main.style.width = `${width * 0.8}px`;
    main.style.height = `${width * 0.8}px`;
    const myChart = echarts.init(main);
    myChart.setOption({
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'},
            {value: 580, name: '邮件营销'},
            {value: 484, name: '联盟广告'},
            {value: 300, name: '视频广告'}
          ],
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
  }, []);

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