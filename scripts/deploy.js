var ghpages = require('gh-pages');

ghpages.publish('_site', {
    branch: 'master',
    repo: 'git@github.com:hugomn/hugomn.github.io.git'
  }, function(err) {});