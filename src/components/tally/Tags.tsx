import styled from 'styled-components';
import {useTags} from '../../hooks/useTags';
import {TagsType} from '../../types/Types';

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
type Props = {
  value: TagsType[];
  onChange: (value: TagsType[]) => void
}

function Tags(props: Props) {
  const {tags, addTag} = useTags();
  const selectedTags = props.value;
  const toggle = (tag: TagsType) => {
    if (selectedTags.indexOf(tag) >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <TagSections>
      <ol>
        {tags.map(tag => {
          return (
            <li key={tag.id}
                className={selectedTags.map(item => item.id).indexOf(tag.id) >= 0 ? 'selected' : ''}
                onClick={() => toggle(tag)}>
              {tag.name}
            </li>
          );
        })}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagSections>
  );
}

export {Tags};