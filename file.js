// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('POST /orgs/{org}/hooks', {
  org: 'ORG',
  name: 'web',
  active: true,
  events: [
    'push',
    'pull_request'
  ],
  config: {
    url: 'http://example.com/webhook',
    content_type: 'json'
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})