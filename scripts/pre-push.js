// TODO: migrate to Imba, add colors and spinner
const { sync: getBranchSync } = require('git-branch');

const branch = getBranchSync();

if(branch === 'master'){
    throw new Error('Please do push into the `master` branch. Use some `other branch` and `pull request`.')
}