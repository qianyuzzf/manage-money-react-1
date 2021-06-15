import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {TagsType} from '../types/TagsType';
import {useUpdate} from './useUpdate';

const defTags = () => [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

function useTags() {
  const [tags, setTags] = useState<TagsType[]>([]);
  useEffect(() => {
    const localTags: TagsType[] = JSON.parse(window.localStorage.getItem('tags') || '[]');
    setTags(localTags.length === 0 ? defTags() : localTags);
    // eslint-disable-next-line
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const addTag = () => {
    const tag = window.prompt('请问新添加的标签名是什么');
    if (tag !== null) {
      if (tag) {
        setTags([...tags, {id: createId(), name: tag}]);
        window.alert('标签名添加成功');
      } else {
        window.alert('标签名不能为空');
      }
    }
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(item => item.id !== id));
  };
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(item => item.id === id ? {id, name} : item));
  };
  const findTag = (id: number) => tags.filter(item => item.id === id)[0];
  const findTagIndex = (id: number) => {
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        return i;
      }
    }
    return undefined;
  };
  return {
    tags,
    setTags,
    addTag,
    deleteTag,
    updateTag,
    findTag,
    findTagIndex
  };
}

export {useTags};
