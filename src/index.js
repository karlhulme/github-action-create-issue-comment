const core = require('@actions/core')
const { GitHub, context } = require('@actions/github')

const run = require('./run')

/**
 * The entry point to the Github action.
 */
const entryPoint = async () => {
  const github = new GitHub(process.env.GITHUB_TOKEN)
  const { owner, repo } = context.repo

  const input = {
    issueNumber: core.getInput('issueNumber'),
    body: core.getInput('body'),
    owner,
    repo,
    createComment: github.repos.createComment
  }

  console.log(`Inputs\n${JSON.stringify(input, null, 2)}\n`)

  const output = await run(input)

  console.log(`Output\n${JSON.stringify(output, null, 2)}\n`)

  for (const propName in output) {
    core.setOutput(propName, output[propName])
  }
}

entryPoint()