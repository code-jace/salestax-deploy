// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.web = {

  shared$: {
    repositoryUrl: 'git@github.com:senecajs/salestax-api.git#v0',
  },

  dev: {
    type: 'process',
    build: 'npm install',
    execute: {
      process: 'node app.js',
    }
  },

};

