# A Github Action for Creating a Comment

Plug this into a Github workflow wherever the issue number being targetted is known.

A comment will be added to an issue.

## Inputs

* **issueNumber** - The number of an issue.
* **body** - The body of the comment to be added.

## Ouputs

* **didComment** - A value of ''yes'' or ''no'' that indicates if the comment was written.

## Example

```yml
name: Release

on:
  issue_comment:
    types: [created]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Add Comment
        uses: karlhulme/github-action-create-issue-comment@master
        with:
          issueNumber: 5 # or ${{ github.event.issue.number }}
          body: ${{ format('You said {0}', github.event.comment.body) }}
        env:
          GITHUB_TOKEN: ${{ github.token }}
```

## Development

You must run `npm run build` to create the distribution file.  Do this before committing changes.
