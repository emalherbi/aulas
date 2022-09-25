const walker = require('folder-walker');

const onWalker = (pathFather) => {
  return new Promise((resolve) => {
    const arr_dist = [];
    const arr_docx = [];
    const stream = walker(pathFather);
    stream.on('data', (data) => {
      if (data.type === 'directory' && data.basename !== 'img') {
        const b = data.filepath.replace('src\\', '').replace('\\', '/');
        arr_dist.push(`{ expand: true, dot: true, src: 'index.html', cwd: '<%= properties.src %>', dest: '<%= properties.dist %>/${b}' },`);

        const d = data.filepath.replace('src\\', '').replace('\\', '-');
        arr_docx.push('` pandoc --resource-path=<%= properties.src %>/' + b + ' <%= properties.src %>/' + b + '/README.md -o <%= properties.doc %>/' + d + '.docx `, ');
      }
    });
    stream.on('end', (data) => {
      console.log(`=> Dist`);
      for (let i = 0; i < arr_dist.length; i++) {
        const el = arr_dist[i];
        console.log(`${el}`);
      }

      console.log(`=> Docx`);
      for (let i = 0; i < arr_docx.length; i++) {
        const el = arr_docx[i];
        console.log(`${el}`);
      }

      resolve();
    });
  });
};

const onStart = async () => {
  console.log('============================');
  await onWalker(['src/programacao-mobile']);
  console.log('============================');
  await onWalker(['src/programacao-web']);
  console.log('============================');
};

onStart();
