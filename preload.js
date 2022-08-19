// preload with contextIsolation enabled
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('harry', {
  freddie: 'This is freddie....'
});

