document.getElementById('calculateBtn').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    switch (activity) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'light':
            calories = bmr * 1.375;
            break;
        case 'moderate':
            calories = bmr * 1.55;
            break;
        case 'active':
            calories = bmr * 1.725;
            break;
        case 'veryActive':
            calories = bmr * 1.9;
            break;
    }

    let message = '';

    // Adjust calories based on goal
    switch (goal) {
        case 'lose':
            calories -= 250;  // 0.25 kg weight loss per week
            message = '*for a loss of 0.25kg per week';
            break;
        case 'gain':
            calories += 250;  // 0.25 kg weight gain per week
            message = '*for a gain of 0.25kg per week';
            break;
    }

    document.getElementById('result').innerText = `Your daily calorie requirement is ${calories.toFixed(0)} calories.`;
    document.getElementById('message').innerText = message;
});


