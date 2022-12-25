/**
 * @Note Electron follows typical JavaScript convetions, where PascalCase
 *          modules are instantiable class constructors, whereas camelCase 
 *          modules are not instantiable
 */
const { app, BrowserWindow } = require('electron');
/**
 * @Warn ECMAScript modules are currently not directly supported in Electron.
 *          For example: import()
 */

const createWindow = () => {
    /**
     * @Note BrowserWindow: which create and manages app windows
     */
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadFile('index.html');
}

/**
 * @Note app: which controls your application's event lifecycle
 */
app.whenReady().then(() => { // Node event emitter
    /**
     * @Note BrowserWindows can only be created after the app module's ready
     *          ready event is fired
     */
    createWindow(); 
    /**
     * @Note Every web page displays in a window will run in a separate process 
     *         called a "renderer" process. Renderer processes have access to the same 
     *         JavasScript APIs and tooling you use for typical front-end develpoment
     */

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
        // darwin => macOS
        if(process.platform !== 'darwin') app.quit()
});


console.log(`Hello from Electron! Time to experience the power of JavaScript and Electon.js!`);



