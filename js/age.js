// automatic age calculator


function calculateAge() {
    // Pre-set the birthday to April 7, 1954
    var birthday = new Date('1954-04-07');

    // Calculate the age
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();

    // Check if birthday hasn't occurred yet this year
    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Your age is: ' + age + ' years.';
}