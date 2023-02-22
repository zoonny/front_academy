import React from "react";
import { Table } from "./Table";
import Section from "./Section";
import { timeFormatter } from "../utils";
import { Text } from "grommet";

export default function SectionList({ sectionList, startDiscuss, stopDiscuss, removeSection }) {
  const allTime = (key, adjust = 1) =>
    timeFormatter(
      sectionList.map(section => section[key]).reduce((a, b) => a + b, 0) *
        adjust
    );

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="center" colSpan="2" width="150">
              Time
            </th>
            <th className="underline" rowSpan="2">
              Item
            </th>
            <th className="center underline" rowSpan="2" width="120">
              Behavior
            </th>
          </tr>
          <tr className="underline">
            <th className="center">Est.</th>
            <th className="center">Act.</th>
          </tr>
        </thead>
        <tbody>
          {sectionList.map((section, seq) => (
            <Section {...section} key={seq}
              startDiscuss={startDiscuss}
              stopDiscuss={stopDiscuss}
              removeSection={removeSection} />
          ))}
        </tbody>
        <thead>
          <tr className="underline">
            <th className="center">
              <Text>{allTime("est", 60)}</Text>
            </th>
            <th className="center">
              <Text>{allTime("act")}</Text>
            </th>
            <th className="underline" colSpan="2" />
          </tr>
        </thead>
      </Table>
    </>
  );
}
