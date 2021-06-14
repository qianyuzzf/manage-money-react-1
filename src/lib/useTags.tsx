import {useState} from 'react';

function useTags() {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags, setTags};
}

export {useTags};
