'use strict';


const WorkshopperAdventure = require('workshopper-adventure');
const Header = require('workshopper-adventure/default/header');
//const Footer = require('workshopper-adventure/default/footer');
const Fail = require('workshopper-adventure/default/fail');
const Pass = require('workshopper-adventure/default/pass');


const app = WorkshopperAdventure({
  appDir: __dirname,
  languages: ['es'],
  header: Header,
  //footer: Footer,
  fail: Fail,
  pass: Pass
});


app.addAll([
  'HOF',
  'MAP',
  'FILTER',
  'REDUCE',
  'ARROW FUNCTIONS',
  'CLOSURES',
  'FACTORY',
  'OBJECT ASSIGN',
  'OBJECT COMPOSITION'
]);


module.exports = app;
