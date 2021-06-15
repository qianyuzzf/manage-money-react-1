import {useState} from 'react';
import {createId} from './createId';
import {TagsType} from '../types/TagsType';

const defTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

function useTags() {
  const [tags, setTags] = useState<TagsType[]>(defTags);
  const findTag = (id: number) => tags.filter(item => item.id === id)[0];
  const findTagIndex = (id: number) => {
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        return i;
      }
    }
    return undefined;
  };
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(item => item.id === id ? {id, name} : item));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(item => item.id !== id));
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag};
}

export {useTags};
