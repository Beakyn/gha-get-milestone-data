const github = require("@actions/github");
const core = require("@actions/core");

function getInputs() {
  const requiredOptions = { required: true };

  const repository = core.getInput("repository", requiredOptions);
  const milestone = core.getInput("milestone", requiredOptions);
  const token = process.env.GITHUB_TOKEN;

  return {
    repository,
    milestone,
    token,
  };
}

async function run() {
  try {
    const { repository, milestone, token } = getInputs();
    const octokit = github.getOctokit(token);
    
    const response = await octokit.request(
      `GET /repos/${repository}/milestones/{milestone_number}`,
      {
        milestone_number: milestone,
      }
    );
    const data = response.data;

    console.log(data);
    core.setOutput('data', data);
  } catch (error) {
    console.log('Error => ', error);
    core.setFailed(error.message);
  }
};

run();
