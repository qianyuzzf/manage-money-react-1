import React, {useEffect} from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from './views/Statistics';
import Label from './views/Label';
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import Tally from './views/Tally';
import Detail from './views/Detail';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import qrCode from './assets/images/qr.png';

const AppWrapper = styled.div`
  color: #333;
  @media (min-width: 501px) {
    width: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ImgWrapper = styled.div`
  display: none;
  @media (min-width: 501px) {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 10;
    > img {
      position: absolute;
      left: 50%;
      top: 80px;
      transform: translateX(-50%);
    }
  }
`;

function App() {
  const width = document.documentElement.clientWidth;
  useEffect(() => {
    if (width > 500) {
      window.alert('扫描图中二维码，使用手机浏览效果更佳');
    }
    // eslint-disable-next-line
  }, []);
  const disappear = () => {
    const wrapper = document.querySelector('.wrapper') as HTMLDivElement;
    wrapper.style.display = 'none';
  };
  return (
    <AppWrapper>
      <ImgWrapper onClick={disappear} className="wrapper">
        <img src={qrCode} alt=""/>
      </ImgWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/detail">
            <Detail/>
          </Route>
          <Route exact path="/tally">
            <Tally/>
          </Route>
          <Route exact path="/label">
            <Label/>
          </Route>
          <Route exact path="/label/:id">
            <Tag/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;