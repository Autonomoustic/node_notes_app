console.log('starting notes')

var addNote = (title, body) => {
  console.log('Adding note:', title, body)
}

var getAll = () => {
  console.log('Getting all notes')
}

var removeNote = (title) => {
  console.log('Removing:', title)
}

var getNote = (title) => {
  console.log('Getting:', title)
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
}
