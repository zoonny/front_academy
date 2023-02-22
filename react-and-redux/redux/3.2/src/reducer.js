import * as Actions from "./action-type";
import { v4 as uuidV4 } from "uuid";

const InitializeState = {
  sectionList: []
};

export default (state, action) => {
  if (state === undefined) {
    const saveData = localStorage.getItem("timekeeper");
    state = saveData ? JSON.parse(saveData) : InitializeState;
  }

  switch (action.type) {
    case Actions.ADD_SECTION:
      return {
        ...state,
        sectionList: [
          ...state.sectionList,
          {
            id: uuidV4(),
            title: action.payload.title,
            est: action.payload.est,
            act: 0,
            isDiscuss: false
          }
        ]
      };
    case Actions.REMOVE_SECTION:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.filter(
            section => section.id !== action.payload.id
          )
        ]
      };
    case Actions.START_DISCUSS:
      return {
        ...state,
        sectionList: [
          ...state.sectionList
            .map(section => ({ ...section, isDiscuss: false }))
            .map(section => {
            if (section.id === action.payload.id) {
              section.isDiscuss = true;
            }

            return section;
          })
        ]
      };
    case Actions.STOP_DISCUSS:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.id === action.payload.id) {
              section.isDiscuss = false;
            }

            return section;
          })
        ]
      };
    case Actions.TICK_NEXT_TIME:
      return {
        ...state,
        sectionList: [
          ...state.sectionList.map(section => {
            if (section.isDiscuss) {
              section.act++;
            }

            return section;
          })
        ]
      };
    default:
      return { ...state };
  }
};
