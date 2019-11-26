/* eslint-env jest */
const addCommentToIssue = require('./addCommentToIssue')

test('Add a comment to an issue.', async () => {
  const createComment = jest.fn(async () => ({}))
  await expect(addCommentToIssue('boss', 'testRepo', '1', 'contents here', createComment)).resolves.not.toThrow()
  expect(createComment.mock.calls.length).toEqual(1)
})
