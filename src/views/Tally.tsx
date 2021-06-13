import Layout from '../components/Layout';
import styled from 'styled-components';
import {Tags} from '../components/tally/Tags';
import {Notes} from '../components/tally/Notes';
import {Types} from '../components/tally/Types';
import {NumberPad} from '../components/tally/NumberPad';
import {useState} from 'react';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Tally() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    notes: '',
    type: '-' as ('-' | '+'),
    amount: 0
  });
  const onChange = (object: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...object
    });
  };
  return (
    <MyLayout>
      <Tags value={selected.tags}
            onChange={(value) => onChange({tags: value})}/>
      <Notes value={selected.notes}
             onChange={(value) => onChange({notes: value})}/>
      <Types value={selected.type}
             onChange={(value) => onChange({type: value})}/>
      <NumberPad value={selected.amount}
                 onChange={(value) => onChange({amount: value})}
                 onOk={() => {
                 }}/>
    </MyLayout>
  );
}

export default Tally;