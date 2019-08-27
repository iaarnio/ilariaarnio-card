'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const headline = `${chalk.white('           Ilari Aarnio')} / ${chalk.white('iaarnio')}`;
const work = `${chalk.white.bold('    Work:')}  ${chalk.white('Entrepreneur / Full stack developer')}`;
const twitter = `${chalk.white.bold(' Twitter:')}  ${chalk.gray('https://twitter.com/')}${chalk.cyan('iaarnio')}`;
const npm = `${chalk.white.bold('     npm:')}  ${chalk.gray('https://npmjs.com/')}${chalk.red('~aarnila')}`;
const github = `${chalk.white.bold('  GitHub:')}  ${chalk.gray('https://github.com/')}${chalk.green('iaarnio')}`;
const linkedin = `${chalk.white.bold('LinkedIn:')}  ${chalk.gray('https://linkedin.com/in/')}${chalk.blue(
  'ilariaarnio'
)}`;
const web = `${chalk.white.bold('     Web:')}  ${chalk.cyan('https://www.codesys.fi')}`;
const npx = `${chalk.white.bold('    Card:')}  ${chalk.red('npx')} ${chalk.white('@aarnila/card')}`;

const d = `${headline}

${work}
${twitter}
${npm}
${github}
${linkedin}
${web}

${npx}`;

exports.card = chalk.green(boxen(d, options));
