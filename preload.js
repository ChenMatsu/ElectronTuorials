/**
 * @Note Electron's main process is a Node.js environment that has full operating
 *         system access. You can access Node.js build-ins as well as packages
 *         installed via npm. On the other hand, renderer processes run web
 *         pages and do not run Node.js by default for security reasons. This
 *         is why preload.js comes as a bridge.
 */

/*
 * @Note From Electron 20 onwards, preload scripts are "sandboxed" by default and
 *          no longer have access to a full Node.js environment.
 *      1. Electron Modules: Renderer process modules
 *      2. Node.js modules: events, timers, url
 *      3. Polyfiiled globals: Buffer, process, clearImmediate, setImmediate
 *  
 * @Note Preload scripts are injected before a web page loads in the renderer, similar
 *          to Chrome extension's content scripts. To add features that require privileged 
 *          access, you can define global objects through the "contextBridge" API
 */

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // Variables are also acceptable
});


