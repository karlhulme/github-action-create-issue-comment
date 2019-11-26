/**
 * Creates a release on a branch.
 * @param {String} owner The owner of the repo.
 * @param {String} repo The name of the repo.
 * @param {String} issueNumber The name of the issue.
 * @param {String} body The body of the comment.
 * @param {Function} createRelease A function that creates a release on github.
 */
const addCommentToIssue = async (owner, repo, issueNumber, body, createComment) => {
  await createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body
  })
}

module.exports = addCommentToIssue
