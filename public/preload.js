const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  app: {
    version: require('electron').app.getVersion()
  }
});
