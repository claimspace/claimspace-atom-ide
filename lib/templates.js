'use babel'

import path from 'path';
import fs from 'fs';
import hogan from 'hogan.js';

import LocalData from './local-data';
import Runtime from './runtime';

export default class Templates {

  constructor () {
    const localRoot = Runtime.localPackageRoot();
    const isLocal = Runtime.isLocal();

    function compile (name) {
      if (isLocal) {
        return hogan.compile(
          fs.readFileSync(path.join(localRoot, 'templates', name + '.html'), {
            encoding: 'utf8'
          }));
      } else {
        return require(`../templates-build/${name}.js`)
      }
    }

    this._error = compile('error');
    this._login = compile('login');
    this._openProject = compile('open-project');
    this._subnet = compile('subnet');
    this._branch = compile('branch');
    this._home = compile('home');
    this._logo = compile('logo')
  }

  openProject (ctx) {
    return this._openProject.render(ctx);
  }

  subnet (manifest) {
    return this._subnet.render(manifest, { branch: this._branch });
  }

  home (ctx) {
    return this._home.render(ctx, { logo: this._logo });
  }

  login (ctx) {
    return this._login.render(ctx);
  }

  error (ctx) {
    return this._error.render(ctx);
  }

};
