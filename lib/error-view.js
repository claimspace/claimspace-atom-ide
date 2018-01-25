'use babel';

const os = require('os');
const path = require('path');
const fs = require('fs');

const { Emitter } = require('atom');

const templates = require('./templates');

export default class ErrorView {

  constructor () {
    this.emitter = new Emitter();

    this.element = document.createElement('div');
    this.element.classList.add('claimspace-atom-ide');

    this.element.addEventListener('click', _ => this.emitter.emit('accept'))
  }

  onClone (callback) {
    this.emitter.on('clone', callback);
  }

  onAccept (callback) {
    this.emitter.on('accept', callback);
  }

  render (error) {
    this.element.innerHTML = templates.error(error);
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
