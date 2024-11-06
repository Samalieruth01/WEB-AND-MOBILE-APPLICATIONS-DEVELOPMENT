//a function to check if two strings are anagrams (contain the same characters in a different order

    function areAnagrams(str1, str2) {
      const sortStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
      return sortStr(str1) === sortStr(str2);
    }
    
    console.log(areAnagrams("listen", "silent")); // true