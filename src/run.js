const addCommentToIssue = require('./addCommentToIssue')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ issueNumber, body, owner, repo, createComment }) => {
  try {
    if (!issueNumber) throw new Error('Issue number not supplied.')
    if (!body) throw new Error('Body not supplied.')

    await addCommentToIssue(owner, repo, issueNumber, body, createComment)

    return {
      didComment: 'yes'
    }
  } catch (err) {
    return {
      didComment: 'no',
      commentFailureReason: err.toString()
    }
  }
}

module.exports = run
