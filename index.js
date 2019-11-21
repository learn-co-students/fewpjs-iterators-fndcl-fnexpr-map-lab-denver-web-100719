const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentance => {
    const splitSentance = sentance.split(" ")
    const upperCaseSentance = splitSentance.map(word => {
      const capitalLetter = word.charAt(0).toUpperCase()
      const remainingLetters = word.substr(1,word.length)
      return capitalLetter + remainingLetters
    })
    return upperCaseSentance.join(" ")
  })
}
