export function toggleEdit(todoId) {
    const descEl = document.getElementById(`desc_${todoId}`);
    const formEl = document.getElementById(`form_${todoId}`);
    const buttonEl = document.getElementById(`edit_button_${todoId}`);
  
    const isEditing = formEl.classList.contains("hidden") === false;
  
    if (isEditing) {
      // Submit the form when saving
      formEl.querySelector("form").requestSubmit();
    } else {
      // Toggle view to editing mode
      descEl.classList.add("hidden");
      formEl.classList.remove("hidden");
      buttonEl.textContent = "Save";
    }
  }
  