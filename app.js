const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Note content',
  demand: true,
  alias: 'b'
}

var argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv

var command = argv._[0]

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  if (note) {
    console.log('Note created:')
    notes.logNote(note)
  } else {
    console.log('Note title already exists')
  }
} else if (command === 'read') {
  var readNote = notes.getNote(argv.title)
  if (readNote) {
    console.log('Read note:')
    notes.logNote(readNote)
  } else {
    console.log('Note not found')
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note title does not exist'
  console.log(message)
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => notes.logNote(note))
} else {
  console.log('Command not recognized')
}
