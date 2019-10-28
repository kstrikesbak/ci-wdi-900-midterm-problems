function isEvenlyDivisible(a,b) {
  return a % b === 0
}

function halfSquare(a) {
  return a**2/2
}

function isLong(str) {
  return str.length>14
}

function exclaim(str) {
  let newStr = ''
  for (let i=str.length-1;i>-1;i--) {
    if (str[i] !== '!') {
      newStr = newStr + str.slice(0,i+1) + '!'
      break;
    }
  }
  return newStr 
}


function countWords(str) {
  let count = 0
  for (let i=0;i<str.length;i++) {
    if (str[i]===' ') {
      count++
    }
  }
  return count + 1
}

function containsDigit(str) {
  for (let i=0;i<str.length;i++) {
    if ('0123456789'.includes[str[i]]) {
      return true
    }
  }
    return false
}

function containsLowerCase(str) {
  for (let i=0;i<str.length;i++) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes[str[i]]) {
      return true
    }
  }
    return false
}

function containsUpperCase(str) {
  for (let i=0;i<str.length;i++) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes[str[i]]) {
      return true
    }
  }
    return false
}

function containsNonAlphanumeric(str) {
  for (let i=0;i<str.length;i++) {
    if ('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'.includes[str[i]]) {
      return true
    }
  }
    return false
}

function containsSpace(str) {
  for (let i=0;i<str.length;i++) {
    if (str[i] === ' ') {
      return true
    }
  }
  return false
}

function digits(str) {
  let newArr = []
  if (str >= 0) {
    let component = str[i]
    for (let i=0;i<component.length;i++) {
    newArr.push(component[i])
    }
  // } else {
  //   newArr.push(Number(`${num}` * -1))
  }
  return newArr
}

function truncate(str) {
  let newStr= ''
  if (str.length>14) {
    newStr = newStr + str.slice(0,8) + '...'
  } else {
    newStr = newStr + str
  }
return newStr 
}
function isValidPassword(str) {
  for (let i=0;i<str.length;i++) {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let digits = '0123456789'
    let space = ' '
    if (upperCase.includes(str[i]) && lowerCase.includes(str[i]) && digits.includes(str[i]) &&  space.includes(str[i])) {
      return true 
    }
      if (upperCase.includes(str[i]) || lowerCase.includes(str[i]) || digits.includes(str[i])) {
        return false 
      }
  }
    return true  
  }

function onlyPunchy(arr) {
  let newArr = []
  for (let i=0;i<arr.length;i++) {
    let component = arr[i]
    let newStr = ''
    if (component.length<15 && component.length-1 !== ' ') {
      newArr.push(newStr + arr[i] + '!')
    } else if (component.length<15) {
      newArr.push(newStr + arr[i])
      }
      }
      return newArr
      
    }
    
  
  

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}