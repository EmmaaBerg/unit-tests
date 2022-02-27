export const angleCalculator = (turns) => {
  const angle = 360
  if (turns === 0){
  return (angle*0)
} else if (turns === 1){
  return (angle*1)
} else if (turns === 1.5){
  return (angle*1.5)
} else {
  return (angle*2)
}
}
