document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate the form fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (
        !firstName ||
        !lastName ||
        !dob ||
        !country ||
        !profession ||
        !email ||
        !mobile
    ) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Get the pop-up element
    const popup = document.getElementById("popup");

    // Get the pop-up content element
    const popupContent = document.getElementById("popup-data");

    // Clear previous content
    popupContent.innerHTML = "";

    // Create a heading in the pop-up
    const popupHeading = document.createElement("h2");
    popupHeading.textContent = "Survey Form Submission";
    popupContent.appendChild(popupHeading);

    // Create an unordered list for displaying form data
    const ul = document.createElement("ul");

    // Iterate through form fields and display them in the pop-up
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
        const label = document.querySelector(`label[for="${key}"]`).textContent;
        const li = document.createElement("li");
        li.innerHTML = `<strong>${label}:</strong> ${value}`;
        ul.appendChild(li);
    });

    // Append the list to the pop-up content
    popupContent.appendChild(ul);

    // Show the pop-up
    popup.style.display = "block";

    // Reset the form
    e.target.reset();
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
