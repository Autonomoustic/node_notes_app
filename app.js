console.log('starting app')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

var argv = yargs.argv

var command = argv._[0]

console.log('yargs:', argv)

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else if (command === 'list') {
  notes.getAll()
} else {
  console.log('Command not recognized')
}
