export const firstLast = (items) => {
  if (items.length === 0){
    return `No items!`
  } else if (items.length === 1){
    return `Only item: ${items[0]}`
  } else {
  return `First: ${items[0]}, Last: ${items[items.length-1]}`
}
}

// items.length-1 tells the length of the array minus 1 and will print a number
// To get the last item of the array we need to use [items.length-1] 
