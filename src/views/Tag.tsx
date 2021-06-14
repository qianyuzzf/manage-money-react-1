import {useParams} from 'react-router-dom';
import {useTags} from '../lib/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 16px;
  background: #fff;
`;

function Tag() {
  const {findTag} = useTags();
  const {id} = useParams<{ id: string }>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <NavBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </NavBar>
      <div>
        <Input inputName="xxx"/>
      </div>
      <div>
        <Button>
          删除标签
        </Button>
      </div>
      {tag.name}
    </Layout>
  );
}

export {Tag};