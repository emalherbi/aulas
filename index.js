const walker = require('folder-walker');

const onWalker = (pathFather) => {
  const stream = walker(pathFather);
  stream.on('data', (data) => {
    if (data.type === 'directory' && data.basename !== 'img') {
      const b = data.filepath.replace('src\\', '').replace('\\', '/');
      console.log(`{ expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/${b}' },`);
    }
  });
};

onWalker(['src/programacao-mobile', 'src/programacao-web']);
