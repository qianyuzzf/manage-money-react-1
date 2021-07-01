import styled from 'styled-components';
import {useTags} from '../../hooks/useTags';
import {TagsType} from '../../types/Types';
import Icon from '../Icon';

const TagSections = styled.section`
  flex-grow: 1;
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > ol {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    > li {
      width: 100%;
      font-size: 14px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        width: 80%;
        height: 0;
        padding-bottom: 80%;
        background: rgba(245, 245, 245, 1);
        border-radius: 50%;
        position: relative;

        > svg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
        }
      }

      > span {
        margin-top: 6px;
      }

      &.selected {
        > div {
          background: rgba(255, 218, 69, 1);
        }
      }

      > button {
        background: none;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #333;
        color: #666;
        margin-top: 8px;
        margin-right: auto;
      }
    }
  }
`;
type Props = {
  value: TagsType[];
  onChange: (value: TagsType[]) => void
}

type HashTags = {
  [key: string]: string
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
  // noinspection NonAsciiCharacters
  const hashTags: HashTags = {
    餐饮: 'diet',
    购物: 'shopping',
    日用: 'day_use',
    交通: 'traffic',
    运动: 'sport',
    娱乐: 'disport',
    旅行: 'travel',
    通讯: 'correspondence',
    服饰: 'clothes',
    美容: 'cosmetology',
    住房: 'house',
    孩子: 'children',
    长辈: 'eldership',
    医疗: 'medical',
    书籍: 'book'
  };
  return (
    <TagSections>
      <ol>
        {tags.map(tag => {
          return (
            <li key={tag.id}
                className={selectedTags.map(item => item.id).indexOf(tag.id) >= 0 ? 'selected' : ''}
                onClick={() => toggle(tag)}>
              <div>
                <Icon name={hashTags[tag.name] ? hashTags[tag.name] : 'custom'}/>
              </div>
              <span>{tag.name}</span>
            </li>
          );
        })}
        <li onClick={addTag}>
          <div>
            <Icon name="add"/>
          </div>
          <span>新增标签</span>
        </li>
      </ol>
    </TagSections>
  );
}

export {Tags};