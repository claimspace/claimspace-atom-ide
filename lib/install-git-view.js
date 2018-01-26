'use babel';

import { Emitter } from 'atom';

import opn from 'opn';

const DownloadUri = 'https://git-scm.com/downloads';
const HelpUri     = 'https://claimspace.cloud/help/install-git'

export default class InstallGitView {

  constructor (templates) {
    this.templates = templates;

    this.emitter = new Emitter();

    this.element = document.createElement('div');
    this.element.classList.add('claimspace-atom-ide');

    this.element.innerHTML = this.templates.git();

    this.element
      .querySelector('.Git-install')
      .addEventListener('click', _ => {
        opn(DownloadUri);
        this.emitter.emit('install');
      });

    this.element
      .querySelector('.Git-help')
      .addEventListener('click', _ => opn(HelpUri));
  }

  onInstall (callback) {
    this.emitter.on('install', callback);
  }

  serialize () {}

  destroy () {
    this.emitter.dispose();
    this.element.remove();
  }

  getElement () {
    return this.element;
  }

}
