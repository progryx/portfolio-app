const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');
const process = require('process');

const packageJson = require('../package.json');

const scripts = `"start": "webpack-dev-server --mode=development --open --hot",
"build": "webpack --mode=production"`;

const babel = `"babel": ${JSON.stringify(packageJson.babel)}`;

const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // исключим зависимость, используемую только в этом файле, не относящуюся к шаблону
    .replace(/fs-extra[^\s]+/g, '');

console.log('Initializing project..');

const appName = process.argv[2];

if (!appName) {
  throw new Error('Give the name to the package!');
}

// создадим папку и инициализируем npm-проект
exec(
  `cd ./packages && mkdir ${appName} && cd ${appName} && sudo npm init -f`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't:
    ${initErr}`);
      return;
    }

    const packageJSONPath = `/study/portfolio-app/packages/${appName}/package.json`;

    console.log('CONSOLE LOG: ', process.argv);

    // заменим скрипты, задаваемые по умолчанию
    fs.readFile(packageJSONPath, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace('"test": "echo \\"Error: no test specified\\" && exit 1"', scripts)
        .replace('"keywords": []', babel);
      fs.writeFile(packageJSONPath, data, (err2) => err2 || true);
    });

    const filesToCopy = ['webpack.config.js'];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`)
      );
    }

    https.get(
      'https://github.com/progryx/portfolio-app/blob/master/application-boilerplate/.gitignore',
      (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (data) => {
          body += data;
        });
        res.on('end', () => {
          fs.writeFile(`${process.argv[2]}/.gitignore`, body, { encoding: 'utf-8' }, (err) => {
            if (err) throw err;
          });
        });
      }
    );

    console.log('yarn init -- done\n');

    // установка зависимостей
    console.log('Installing deps -- it might take a few minutes..');
    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);
    exec(`cd ../ && yarn install`, (npmErr, npmStdout, npmStderr) => {
      if (npmErr) {
        console.error(`Some error while installing dependencies
      ${npmErr}`);
        return;
      }
      console.log(npmStdout);
      console.log('Dependencies installed');

      console.log('Copying additional files..');
      // копирование дополнительных файлов с кодом
      fs.copy(path.join(__dirname, '../src'), `${process.argv[2]}/src`)
        .then(() =>
          console.log(
            `All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${process.argv[2]}\nnpm start`
          )
        )
        .catch((err) => console.error(err));
    });
  }
);
