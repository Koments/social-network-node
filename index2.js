// const yargs = require('yargs')
// const pkg = require('./package.json')
// const { addNote, printNotes, removeNote } = require('./notes.controller')

// yargs.version(pkg.version)

// yargs.command({
//     command: 'add',
//     describe: 'Add new note to list',
//     builder: {
//         title: {
//             type: 'string',
//             describe: 'Note title',
//             demandOption: true
//         }
//     },
//     handler({ title }) {
//         addNote(title)
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'Print all notes',
//     async handler() {
//         printNotes()
//     }
// })

// yargs.command({
//     command: 'remove',
//     describe: 'Remove note by id',
//     builder: {
//         noteID: {
//             type: Number,
//             describe: 'Note id',
//             demandOption: true // обязательный параметр
//         }
//     },
//     async handler({ noteID }) {
//         removeNote(noteID)
//     }
// })

// yargs.parse()