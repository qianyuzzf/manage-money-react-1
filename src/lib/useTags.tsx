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
  return {tags, setTags};
}

export {useTags};
