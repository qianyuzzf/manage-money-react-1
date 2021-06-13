import Layout from '../components/Layout';
import styled from 'styled-components';
import {Tags} from '../components/tally/Tags';
import {Notes} from '../components/tally/Notes';
import {Types} from '../components/tally/Types';
import {NumberPad} from '../components/tally/NumberPad';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Tally() {
  return (
    <MyLayout>
      <Tags/>
      <Notes/>
      <Types/>
      <NumberPad/>
    </MyLayout>
  );
}

export default Tally;