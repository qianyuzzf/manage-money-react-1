import Layout from '../components/Layout';
import styled from 'styled-components';
import {Tags} from '../components/tally/Tags';
import {Notes} from '../components/tally/Notes';
import {Types} from '../components/tally/Types';
import {InputMoney} from '../components/tally/InputMoney';
import {useState} from 'react';
import {RecordItems} from '../types/Types';
import {useRecordItems} from '../hooks/useRecordItems';
import dayjs from 'dayjs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const initRecord: RecordItems = {
  tags: [],
  notes: '',
  type: '-',
  amount: '',
  time: dayjs().format('YYYY-MM-DD')
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
  const resetRecord = () => {
    setNewRecord(initRecord);
  };
  const submit = () => {
    const submitResult = addRecord(newRecord);
    if (submitResult) {
      resetRecord();
    }
  };

  return (
    <MyLayout>
      <Types value={newRecord.type} className="type-wrapper1"
             onChange={(value) => onChange({type: value})}/>
      <Tags value={newRecord}
            onChange={(value) => onChange({tags: value})}/>
      <Notes value={{notes: newRecord.notes, time: newRecord.time}}
             onChange={(value) => onChange(value)}/>
      <InputMoney value={newRecord.amount}
                  onChange={(value) => onChange({amount: value})}
                  onOk={submit}
                  resetRecord={resetRecord}/>
    </MyLayout>
  );
}

export default Tally;