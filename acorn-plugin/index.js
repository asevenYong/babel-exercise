const acorn = require('acorn');

const Parser = acorn.Parser;
const TokenType = acorn.TokenType;

Parser.acorn.keywordTypes['aseven'] = new TokenType('aseven', { keyword: 'aseven' });

function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}

var asevenKeyword = function(Parser) {
  return class extends Parser {
    parse(program) {

    }

    parseStatement() {

    }

    parseAsevenStatement() {
      
    }
  }
}