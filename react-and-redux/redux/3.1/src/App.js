import { useState } from 'react';
import { Header, Clock, Text, Box, Button, TextInput, Select } from "grommet";
import styled from 'styled-components';
import { Add } from 'grommet-icons';
import SectionList from './components/SectionList';

const DefaultEst = 5;

function App({ data, addSection, startDiscuss, stopDiscuss, removeSection }) {
  const [title, updateTitle] = useState('');
  const [est, updateEst] = useState(DefaultEst);

  const clearControls = () => {
    updateTitle('');
    updateEst(DefaultEst);
  };
  const onChangeTitle = event => {
    updateTitle(event.target.value);
  };
  const onChangeEst = ({ option }) => {
    updateEst(Number(option));
  };

  return (
    <>
      <Box style={{ padding: 20 }}>
        <Header pad="xsmall" align="baseline" style={{ marginBottom: 40 }}>
          <Box style={{ width: 200 }}>
            <Clock type="digital" />
          </Box>
          <Box basis="full">
            <TextInput
              value={title}
              placeholder="논의 주제"
              onChange={onChangeTitle}
            />
          </Box>
          <Box basis="1/4">
            <Select
              options={[1, 5, 10, 15, 20, 25, 30, 40]}
              value={est}
              onChange={onChangeEst}
            />
          </Box>
          <Box align="end" style={{ width: 60, paddingTop: 5 }}>
            <Button
              icon={<Add />}
              onClick={() => {
                addSection(title, est);
                clearControls();
              }}
            />
          </Box>
        </Header>
        <SectionList 
          sectionList={data.sectionList} 
          startDiscuss={startDiscuss}
          stopDiscuss={stopDiscuss}
          removeSection={removeSection} />
      </Box>
      <Footer>
        <Text size="xxsmall">
          Time Keeper © Kim mintae. All right Reserved
        </Text>
      </Footer>
    </>
  );
}

const Footer = styled(Box)`
  padding: 20px;
  color: #aaa;
`;

export default App;
