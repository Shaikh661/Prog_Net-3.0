# ProgTick Ticketing System

## Run the project
1. Extract this ZIP folder.
2. Open the `ticketing_system_website` folder in VS Code.
3. Open `index.html` with Live Server (or open it directly in a browser).

## Updated navigation
- Dashboard
- All Tickets
- Create Ticket
- Your Tickets list in the sidebar
- Profile panel at the bottom of the sidebar

The sidebar uses ProgTick branding and a letter-based avatar, not Discord branding or avatars. Server Info has been removed from the navigation and the related-server field has been removed from the ticket form.

## Ticket storage note
This is still a front-end demo made with HTML, CSS and JavaScript. Tickets and profile changes are saved in the browser's `localStorage`, so they appear across the project's pages in the same browser. They do not sync between different computers or browsers. Multi-user shared tickets require a backend and database.

The project starts with four sample tickets so the new sidebar and ticket list are populated for demonstration. New tickets are added to that list automatically.
