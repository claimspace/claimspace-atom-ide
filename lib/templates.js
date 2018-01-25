'use babel'

import path from 'path';
import fs from 'fs';
import hogan from 'hogan.js';

export default class Templates {

  constructor () {
    const root = path.join(__dirname, '..', 'templates');

    function compile (name) {
      return hogan.compile(
        fs.readFileSync(path.join(root, name + '.html'), {
          encoding: 'utf8'
        }));
    }

    this._error = compile('error');
    this._login = compile('login');
    this._openProject = compile('open-project');
    this._subnet = compile('subnet');
    this._branch = compile('branch');
    this._home = compile('home');
  }

  openProject (ctx) {
    return this._openProject.render(ctx);
  }

  subnet (manifest) {
    return this._subnet.render(manifest, { branch: this._branch });
  }

  home (ctx) {
    return this._home.render(ctx);
  }

  login (ctx) {
    return this._login.render(ctx);
  }

  error (ctx) {
    return this._error.render(ctx);
  }

};
