const addCommentToIssue = require('./addCommentToIssue')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ issueNumber, body, owner, repo, createComment }) => {
  await addCommentToIssue(owner, repo, issueNumber, body, createComment)

  return {
    didComment: 'yes'
  }
}

module.exports = run
