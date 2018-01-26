'use babel'

import os from 'os';
import fs from 'fs';
import path from 'path';

import Subnet from './subnet'

export default class LocalData {

  static packageRoot () {
    return path.join(atom.packages.getPackageDirPaths()[0], 'claimspace-atom-ide');
  }

  static authorFile () {
    return path.join(LocalData.packageRoot(), 'data', 'author.json');
  }

  static setAuthor (author) {
    fs.writeFileSync(LocalData.authorFile(), JSON.stringify(author));
  }

  static getAuthor () {
    const file = LocalData.authorFile()

    if (!fs.existsSync(file)) {
      return null;
    } else {
      const author = JSON.parse(fs.readFileSync(file));
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
