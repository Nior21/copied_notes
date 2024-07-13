// Получение таблицы
let copyTable = document.getElementById("copy-table");

// Добавление обработчика события для каждой ячейки таблицы
Array.from(copyTable.querySelectorAll("td")).forEach((td) => {
    td.addEventListener("click", (e) => {
        // Копирование содержимого ячейки в буфер обмена
        navigator.clipboard.writeText(e.target.textContent);
    });
});