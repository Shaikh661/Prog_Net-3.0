// ProgTick demo website JavaScript
// This project uses sample data. It does not connect to a real server or database.

document.addEventListener("DOMContentLoaded", function () {
    // Filter tickets by text and status on the All Tickets page.
    var searchBox = document.getElementById("ticketSearch");
    var statusFilter = document.getElementById("statusFilter");
    var ticketTable = document.getElementById("ticketTable");
    var emptyMessage = document.getElementById("emptyMessage");

    function filterTickets() {
        if (!ticketTable) return;

        var searchText = searchBox.value.toLowerCase();
        var selectedStatus = statusFilter.value;
        var rows = ticketTable.querySelectorAll("tbody tr");
        var visibleCount = 0;

        rows.forEach(function (row) {
            var rowText = row.textContent.toLowerCase();
            var statusText = row.cells[4].textContent.toLowerCase();
            var matchesSearch = rowText.includes(searchText);
            var matchesStatus =
                selectedStatus === "all" || statusText.includes(selectedStatus);

            if (matchesSearch && matchesStatus) {
                row.style.display = "";
                visibleCount++;
            } else {
                row.style.display = "none";
            }
        });

        emptyMessage.classList.toggle("hidden", visibleCount !== 0);
    }

    if (searchBox && statusFilter) {
        searchBox.addEventListener("input", filterTickets);
        statusFilter.addEventListener("change", filterTickets);
    }

    // Show a success message when the demo ticket form is submitted.
    var ticketForm = document.getElementById("ticketForm");
    var successMessage = document.getElementById("successMessage");

    if (ticketForm) {
        ticketForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (ticketForm.checkValidity()) {
                successMessage.classList.remove("hidden");
                ticketForm.reset();
                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        });
    }

    // Show a demo confirmation when the profile form is saved.
    var profileForm = document.getElementById("profileForm");
    var profileMessage = document.getElementById("profileMessage");

    if (profileForm) {
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            profileMessage.textContent =
                "✓ Profile changes saved for this demo.";
            profileMessage.style.color = "#24986e";
        });
    }

    // Simulate refreshing server information.
    var refreshButton = document.getElementById("refreshServers");
    var refreshMessage = document.getElementById("refreshMessage");

    if (refreshButton) {
        refreshButton.addEventListener("click", function () {
            refreshMessage.classList.remove("hidden");
            refreshMessage.textContent = "✓ Demo status refreshed just now.";
        });
    }
});
