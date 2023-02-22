import { v4 as uuidV4 } from 'uuid';

const store = {
  sectionList: [],
};

const addSection = (title, est) => {
  store.sectionList.push({
    id: uuidV4(),
    title,
    est,
    act: 0,
    isDiscuss: false
  });
};

const startDiscuss = (id) => {
  store.sectionList
    .find(section => section.id === id)
    .isDiscuss = true;
};

const stopDiscuss = (id) => {
  store.sectionList
    .find(section => section.id === id)
    .isDiscuss = false;
};

const removeSection = (id) => {
  store.sectionList = store.sectionList.filter(section => section.id !== id);
};

const exportObject = {
  store,
  addSection,
  startDiscuss,
  stopDiscuss,
  removeSection,
};

export default exportObject;
