const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const textarea = form.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";

populateForm()

form.addEventListener("input", onFormInput);

form.addEventListener("submit", onFormSubmit);


function onFormInput(event) {
    const key = event.target.name; 
    const value = event.target.value;
    formData[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return; 
    }
    
    console.log("Submitted Data:", formData);

    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";

    form.reset();

}



function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY)
    
    if (savedData) {
        const parsedData = JSON.parse(savedData)

        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        emailInput.value = formData.email;
        textarea.value = formData.message;
    }
}
