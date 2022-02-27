export const findIndex = (array, value) => {
 if (value === 'Apple'){
   return array.indexOf('Apple')
 } else if (value === 'Lemon'){
   return array.indexOf('Lemon')
 } else if (value === 'Orange') {
  return array.indexOf('Orange')
} else {
 return array.indexOf ('Pineapple')
}
}
