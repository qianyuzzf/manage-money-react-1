import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {TagsType} from '../types/Types';

const defTags = () => [
  {id: createId(), type: '-', name: '餐饮'},
  {id: createId(), type: '-', name: '购物'},
  {id: createId(), type: '-', name: '日用'},
  {id: createId(), type: '-', name: '交通'},
  {id: createId(), type: '-', name: '运动'},
  {id: createId(), type: '-', name: '娱乐'},
  {id: createId(), type: '-', name: '旅行'},
  {id: createId(), type: '-', name: '通讯'},
  {id: createId(), type: '-', name: '服饰'},
  {id: createId(), type: '-', name: '美容'},
  {id: createId(), type: '-', name: '住房'},
  {id: createId(), type: '-', name: '孩子'},
  {id: createId(), type: '-', name: '长辈'},
  {id: createId(), type: '-', name: '医疗'},
  {id: createId(), type: '-', name: '书籍'},
  {id: createId(), type: '+', name: '工资'},
  {id: createId(), type: '+', name: '兼职'},
  {id: createId(), type: '+', name: '理财'},
  {id: createId(), type: '+', name: '礼金'},
  {id: createId(), type: '+', name: '其他'}
];

function useTags() {
  const localTags: TagsType[] = JSON.parse(window.localStorage.getItem('tags') || '[]');
  const [tags, setTags] = useState<TagsType[]>(localTags.length === 0 ? defTags() : localTags);
  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const addTag = (type: string) => {
    const tag = window.prompt('请问新添加的标签名是什么');
    if (tag !== null) {
      if (tag) {
        const tagsName = tags.map(item => item.name);
        let bool = false;
        for (let i = 0; i < tagsName.length; i++) {
          if (tagsName[i] === tag) {
            bool = true;
            return window.alert('标签名不能重复');
          }
        }
        if (!bool) {
          setTags([...tags, {id: createId(), type, name: tag}]);
          window.alert('标签名添加成功');
        }
      } else {
        window.alert('标签名不能为空');
      }
    }
  };
  const deleteTag = (id: number) => {
    const result = window.confirm('是否删除标签');
    if (result) {
      setTags(tags.filter(item => item.id !== id));
    }
  };
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(item => item.id === id ? {...item, name} : item));
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
