import Layout from '../components/Layout';
import styled from 'styled-components';
import {Tags} from '../components/tally/Tags';
import {Notes} from '../components/tally/Notes';
import {Types} from '../components/tally/Types';
import {NumberPad} from '../components/tally/NumberPad';
import {useState} from 'react';
import {RecordItems} from '../types/Types';
import {useRecordItems} from '../hooks/useRecordItems';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const initRecord: RecordItems = {
  tags: [],
  notes: '',
  type: '-',
  amount: 0
};

function Tally() {
  const {addRecord} = useRecordItems();
  const [newRecord, setNewRecord] = useState(initRecord);
  const onChange = (object: Partial<typeof newRecord>) => {
    setNewRecord({
      ...newRecord,
      ...object
    });
  };
  const submit = () => {
    const submitResult = addRecord(newRecord);
    if (submitResult) {
      setNewRecord(initRecord);
    }
  };
  return (
    <MyLayout>
      <Types value={newRecord.type} className="type-wrapper1"
             onChange={(value) => onChange({type: value})}/>
      <Tags value={newRecord.tags}
            onChange={(value) => onChange({tags: value})}/>
      <Notes value={newRecord.notes}
             onChange={(value) => onChange({notes: value})}/>
      <NumberPad value={newRecord.amount}
                 onChange={(value) => onChange({amount: value})}
                 onOk={submit}/>
    </MyLayout>
  );
}

export default Tally;