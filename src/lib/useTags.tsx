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
  return {tags, setTags, findTag};
}

export {useTags};
