import * as Actions from "./action-type";

const actionBuilder = (type, payload = {}) => ({
  type,
  payload: { ...payload }
});

export const addSection = (title, est) =>
  actionBuilder(Actions.ADD_SECTION, { title, est });

export const removeSection = id =>
  actionBuilder(Actions.REMOVE_SECTION, { id });

export const tickNextTime = () => actionBuilder(Actions.TICK_NEXT_TIME);

export const startDiscuss = id => actionBuilder(Actions.START_DISCUSS, { id });

export const stopDiscuss = id => actionBuilder(Actions.STOP_DISCUSS, { id });
