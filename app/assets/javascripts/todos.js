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

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("todo-list");
    if (!list) return;
  
    new Sortable(list, {
        animation: 150,
        handle: "tr", // the entire row is draggable
        onEnd: function (evt) {
            const ids = Array.from(list.children).map(row => row.dataset.id);
    
            fetch("/todos/reorder", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
            },
            body: JSON.stringify({ order: ids })
            });
        }
    });
});
