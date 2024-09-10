// Get form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLElement;

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Generate the resume dynamically
  document.getElementById('resume-name')!.textContent = name;
  document.getElementById('resume-email')!.textContent = `Email: ${email}`;
  document.getElementById('resume-education')!.textContent = education;
  document.getElementById('resume-jobTitle')!.textContent = jobTitle;
  document.getElementById('resume-company')!.textContent = company;
  document.getElementById('resume-skills')!.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');
});

// Optional: Save changes (if needed)
const saveButton = document.createElement('button');
saveButton.textContent = 'Save Changes';
saveButton.addEventListener('click', () => {
  // Implement saving logic if necessary
});
document.body.appendChild(saveButton);
