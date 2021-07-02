import {useParams, useHistory} from 'react-router-dom';
import {useTags} from '../hooks/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {model} from '../lib/model';
import React, {useEffect, useState} from 'react';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 16px;
  background: #fff;

  > svg {
    width: 20px;
    height: 20px;
  }
`;

const InputWrapper = styled.div`
  margin-top: 8px;
  background: #fff;
  padding: 0 16px;
`;

const MyInput = styled(Input)`
  height: 44px;
`;

const Note = styled.div`
  font-size: 12px;
  padding: 6px 16px;
  color: #ed5d5d;
`;

function Tag() {
  const {findTag, updateTag, deleteTag} = useTags();
  const {id} = useParams<{ id: string }>();
  const tag = findTag(parseInt(id));
  const [defaultName, setDefaultName] = useState('');
  useEffect(() => {
    setDefaultName(model().cloneValue(tag.name));
    // eslint-disable-next-line
  }, []);
  const [newTag, setNewTag] = useState('');
  const history = useHistory();
  const routeBack = () => {
    const bool = window.confirm('确定保存吗');
    if (bool) {
      const reg = /^[\u4e00-\u9fa5]+$/;
      const reg2 = /^[A-Za-z0-9]+$/;
      const value = newTag;
      if (reg.test(value)) {
        updateTag(tag.id, value.slice(0, 2));
      } else if (reg2.test(value)) {
        updateTag(tag.id, value.slice(0, 4));
      }
    }
    history.goBack();
  };

  return (
    <Layout>
      <NavBar>
        <Icon name="left" onClick={routeBack}/>
        <span>编辑标签</span>
        <Icon/>
      </NavBar>
      <InputWrapper>
        <MyInput inputName="标签名" type="text" value={defaultName}
                 readOnly={true}/>
      </InputWrapper>
      <InputWrapper>
        <MyInput inputName="新标签名" type="text" placeholder="请输入新的标签名"
                 onChange={(e) => {
                   setNewTag(e.target.value);
                 }}/>
      </InputWrapper>
      <Note>
        注：仅保留汉字前两位或数字及字母前四位
      </Note>
      <Center>
        <Space height={48}/>
        <Button onClick={() => {
          deleteTag(tag.id);
          history.goBack();
        }}>
          删除标签
        </Button>
      </Center>
    </Layout>
  );
}

export {Tag};