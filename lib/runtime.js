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
    const cp = Runtime.getPackage();

    // If it's bundled with atom, there is no package in .atom
    if (cp.bundledPackage) {
      return false;
    } else {
      // If installed normally, check to see if it's installed outside .atom
      return cp.mainModulePath.indexOf(atom.configDirPath) != 0;
    }
  }

}

window.Runtime = Runtime;