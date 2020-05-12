// Write your function here:
const tipCalculator = (qualityService,totalCost) => {
if (qualityService === 'bad') {
  return totalCost * 0.05;
} else if (qualityService === 'ok') {
  return totalCost * 0.15; 
} else if (qualityService === 'good') {
  return totalCost * 0.20;
} else if (qualityService === 'excellent') {
  return totalCost * 0.30;
} else {
  return totalCost * 0.18;
}
};
console.log(tipCalculator('good', 100));




// Uncomment the line below when you're ready to try out your function
// console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
