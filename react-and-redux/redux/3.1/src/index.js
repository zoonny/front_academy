import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppData from './appData';

setInterval(() => {
  AppData.store.sectionList
    .forEach(section => (section.isDiscuss) && section.act++);

  ReactDOM.render(
    <React.StrictMode>
      <App 
        data={ AppData.store } 
        addSection={AppData.addSection} 
        startDiscuss={AppData.startDiscuss}
        stopDiscuss={AppData.stopDiscuss}
        removeSection={AppData.removeSection} />
    </React.StrictMode>,
    document.getElementById('root')
  );  
}, 1000);
