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

test('Rejecta new comment if issue number not supplied.', async () => {
  await expect(run({
    body: 'the contents of the comment appears here',
    owner: 'boss',
    repo: 'test',
    createComment
  })).resolves.toEqual({
    didComment: 'no',
    commentFailureReason: 'Error: Issue number not supplied.'
  })
})

test('Rejecta new comment if body not supplied.', async () => {
  await expect(run({
    issueNumber: '2',
    owner: 'boss',
    repo: 'test',
    createComment
  })).resolves.toEqual({
    didComment: 'no',
    commentFailureReason: 'Error: Body not supplied.'
  })
})
