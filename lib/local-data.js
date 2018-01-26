'use babel'

import os from 'os';
import fs from 'fs';
import path from 'path';

import Subnet from './subnet'

export default class LocalData {

  static setAuthor (author) {
    // tmp
    const AuthorFile = path.join(atom.packages.getPackageDirPaths()[0], 'claimspace-atom-ide', 'data', 'author.json');

    fs.writeFileSync(AuthorFile, JSON.stringify(author));
  }

  static getAuthor () {
    // tmp
    const AuthorFile = path.join(atom.packages.getPackageDirPaths()[0], 'claimspace-atom-ide', 'data', 'author.json');

    if (!fs.existsSync(AuthorFile)) {
      return null;
    } else {
      const author = JSON.parse(fs.readFileSync(AuthorFile));
      if (!author.username) {
        return null;
      } else {
        return author;
      }
    }
  }

  static getLocation () {
    return atom.config.get('claimspace-atom-ide.datadir') || path.join(os.userInfo().homedir, 'Documents', 'Claimspace Projects');
  }

  static getProjects () {
    const dir = LocalData.getLocation();

    let projects = [];

    if (!fs.existsSync(dir)) return [];

    fs.readdirSync(dir).forEach(function (file) {
      const manifest = Subnet.find(path.join(dir, file));

      if (manifest) projects.push(manifest);
    });

    return projects;
  }

}
