const execSync = require('child_process').execSync;
const path = require('path');

const config = require('../../slate-tools.config');

async function stylelint({fix} = {}) {
  const executable = config.paths.stylelint.bin;
  const fixFlag = fix ? '--fix' : '';
  const glob = `./**/*.{${['css', 'scss', 'sass'].join(',')}}`;
  const ignorePatterns = ['dist', 'node_modules'].reduce(
    (buffer, pattern) => `${buffer} --ignore-pattern ${pattern}`,
    '',
  );

  execSync(
    `${JSON.stringify(executable)} "${glob}" ${ignorePatterns} ${fixFlag}`,
    {
      stdio: 'inherit',
    },
  );
}

module.exports.runStylelint = async function runStylelint() {
  console.log('Linting style files...');
  return await stylelint();
};

module.exports.runStylelintFix = async function runStylelintFix() {
  return await stylelint({fix: true});
};
