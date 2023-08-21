const uniqueOccurrences= (arr)=> {
  const occurrencesMap = new Map();
  
  for (const num of arr) {
    occurrencesMap.set(num, (occurrencesMap.get(num) || 0) + 1);
  }
  const occurrencesSet = new Set(occurrencesMap.values());
  return occurrencesSet.size === occurrencesMap.size;
}
