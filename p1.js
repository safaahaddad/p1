const isPalindrome=(word)=>{
    const newWord=word.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    arr = Array.from(newWord);
      let forward = arr.slice(0, arr.length).join("");
      let backward = arr.reverse().join("");
        
      if (forward === backward) {
        console.log(true)
        return true;
      } else {
        console.log(false)
        return false;
      }
}
