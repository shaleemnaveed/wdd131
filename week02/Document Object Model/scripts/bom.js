const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const item = document.createElement("li");
        item.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", function () {
            list.removeChild(item);
        });

        item.appendChild(deleteButton);
        list.appendChild(item);

        input.value = "";
        input.focus();
    }
});