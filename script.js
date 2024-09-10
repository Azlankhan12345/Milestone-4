// Get form and resume elements
var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume');
// Listen for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate the resume dynamically
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = "Email: ".concat(email);
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-jobTitle').textContent = jobTitle;
    document.getElementById('resume-company').textContent = company;
    document.getElementById('resume-skills').innerHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
});
// Optional: Save changes (if needed)
var saveButton = document.createElement('button');
saveButton.textContent = 'Save Changes';
saveButton.addEventListener('click', function () {
    // Implement saving logic if necessary
});
document.body.appendChild(saveButton);
