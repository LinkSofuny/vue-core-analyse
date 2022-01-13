/**
 * 1. 一键push 并带有提交信息
 * 2. 自动增加日志
 */
const args = require('minimist')(process.argv.slice(2))
const chalk = require('chalk')
const execa = require('execa')
const { prompt } = require('enquirer')

const isDryRun = args.dry

const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts })
const dryRun = (bin, args, opts = {}) =>
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts)
const runIfNotDry = isDryRun ? dryRun : run

const step = msg => console.log(chalk.cyan(msg))


async function main () {

  // await run(`yarn`, ['changelog'])

  const commitMsg = args._[0]

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' })

  if (stdout) {
    step('\n Runing push code')
    await runIfNotDry('git', ['add', '-A'])
    await runIfNotDry('git', ['commit', '-m', `release: ${commitMsg}`])

    const { yes } = await prompt({
      type: 'confirm',
      name: 'yes',
      message: `Are you sure to push?`
    })

    if (!yes) return

    await runIfNotDry('git', ['push'])

  }
}

main().catch(error => {
  console.error(error)
})

// npm run link "feat: finish reactive" --dry
