/* eslint-env jest */
const run = require('./run')

const createComment = async () => {}

test('Create a new comment on an issue.', async () => {
  await expect(run({
    issueNumber: '1',
    body: 'the contents of the comment appears here',
    owner: 'boss',
    repo: 'test',
    createComment
  })).resolves.toEqual({
    didComment: 'yes'
  })
})
