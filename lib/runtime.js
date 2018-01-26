'use babel'

import path from 'path';

export default class Runtime {

  static getPackage () {
    return atom.packages.getLoadedPackage('claimspace-atom-ide');
  }

  static localPackageRoot () {
    return path.join(atom.packages.getPackageDirPaths()[0], 'claimspace-atom-ide');
  }

  static isLocal () {
    return Runtime.getPackage().mainModulePath.indexOf(atom.configDirPath) != 0;
  }

}

window.Runtime = Runtime;