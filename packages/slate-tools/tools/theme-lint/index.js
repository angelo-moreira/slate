const execSync = require('child_process').execSync;
const path = require('path');

const config = require('../../slate-tools.config');

async function themelint() {
  const executable = config.paths.themelint.bin;
  const dir = config.paths.src;

  execSync(`${JSON.stringify(executable)} ${dir}`, {
    stdio: 'inherit',
  });
}

module.exports.runThemelint = async function runThemelint() {
  console.log('Linting locales...');
  return await themelint();
};
