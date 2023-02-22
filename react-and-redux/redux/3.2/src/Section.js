import React from "react";
import { Stack, Text, Button, Meter } from "grommet";
import { timeFormatter } from "./utils";
import { connect } from "react-redux";
import { removeSection, startDiscuss, stopDiscuss } from "./actions";

function Section({
  id,
  est,
  act,
  title,
  isDiscuss,
  removeSection,
  startDiscuss,
  stopDiscuss
}) {
  const initTime = est * 60;
  const remainingTime = () => initTime - act;

  return (
    <tr>
      <td className="center">
        <Text color="gray" style={{ marginRight: 5 }}>
          {timeFormatter(initTime)}
        </Text>
      </td>
      <td className="center">
        <Text size="large" color={act <= 0 ? "lightgray" : "#444"}>
          {timeFormatter(act)}
        </Text>
      </td>
      <td style={{ padding: 0 }}>
        <Stack>
          <Text
            size="large"
            style={{
              margin: 12,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {title}
          </Text>
          <Meter
            values={[
              {
                value: act,
                color: remainingTime() < 0 ? "red" : null
              }
            ]}
            style={{ width: "100%", marginTop: -10 }}
            max={initTime}
            background="rgba(0,0,0,0)"
            thickness="large"
            opacity={0.2}
          />
        </Stack>
      </td>
      <td className="center">
        <Button
          plain
          size="small"
          color="#ccc"
          style={
            isDiscuss
              ? { color: "black", animation: "blink 1s linear infinite" }
              : null
          }
          onClick={() => (isDiscuss ? stopDiscuss(id) : startDiscuss(id))}
          label="Discuss"
        />
        <Button
          plain
          size="small"
          style={{ marginLeft: 14 }}
          label="···"
          onClick={() => removeSection(id)}
        />
      </td>
    </tr>
  );
}

export default connect(
  () => ({}),
  dispatch => ({
    removeSection: id => dispatch(removeSection(id)),
    startDiscuss: id => dispatch(startDiscuss(id)),
    stopDiscuss: id => dispatch(stopDiscuss(id))
  })
)(Section);
