import Layout from '../components/Layout';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const Nav = styled.nav`
  padding: 12px 16px;
  font-size: 18px;
  background: rgba(255, 218, 69, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    width: 24px;
    height: 24px;
  }
`;

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  max-height: 70vh;
  overflow-y: auto;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Label() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <Nav>
        <Icon name="head_sculpture"/>
        <span>全部标签</span>
        <Icon/>
      </Nav>
      <TagList>
        {tags.map(item => (
          <li key={item.id}>
            <Link to={'/label/' + item.id}>
              <span className="oneLine">{item.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space height={32}/>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Label;