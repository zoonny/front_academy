import React, { useState } from "react";
import styled from "styled-components";
import { addSection } from "./actions";
import { connect } from "react-redux";
import { Header, Clock, Text, Box, Button, TextInput, Select } from "grommet";
import { Add } from "grommet-icons";
import SectionList from "./SectionList";

const Footer = styled(Box)`
  padding: 20px;
  color: #aaa;
`;

const DefaultEst = 5;

function App({ addSection }) {
  let [title, updateTitle] = useState("");
  let [est, updateEst] = useState(DefaultEst);

  const clearControls = () => {
    updateTitle("");
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
        <SectionList />
      </Box>
      <Footer>
        <Text size="xxsmall">
          Time Keeper © Kim mintae. All right Reserved
        </Text>
      </Footer>
    </>
  );
}

export default connect(
  () => {},
  dispatch => ({
    addSection: (title, est) => dispatch(addSection(title, est))
  })
)(App);
