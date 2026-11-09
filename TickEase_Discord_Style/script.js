// ProgTick demo app: browser-local ticket storage (no backend/database).
document.addEventListener("DOMContentLoaded", function () {
    var STORAGE_KEY = "ProgTick_tickets_v2";
    var PROFILE_KEY = "ProgTick_profile_v1";
    var starterTickets = [
        {
            id: "TK-1048",
            subject: "Login issue",
            category: "Account & Login",
            priority: "High",
            status: "Open",
            description: "Cannot access account.",
            creator: "Usman Shaikh",
            date: "Oct 28, 2026",
        },
        {
            id: "TK-1047",
            subject: "Server connection",
            category: "Technical Support",
            priority: "Medium",
            status: "In progress",
            description: "Connection drops often.",
            creator: "Mohib",
            date: "Oct 28, 2026",
        },
        {
            id: "TK-1046",
            subject: "Update user details",
            category: "Account & Login",
            priority: "Low",
            status: "Resolved",
            description: "Change profile information.",
            creator: "Ameer Hamza",
            date: "Oct 27, 2026",
        },
        {
            id: "TK-1045",
            subject: "Email not syncing",
            category: "Software",
            priority: "High",
            status: "In progress",
            description: "Mailbox update delay.",
            creator: "Wahab Musalli",
            date: "Oct 27, 2026",
        },
    ];
    function getTickets() {
        try {
            var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (Array.isArray(saved)) return saved;
        } catch (e) {}
        localStorage.setItem(STORAGE_KEY, JSON.stringify(starterTickets));
        return starterTickets.slice();
    }
    function saveTickets(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
    function getProfile() {
        try {
            return (
                JSON.parse(localStorage.getItem(PROFILE_KEY)) || {
                    name: "Mohib",
                    email: "mohibimran17@example.com",
                }
            );
        } catch (e) {
            return { name: "Mohib", email: "" };
        }
    }
    function initials(name) {
        return (name || "M")
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(function (part) {
                return part.charAt(0);
            })
            .join("")
            .toUpperCase();
    }
    function safe(value) {
        return String(value || "").replace(/[&<>"']/g, function (ch) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            }[ch];
        });
    }
    function statusClass(status) {
        if (status.toLowerCase().indexOf("progress") !== -1) return "progress";
        if (status.toLowerCase() === "resolved") return "resolved";
        return "open";
    }
    function priorityClass(priority) {
        return String(priority).toLowerCase();
    }
    function renderSidebar() {
        var tickets = getTickets(),
            profile = getProfile();
        var list = document.getElementById("sidebarTicketList");
        var count = document.getElementById("navTicketCount");
        var name = document.getElementById("sidebarUserName");
        var avatar = document.getElementById("sidebarAvatar");
        if (count) count.textContent = tickets.length;
        if (name) name.textContent = profile.name || "Mohib";
        if (avatar) avatar.textContent = initials(profile.name || "Mohib");
        if (list) {
            if (!tickets.length)
                list.innerHTML =
                    '<div class="sidebar-empty">No tickets yet. Create your first ticket.</div>';
            else
                list.innerHTML = tickets
                    .slice()
                    .reverse()
                    .map(function (ticket) {
                        return (
                            '<a class="sidebar-ticket" href="tickets.html?ticket=' +
                            encodeURIComponent(ticket.id) +
                            '" title="' +
                            safe(ticket.subject) +
                            '"><span class="ticket-mini-icon">#</span><span class="sidebar-ticket-copy"><strong>' +
                            safe(ticket.subject) +
                            "</strong><small>" +
                            safe(ticket.creator) +
                            " · " +
                            safe(ticket.id) +
                            '</small></span><i class="ticket-state ' +
                            statusClass(ticket.status) +
                            '"></i></a>'
                        );
                    })
                    .join("");
        }
    }
    function renderTicketTable() {
        var tickets = getTickets();
        var table = document.getElementById("ticketTable");
        if (table) {
            var body = table.querySelector("tbody");
            body.innerHTML = tickets
                .slice()
                .reverse()
                .map(function (t) {
                    return (
                        '<tr data-ticket="' +
                        safe(t.id) +
                        '"><td><a class="ticket-id ticket-open-link" href="tickets.html?ticket=' +
                        encodeURIComponent(t.id) +
                        '">#' +
                        safe(t.id) +
                        "</a><small>" +
                        safe(t.date) +
                        '</small></td><td><div class="request-name">' +
                        safe(t.subject) +
                        "</div><small>" +
                        safe(t.description) +
                        "</small></td><td>" +
                        safe(t.category) +
                        '</td><td><span class="priority ' +
                        priorityClass(t.priority) +
                        '">' +
                        safe(t.priority) +
                        '</span></td><td><span class="status ' +
                        statusClass(t.status) +
                        '">● ' +
                        safe(t.status) +
                        "</span></td><td>" +
                        safe(t.creator) +
                        "</td></tr>"
                    );
                })
                .join("");
        }
        var dashBody = document.getElementById("dashboardTicketBody");
        if (dashBody) {
            dashBody.innerHTML = tickets
                .slice()
                .reverse()
                .slice(0, 4)
                .map(function (t) {
                    return (
                        '<tr><td><a class="ticket-id" href="tickets.html?ticket=' +
                        encodeURIComponent(t.id) +
                        '">#' +
                        safe(t.id) +
                        "</a><small>" +
                        safe(t.date) +
                        '</small></td><td><div class="request-name">' +
                        safe(t.subject) +
                        "</div><small>" +
                        safe(t.category) +
                        '</small></td><td><span class="priority ' +
                        priorityClass(t.priority) +
                        '">' +
                        safe(t.priority) +
                        '</span></td><td><span class="status ' +
                        statusClass(t.status) +
                        '">● ' +
                        safe(t.status) +
                        "</span></td></tr>"
                    );
                })
                .join("");
        }
        var dashboardStats = document.querySelectorAll(
            ".stats-grid:not(.compact-stats) .stat-number",
        );
        if (dashboardStats.length >= 3) {
            dashboardStats[0].textContent = tickets.length;
            dashboardStats[1].textContent = tickets.filter(function (t) {
                return t.status === "Open";
            }).length;
            dashboardStats[2].textContent = tickets.filter(function (t) {
                return t.status === "In progress";
            }).length;
        }
        var total = document.querySelectorAll(".compact-stats .stat-number");
        if (total.length >= 4) {
            var open = tickets.filter(function (t) {
                return t.status === "Open";
            }).length;
            var progress = tickets.filter(function (t) {
                return t.status === "In progress";
            }).length;
            var resolved = tickets.filter(function (t) {
                return t.status === "Resolved";
            }).length;
            total[0].textContent = tickets.length;
            total[1].textContent = open;
            total[2].textContent = progress;
            total[3].textContent = resolved;
        }
    }
    renderSidebar();
    renderTicketTable();

    var searchBox = document.getElementById("ticketSearch");
    var statusFilter = document.getElementById("statusFilter");
    function filterTickets() {
        var table = document.getElementById("ticketTable");
        if (!table) return;
        var q = (searchBox ? searchBox.value : "").toLowerCase();
        var status = statusFilter ? statusFilter.value : "all";
        var visible = 0;
        table.querySelectorAll("tbody tr").forEach(function (row) {
            var matches = row.textContent.toLowerCase().includes(q);
            var statusText = row.cells[4]
                ? row.cells[4].textContent.toLowerCase()
                : "";
            var statusMatch = status === "all" || statusText.includes(status);
            row.style.display = matches && statusMatch ? "" : "none";
            if (matches && statusMatch) visible++;
        });
        var empty = document.getElementById("emptyMessage");
        if (empty) empty.classList.toggle("hidden", visible !== 0);
    }
    if (searchBox) searchBox.addEventListener("input", filterTickets);
    if (statusFilter) statusFilter.addEventListener("change", filterTickets);

    var form = document.getElementById("ticketForm");
    var success = document.getElementById("successMessage");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            var tickets = getTickets();
            var nextNumber =
                tickets.reduce(function (max, t) {
                    var n =
                        parseInt(String(t.id).replace(/\D/g, ""), 10) || 1044;
                    return Math.max(max, n);
                }, 1044) + 1;
            var profile = getProfile();
            var subject = document.getElementById("subject").value.trim();
            var category = document.getElementById("category").value;
            var priority = document.getElementById("priority").value;
            var description = document
                .getElementById("description")
                .value.trim();
            var now = new Date();
            var date = now.toLocaleDateString(undefined, {
                month: "short",
                day: "2-digit",
                year: "numeric",
            });
            tickets.push({
                id: "TK-" + nextNumber,
                subject: subject,
                category: category,
                priority: priority,
                status: "Open",
                description: description,
                creator: profile.name || "Mohib",
                date: date,
            });
            saveTickets(tickets);
            renderSidebar();
            if (success) {
                success.classList.remove("hidden");
                success.querySelector("strong").textContent =
                    "Ticket #TK-" + nextNumber + " created!";
                var paragraph = success.querySelector("p");
                if (paragraph)
                    paragraph.textContent =
                        "Your ticket has been added to the ticket list and sidebar.";
                success.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
            form.reset();
        });
    }

    var profileForm = document.getElementById("profileForm");
    var profileMessage = document.getElementById("profileMessage");
    if (profileForm) {
        var profile = getProfile();
        var fullName = document.getElementById("fullName");
        var email = document.getElementById("email");
        if (fullName && profile.name) fullName.value = profile.name;
        if (email && profile.email) email.value = profile.email;
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var updated = {
                name: fullName ? fullName.value.trim() : "Mohib",
                email: email ? email.value.trim() : "",
            };
            localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
            if (profileMessage) {
                profileMessage.textContent =
                    "✓ Profile changes saved in this browser.";
                profileMessage.style.color = "#24986e";
            }
            renderSidebar();
            var heading = document.querySelector(".profile-main h2");
            if (heading) heading.textContent = updated.name;
            var profileAvatar = document.querySelector(".profile-avatar");
            if (profileAvatar)
                profileAvatar.textContent = initials(updated.name);
        });
    }

    // A selected ticket opens a compact details dialog.
    var params = new URLSearchParams(window.location.search);
    var selectedId = params.get("ticket");
    if (selectedId) {
        var selected = getTickets().find(function (t) {
            return t.id === selectedId;
        });
        if (selected) {
            var dialog = document.createElement("dialog");
            dialog.className = "ticket-dialog";
            dialog.innerHTML =
                '<div class="ticket-dialog-head"><div><span class="eyebrow">TICKET DETAILS</span><h2>' +
                safe(selected.subject) +
                '</h2></div><button type="button" class="dialog-close" aria-label="Close">×</button></div><div class="ticket-dialog-meta"><span>#' +
                safe(selected.id) +
                "</span><span>" +
                safe(selected.status) +
                "</span><span>" +
                safe(selected.priority) +
                " priority</span></div><p>" +
                safe(selected.description) +
                '</p><div class="ticket-dialog-footer">Created by <strong>' +
                safe(selected.creator) +
                '</strong><a class="primary-btn" href="create-ticket.html">＋ New ticket</a></div>';
            document.body.appendChild(dialog);
            dialog
                .querySelector(".dialog-close")
                .addEventListener("click", function () {
                    dialog.close();
                    history.replaceState(null, "", window.location.pathname);
                });
            dialog.addEventListener("click", function (e) {
                if (e.target === dialog) {
                    dialog.close();
                    history.replaceState(null, "", window.location.pathname);
                }
            });
            if (typeof dialog.showModal === "function") dialog.showModal();
        }
    }
});
