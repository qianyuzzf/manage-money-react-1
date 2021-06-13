import styled from 'styled-components';
import {useState} from 'react';

const TagSections = styled.section`
  flex-grow: 1;
  background: #FFFFFF;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: red;
        color: white;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

function Tags() {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const toggle = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const addTag = () => {
    const tag = window.prompt('请问新添加的标签名是什么');
    if (tag !== null) {
      if (tag) {
        setTags([...tags, tag]);
        window.alert('标签名添加成功');
      } else {
        window.alert('标签名不能为空');
      }
    }
  };
  return (
    <TagSections>
      <ol>
        {tags.map(tag => {
          return (
            <li key={tag}
                className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
                onClick={() => toggle(tag)}>
              {tag}
            </li>
          );
        })}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagSections>
  );
}

export {Tags};