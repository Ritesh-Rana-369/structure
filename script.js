
/* ===============================
   OPEN / CLOSE SIDEBAR MENU
================================ */

function toggleMenu(menuId) {

    const menu = document.getElementById(menuId);

    if (menu) {
        menu.classList.toggle("show");
    }

}


/* ===============================
   HIDE ALL PROGRAMS
================================ */

function hideAllPrograms() {

    const programs =
        document.querySelectorAll(".program-card");

    programs.forEach(function(program) {
        program.classList.add("hidden");
    });

}


/* ===============================
   REMOVE ACTIVE SIDEBAR BUTTONS
================================ */

function removeActiveButtons() {

    const buttons =
        document.querySelectorAll(".nav-item");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

}


/* ===============================
   SHOW ONE PROGRAM
================================ */

function showProgram(programId) {

    hideAllPrograms();


    const defaultProgram =
        document.getElementById("defaultProgram");

    defaultProgram.classList.add("hidden");


    const selectedProgram =
        document.getElementById(programId);


    if (selectedProgram) {

        selectedProgram.classList.remove("hidden");


        const title =
            selectedProgram.querySelector("h3").innerText;


        document.getElementById("sectionTitle").innerText =
            title;


        document.querySelector(".program-section")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }

}


/* ===============================
   SHOW ALL PROGRAMS
================================ */

function showDefault(button) {

    const programs =
        document.querySelectorAll(".program-card");


    const defaultProgram =
        document.getElementById("defaultProgram");


    // Hide welcome message
    defaultProgram.classList.add("hidden");


    // Show all programs
    programs.forEach(function(program) {
        program.classList.remove("hidden");
    });


    document.getElementById("sectionTitle").innerText =
        "All DSA Programs";


    removeActiveButtons();


    if (button) {
        button.classList.add("active");
    }


    document.querySelector(".program-section")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* ===============================
   SHOW TOPIC FROM CAPSULE
================================ */

function showTopic(topic) {

    hideAllPrograms();


    const defaultProgram =
        document.getElementById("defaultProgram");

    defaultProgram.classList.add("hidden");


    const programs =
        document.querySelectorAll(".program-card");


    let totalPrograms = 0;


    programs.forEach(function(program) {

        if (program.dataset.topic === topic) {

            program.classList.remove("hidden");

            totalPrograms++;

        }

    });


    document.getElementById("sectionTitle").innerText =
        topic + " Programs";


    removeActiveButtons();


    // If topic has no program
    if (totalPrograms === 0) {

        defaultProgram.classList.remove("hidden");

        defaultProgram.innerHTML = `
            <h3>No Programs Found</h3>
            <p>No programs are available in ${topic}.</p>
        `;

    }


    document.querySelector(".program-section")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* ===============================
   SEARCH PROGRAM
================================ */

function searchPrograms() {

    const searchInput =
        document.getElementById("searchInput");


    const searchText =
        searchInput.value.toLowerCase().trim();


    if (searchText === "") {

        showDefault();

        return;

    }


    hideAllPrograms();


    const defaultProgram =
        document.getElementById("defaultProgram");


    defaultProgram.classList.add("hidden");


    const programs =
        document.querySelectorAll(".program-card");


    let found = 0;


    programs.forEach(function(program) {

        const title =
            program.querySelector("h3")
                .innerText
                .toLowerCase();


        if (title.includes(searchText)) {

            program.classList.remove("hidden");

            found++;

        }

    });


    document.getElementById("sectionTitle").innerText =
        "Search Results";


    if (found === 0) {

        defaultProgram.classList.remove("hidden");


        defaultProgram.innerHTML = `
            <h3>No Program Found</h3>

            <p>
                Try searching for Array, Stack,
                Queue, Tree, Graph or Sorting.
            </p>
        `;

    }


    document.querySelector(".program-section")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* ===============================
   ENTER KEY SEARCH
================================ */

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchPrograms();

        }

    });


/* ===============================
   RESET SEARCH
================================ */

document
    .getElementById("searchInput")
    .addEventListener("search", function() {

        if (this.value === "") {

            showDefault();

        }

    });