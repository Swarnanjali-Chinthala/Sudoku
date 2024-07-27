document.addEventListener("DOMContentLoaded", function() {
    const easyBoard = [
        [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ],
        [
            [0, 0, 4, 0, 5, 0, 0, 0, 0],
            [9, 0, 0, 7, 3, 4, 6, 0, 0],
            [0, 0, 3, 0, 2, 1, 0, 4, 9],
            [0, 3, 5, 0, 9, 0, 4, 8, 0],
            [0, 9, 0, 0, 0, 0, 0, 3, 0],
            [0, 7, 6, 0, 1, 0, 9, 2, 0],
            [3, 1, 0, 9, 7, 0, 2, 0, 0],
            [0, 0, 9, 1, 8, 2, 0, 0, 3],
            [0, 0, 0, 0, 6, 0, 1, 0, 0]
        ],
        [
            [6, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 9, 1, 0, 0],
            [0, 8, 9, 0, 0, 0, 0, 0, 5],
            [8, 0, 1, 2, 5, 0, 0, 0, 9],
            [0, 4, 0, 6, 0, 3, 0, 5, 0],
            [5, 0, 0, 0, 9, 1, 8, 0, 2],
            [7, 0, 0, 0, 0, 0, 9, 1, 0],
            [0, 0, 8, 4, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 0, 0, 6]
        ],
        // Additional easy boards here...
    ];
    
    const mediumBoard = [
        [
            [0, 2, 0, 6, 0, 8, 0, 0, 0],
            [5, 8, 0, 0, 0, 9, 7, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0, 0],
            [3, 7, 0, 0, 0, 0, 5, 0, 0],
            [6, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 8, 0, 0, 0, 0, 1, 3],
            [0, 0, 0, 0, 2, 0, 0, 0, 0],
            [0, 0, 9, 8, 0, 0, 0, 3, 6],
            [0, 0, 0, 3, 0, 6, 0, 9, 0]
        ],
        [
            [0, 7, 0, 4, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 9, 7, 4],
            [3, 8, 0, 0, 0, 2, 1, 0, 0],
            [4, 6, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 9, 0, 0, 5, 0, 4, 0],
            [8, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 6, 9, 0, 4, 0, 8, 3],
            [0, 0, 3, 2, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 2, 6]
        ],
        [
            [0, 0, 5, 0, 0, 0, 1, 0, 0],
            [0, 7, 0, 5, 0, 1, 3, 2, 0],
            [0, 6, 0, 0, 0, 0, 7, 0, 0],
            [0, 0, 0, 9, 4, 3, 0, 0, 0],
            [8, 0, 0, 2, 0, 0, 0, 0, 9],
            [9, 2, 4, 0, 7, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 5],
            [5, 4, 0, 1, 0, 9, 0, 0, 0],
            [0, 0, 6, 0, 0, 2, 0, 4, 1]
        ]
        // Additional medium boards here...
    ];
    
    const hardBoard = [
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 3, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 6],
            [0, 0, 0, 5, 0, 9, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 4, 1, 8],
            [0, 0, 9, 0, 0, 0, 0, 0, 0],
            [7, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 6, 0, 0],
            [0, 0, 0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 8, 0, 0, 0, 0],
            [2, 0, 9, 0, 0, 0, 0, 0, 7],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 2, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0, 0, 0, 0],
            [5, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 6],
            [0, 1, 0, 0, 2, 0, 6, 0, 0],
            [0, 0, 0, 6, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [9, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        // Additional hard boards here...
    ];

    let currentBoard = [];
    let timerInterval;
    let startTime;
    let timeLimit;
    let moveCount = 0;
    let boardIndexes = { easy: 0, medium: 0, hard: 0 }; // Track current index for each difficulty

    const sudokuBoard = document.getElementById("sudoku-board");
    const timerElement = document.getElementById("timer");
    const timeLimitElement = document.getElementById("time-limit");
    const newGameButton = document.getElementById("new-game");
    const resetButton = document.getElementById("reset");
    const difficultySelect = document.getElementById('difficulty');
    const moveCountElement = document.getElementById('move-count'); // Add this element in your HTML

    // Modal Elements
    const modal = document.getElementById("completion-modal");
    const closeButton = document.querySelector(".close-button");
    const completionMessage = document.getElementById("completion-message");

    function selectBoard(difficulty) {
        let boards;
        switch (difficulty) {
            case "easy":
                timeLimit = 20 * 60 * 1000; // 20 minutes in milliseconds
                boards = easyBoard;
                break;
            case "medium":
                timeLimit = 45 * 60 * 1000; // 45 minutes in milliseconds
                boards = mediumBoard;
                break;
            case "hard":
                timeLimit = 60 * 60 * 1000; // 1 hour in milliseconds
                boards = hardBoard;
                break;
            default:
                timeLimit = 20 * 60 * 1000; // Default to easy
                boards = easyBoard;
                break;
        }
        return boards;
    }

    function createBoard() {
        sudokuBoard.innerHTML = "";
        for (let row = 0; row < 9; row++) {
            const tr = document.createElement("tr");
            for (let col = 0; col < 9; col++) {
                const td = document.createElement("td");
                const input = document.createElement("input");
                input.type = "text";
                input.maxLength = 1;
                input.dataset.row = row;
                input.dataset.col = col;
                input.dataset.previousValue = "";
                input.addEventListener("input", function(event) {
                    validateInput(input);
                    highlightSimilarNumbers(input);
                    checkForDuplicates();
                    if (event.inputType !== "deleteContentBackward") {
                        updateMoveCount(input);
                    }
                    checkGameCompletion();
                });
                // Add event listener for double-click
                input.addEventListener("dblclick", function() {
                    highlightSimilarNumbers(input, true);
                });
                td.appendChild(input);
                tr.appendChild(td);
            }
            sudokuBoard.appendChild(tr);
        }
        fillBoard();
    }
    
    function highlightSimilarNumbers(input, doubleClick = false) {
        const value = input.value;
        // Remove previous highlights
        document.querySelectorAll(".highlight-similar").forEach(cell => cell.classList.remove("highlight-similar"));
        document.querySelectorAll(".highlight-yellow").forEach(cell => cell.classList.remove("highlight-yellow"));
    
        if (value) {
            const classToAdd = doubleClick ? "highlight-yellow" : "highlight-similar";
            document.querySelectorAll(`input[value="${value}"]`).forEach(cell => cell.classList.add(classToAdd));
        }
    }
    

    function fillBoard() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const input = sudokuBoard.rows[row].cells[col].querySelector("input");
                const value = currentBoard[row][col];
                if (value !== 0) {
                    input.value = value;
                    input.classList.add("correct");
                    input.disabled = true;
                }
            }
        }
    }

    function validateInput(input) {
        const value = input.value;
        const valid = /^[1-9]$/.test(value);
        if (!valid) {
            input.value = "";
        }
    }

    // function highlightSimilarNumbers(input) {
    //     const value = input.value;
    //     document.querySelectorAll(".highlight-similar").forEach(cell => cell.classList.remove("highlight-similar"));
    //     if (value) {
    //         document.querySelectorAll(`input[value="${value}"]`).forEach(cell => cell.classList.add("highlight-similar"));
    //     }
    // }

    function checkForDuplicates() {
        const cells = document.querySelectorAll("input");
        cells.forEach(cell => cell.classList.remove("duplicate"));

        for (let i = 0; i < 9; i++) {
            checkRowForDuplicates(i);
            checkColumnForDuplicates(i);
        }
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                checkBlockForDuplicates(row, col);
            }
        }
    }

    function checkRowForDuplicates(row) {
        const seen = new Set();
        for (let col = 0; col < 9; col++) {
            const cell = sudokuBoard.rows[row].cells[col].querySelector("input");
            const value = cell.value;
            if (value && seen.has(value)) {
                cell.classList.add("duplicate");
            } else {
                seen.add(value);
            }
        }
    }

    function checkColumnForDuplicates(col) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const cell = sudokuBoard.rows[row].cells[col].querySelector("input");
            const value = cell.value;
            if (value && seen.has(value)) {
                cell.classList.add("duplicate");
            } else {
                seen.add(value);
            }
        }
    }

    function checkBlockForDuplicates(startRow, startCol) {
        const seen = new Set();
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const cell = sudokuBoard.rows[row].cells[col].querySelector("input");
                const value = cell.value;
                if (value && seen.has(value)) {
                    cell.classList.add("duplicate");
                } else {
                    seen.add(value);
                }
            }
        }
    }

    function startTimer() {
        startTime = Date.now();
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = timeLimit - elapsedTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            showModal("Time's up! You lost the game.");
        } else {
            const minutes = Math.floor(remainingTime / 1000 / 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    function handleNewGame() {
        clearInterval(timerInterval);
        const difficulty = difficultySelect.value;
        const boards = selectBoard(difficulty);
        currentBoard = boards[boardIndexes[difficulty] % boards.length]; // Cycle through boards
        boardIndexes[difficulty]++;
        createBoard();
        startTimer();
        timeLimitElement.textContent = formatTimeLimit(timeLimit);
        moveCount = 0;
        moveCountElement.textContent = moveCount; // Reset move count
    }

    function formatTimeLimit(limit) {
        const minutes = Math.floor(limit / 1000 / 60);
        return `${minutes} minutes`;
    }

    function handleReset() {
        clearInterval(timerInterval);
        createBoard();
        startTimer();
        moveCount = 0;
        moveCountElement.textContent = moveCount; // Reset move count
    }

    function updateMoveCount(input) {
        const previousValue = input.dataset.previousValue;
        const currentValue = input.value;
        if (previousValue !== currentValue) {
            moveCount++;
            moveCountElement.textContent = moveCount;
            input.dataset.previousValue = currentValue;
        }
    }

    function checkGameCompletion() {
        let complete = true;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const input = sudokuBoard.rows[row].cells[col].querySelector("input");
                if (!input.value || input.classList.contains("duplicate")) {
                    complete = false;
                    break;
                }
            }
            if (!complete) break;
        }
        if (complete) {
            clearInterval(timerInterval);
            const elapsedTime = Date.now() - startTime;
            const minutes = Math.floor(elapsedTime / 1000 / 60);
            const seconds = Math.floor((elapsedTime / 1000) % 60);
            showModal(`Congratulations! You completed the game in ${minutes} minutes and ${seconds} seconds with ${moveCount} moves.`);
        }
    }

    function showModal(message) {
        completionMessage.textContent = message;
        modal.style.display = "block";
    }

    function hideModal() {
        modal.style.display = "none";
    }

    closeButton.addEventListener("click", hideModal);
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });

    newGameButton.addEventListener("click", handleNewGame);
    resetButton.addEventListener("click", handleReset);
    difficultySelect.addEventListener('change', handleNewGame);
    // Initial board setup
    handleNewGame();
});
