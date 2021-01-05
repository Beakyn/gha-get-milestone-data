# Get Milestone Data

Action to get milestone data

## Pre-requisites

Create a workflow .yml file in your .github/workflows directory. An example workflow is available below. For more information, reference the GitHub Help Documentation for Creating a workflow file.

## Inputs

`repository`: Github repository. Add the Github context value: `github.repository`. (**required**)

`milestone`: Milestone id, not title please. (**required**)

## Outputs

`data`: Milestone data JSON.

## Example

```yaml
- name: Get milestone data
  uses: Beakyn/gha-get-milestone-data@main
  id: milestone-data
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    repository: ${{ github.repository }}
    milestone: 1

- name: Debug milestone title value
  run: echo "Title: ${{ fromJson(steps.milestone-data.outputs.data).title }}"
```
