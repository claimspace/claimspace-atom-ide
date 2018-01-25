const path = require('path');
const fs = require('fs');
const hogan = require('hogan.js');

const root = path.join(__dirname, '..', 'templates');

function compile (name) {
  return hogan.compile(
    fs.readFileSync(path.join(root, name + '.html'), {
      encoding: 'utf8'
    }));
}

const error = compile('error');
const login = compile('login');
const openProject = compile('open-project');
const subnet = compile('subnet');
const branch = compile('branch');
const home = compile('home');

module.exports = {

  openProject (ctx) {
    return openProject.render(ctx);
  },

  subnet (manifest) {
    return subnet.render(manifest, { branch: branch });
  },

  home (ctx) {
    return home.render(ctx);
  },

  login (ctx) {
    return login.render(ctx);
  },

  error (ctx) {
    return error.render(ctx);
  }

};
