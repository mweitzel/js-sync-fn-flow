var syncFnFlow = require('./index')

function fail(msg) {
  throw new Error(msg)
}

var doubleIt = (a) => 2 * a

syncFnFlow(
  _=> 2
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
, doubleIt
) === 4096 || fail('expected 4096')


var person = { name: 'john conner' }

var upperCase = (word) =>
  word.length
  ? [word[0].toUpperCase()].concat(word.split('').slice(1)).join('')
  : word

syncFnFlow(
  _=> person.name
, _=> _.split(' ')
, _=> _.map(upperCase) //word => word[0] && word[0].toUpperCase() + word)
, _=> _.join(' ')
, _=> person.name = _
)

person.name === 'John Conner' || fail(person.name)

console.log('great success')
