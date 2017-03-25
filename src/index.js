'use strict';

const
  icon = require('../icon.png')

, title = 'Casefy'

, matcher = /^(up|low)case\s+(.*)/

, cased = (type, str) =>
    type === 'up'
    ? str.toUpperCase()
    : str.toLowerCase()

, plugin = ({term, display, actions}) => {
    const match = term.match(matcher)

    if (!match) return;

    const
      [, type, query] = match
    , result = cased(type, query)

    display(
      { icon
      , title
      , subtitle: `cmd+c to copy "${result}"`
      , clipboard: result
      }
    )
  }

module.exports = {
  fn: plugin
}
