const calculateBMI = () => {
    let weight = document.getElementById('weight')
    let weight = document.getElementById('height')
    let results = calculateMetricBMI(weightInput.value, heightInput.value)
    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}</h1>`
}