import {useParams} from 'react-router-dom';
import {useTags} from '../lib/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 16px;
  background: #fff;
`;

const InputWrapper = styled.div`
  margin-top: 8px;
  background: #fff;
  padding: 0 16px;
`;

const MyInput = styled(Input)`
  height: 44px;
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
      <InputWrapper>
        <MyInput inputName="标签名" type="text" value={tag.name}/>
      </InputWrapper>
      <InputWrapper>
        <MyInput inputName="新标签名" type="text" placeholder="请输入新的标签名"/>
      </InputWrapper>
      <Center>
        <Space/>
        <Button>
          删除标签
        </Button>
      </Center>
    </Layout>
  );
}

export {Tag};