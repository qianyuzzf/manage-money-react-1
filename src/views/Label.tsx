import Layout from '../components/Layout';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {NavBar} from '../components/NavBar';

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
  const tagType = () => {
    const type = window.prompt('请问添加标签类型为收入还是支出');
    if (type === '收入') {
      addTag('+');
    } else if (type === '支出') {
      addTag('-');
    } else if (type === null) {
      return;
    } else {
      window.alert('请填写正确类型');
    }
  };
  return (
    <Layout>
      <NavBar typeName="全部标签"/>
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
        <Button onClick={tagType}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Label;