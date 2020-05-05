const captilizeAllWords = (sentence) => {
    if (typeof sentence !== "string") return sentence;
    return sentence.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  
  console.log(captilizeAllWords("Something is going on here"));