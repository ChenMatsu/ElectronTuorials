const information = document.getElementById('info');

console.log(information);
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()}`;
