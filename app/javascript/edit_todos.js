export function toggleEdit(todoId) {
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
  