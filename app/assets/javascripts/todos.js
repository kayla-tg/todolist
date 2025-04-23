function toggleEdit(todoId) {
    const input = document.getElementById(`input_${todoId}`);
    const button = document.getElementById(`edit_button_${todoId}`);
    const form = document.getElementById(`form_${todoId}`);
  
    const isEditing = !input.disabled;
  
    if (isEditing) {
        form.requestSubmit();
        input.disabled = true;
    } else {
        input.disabled = false;
        input.focus();
        button.textContent = "Save";
    }
}

function toggleStrikeThrough(todoId) {
    const checkbox = document.getElementById(`checkbox_${todoId}`);
    const wrapper = document.getElementById(`description_wrapper_${todoId}`);
    const button = document.getElementById(`edit_button_${todoId}`);
  
    if (!checkbox || !wrapper) return;
  
    if (checkbox.checked) {
      wrapper.classList.add("strike-through");
      button.disabled = true;
    } else {
      wrapper.classList.remove("strike-through");
      button.disabled = false;
    }
  }