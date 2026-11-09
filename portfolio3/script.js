const sections = [
  { title: "The Chronicle", items: [
    ["The Beginning", "chronicle/beginning"], ["Prog-Net 1.0", "chronicle/prog-net-1"], ["Prog-Net 2.0", "chronicle/prog-net-2"], ["Prog-Net 3.0", "chronicle/prog-net-3"], ["Evolution & Milestones", "chronicle/milestones"]
  ] },
  { title: "The People", items: [
    ["The Founding Team", "people/founding-team"], ["Team Structure", "people/team-structure"], ["Members & Responsibilities", "people/members"], ["Alliances & Collaborations", "people/collaborations"], ["Acknowledgements", "people/acknowledgements"]
  ] },
  { title: "Our Products", items: [
    ["Product Overview", "products"], ["Handmade Marketplace", "products/handmade-marketplace"], ["MicroJobs", "products/microjobs"], ["Modern Ticketing System", "products/ticketing-system"], ["Mosque Tracker", "products/mosque-tracker"]
  ] },
  { title: "Development", items: [
    ["Technology Stack", "development/technology-stack"], ["Development Methodology", "development/methodology"], ["Architecture Overview", "development/architecture"], ["Project Structure", "development/project-structure"], ["What's New in Prog-Net 3.0", "development/whats-new"]
  ] },
  { title: "The Road Ahead", items: [
    ["Future Vision", "road-ahead/future-vision"], ["Development Roadmap", "road-ahead/development-roadmap"], ["Planned Features", "road-ahead/planned-features"], ["Long-Term Goals", "road-ahead/long-term-goals"]
  ] },
  { title: "About", items: [["About Prog-Net", "about"]] }
];

const requiredProductSections = [
  ["Product overview", "Purpose and intended scope"],
  ["Problem statement", "The problem this product is meant to address"],
  ["Proposed solution", "The proposed approach and how it relates to the problem"],
  ["Target audience", "Who the product is intended to serve"],
  ["Core features", "Confirmed capabilities and their current status"],
  ["How it works", "The user and system flow"],
  ["User experience", "Interaction patterns, accessibility, and design decisions"],
  ["Technology stack", "Languages, frameworks, services, and tools"],
  ["Architecture overview", "Components, integrations, and data flow"],
  ["What's new", "Changes and additions confirmed for this product"],
  ["Future development", "Ideas under consideration, clearly separated from commitments"]
];

// ---- Content helpers (used by the page data below) ----
// A plain string = a paragraph. Objects = richer blocks (see blockMarkup).
const sec = (heading, ...blocks) => ({ heading, blocks });
const sub = (h3) => ({ h3 });
const sub4 = (h4) => ({ h4 });
const ul = (...items) => ({ ul: items });
const ol = (...items) => ({ ol: items });
const quote = (text) => ({ quote: text });
const callout = (text) => ({ callout: text });
const fig = (src, alt, caption, note) => ({ fig: { src, alt, caption, note } });
const SHAZEEL = "Shazeel Khan"; // spelling appears as "Shazil" in some notes; change here to update everywhere

const productCards = [
  ["Handmade Marketplace", "A dedicated digital marketplace designed to connect handmade creators with customers. It focuses on handmade jewelry, crochet accessories, paintings, crafts, and customized gifts.", "products/handmade-marketplace", "01", "Active"],
  ["MicroJobs", "A platform concept for short-term and flexible job opportunities, connecting students and individuals with small businesses looking for temporary assistance and task-based work.", "products/microjobs", "02", "On Hold"],
  ["Modern Ticketing System", "A centralized ticket management system designed to organize technical issues and support requests through structured tickets, priorities, assignments, and progress tracking.", "products/ticketing-system", "03", "Active"],
  ["Mosque Tracker", "A project concept focused on helping users discover and access mosque-related information through a centralized platform. Its further scope and functionality remain subject to future consideration.", "products/mosque-tracker", "04", "On Hold"]
];

const pages = {
  home: { title: "Prog-Net 3.0 documentation", group: "Home", summary: "A guide to Prog-Net's evolution, people, products, development, and future direction.", landing: true },
  "chronicle/beginning": {
    title: "The Beginning", group: "The Chronicle", summary: "The origin story, original idea, initial objectives, and early challenges.",
    intro: [
      "Prog-Net began as an academic software development project and gradually evolved into a journey spanning multiple generations. What started as an initial exploration of programming and software development became an opportunity to experiment with ideas, build practical applications, and develop technical skills through teamwork.",
      "This chapter takes a look at the foundations of Prog-Net, the objectives behind its creation, and the early experiences that shaped its direction."
    ],
    sections: [
      sec("The original idea", sub("An Experiment Before a Project"),
        "Prog-Net 1.0 did not begin as a conventional software project. It started as a learning-based experiment built around observation, creativity, and ambition.",
        "The initial approach was to observe other student teams: their ideas, teamwork, project scopes, execution, and how effectively they used their available time. The objective was to identify the potential behind those ideas and explore how they could be developed further through a different mindset and greater creative effort.",
        "Rather than treating existing ideas as limits, we treated them as starting points. We took inspiration from multiple teams, evaluated what could be improved, and approached those concepts with our own interpretation and implementation. In a way, it was like playing Monopoly: understanding the opportunities around us, making strategic decisions, and building something of our own from what we observed.",
        "What began as an experiment in learning and observation eventually developed into something much larger: Prog-Net 1.0."),
      sec("Initial objectives", sub("Beyond the Ordinary"),
        "Our initial objective was not simply to complete a few small applications. We wanted to challenge ourselves, explore different possibilities, and make the most of the time available to us.",
        "While several teams focused on developing individual applications over the two-month project period, we chose a different approach. Instead of limiting ourselves to a single idea or finishing early and stepping away from development, we decided to work consistently throughout the entire timeline.",
        "Our goals were to:",
        ul("Explore multiple software concepts and turn them into working applications.", "Learn through practical implementation rather than theory alone.", "Improve existing ideas through independent creativity and execution.", "Develop teamwork, problem-solving, and project-management skills.", "Make productive use of the entire development period."),
        "The ambition was simple: do more, learn more, and make the most of the opportunity."),
      sec("Early challenges", sub("Inspiration or Imitation?"),
        "Taking inspiration from other teams came with its own challenges. Since some of our ideas originated from observing projects around us, our work was sometimes labelled as copying. However, inspiration was only the starting point. We reinterpreted those concepts, implemented them independently, and invested considerably more effort into expanding their scope and execution.",
        "We chose not to let those opinions define our work. Instead, we focused on what we could build with the time and resources available to us.",
        "By the end of the two-month development period, our work had grown into a collection of 19 small applications, including games and utilities. What started as a learning experiment had become a substantial collection of practical software projects, ready to be presented at the exhibition.",
        quote("We may have taken inspiration from existing ideas, but we made sure the execution spoke for itself."))
    ]
  },
  "chronicle/prog-net-1": {
    title: "Prog-Net 1.0", group: "The Chronicle", summary: "The first generation: a C-based starting point and the lessons it left.",
    intro: "Prog-Net 1.0 was the first generation of the project: a C-based collection of 19 applications connected through a central lobby.",
    sections: [
      sec("First generation", sub("From an Experiment to Prog-Net"),
        "What initially started as a learning-based experiment gradually developed into a structured software project. As the collection of applications grew, we began looking beyond individual programs and considered how they could work together as part of a single system.",
        "This was the point where the project began taking its identity. We named it ProgNet, an abbreviation of Program Network.",
        "The name reflected the central idea behind our approach: rather than presenting 19 independent applications separately, we created a central lobby that connected them. When launched, the lobby asked users what they wanted to do and presented the available applications as options.",
        "Inspired by the strategic thinking behind Monopoly, we wanted to make use of multiple opportunities rather than focus on a single outcome. The lobby became the connecting point for everything we had developed, turning a collection of small applications into one unified project.",
        "And that was how Prog-Net came into existence."),
      sec("C and the original features", sub("The Applications Behind the Network"),
        "Prog-Net 1.0 brought together a collection of 19 applications, divided into two functional categories: main applications and supportive applications.",
        "The main applications were accessible through the central Prog-Net lobby, which provided users with a menu of available programs. These included calculators, mathematical utilities, programming demonstrations, and interactive games.",
        "Alongside them were supportive applications that operated behind the scenes. Although they were not listed in the lobby, they played an important role in supporting the functionality of the main applications.",
        "Together, these components formed the foundation of Program Network: a central interface connecting multiple applications while relying on supporting components to make the system work.",
        fig("images/prognet-1-lobby.png", "Prog-Net 1.0 lobby screenshot", "The original Prog-Net 1.0 lobby running in Turbo C++.",
          "The screenshot shown above captures an earlier development version of the Prog-Net 1.0 lobby. The interface was modified before the project was finalized, and the final version is not currently available for archival reference. The screenshot is therefore presented as a historical development record rather than a representation of the final interface.")),
      sec("Team experience", sub("Two Months of Consistent Effort"),
        "The development of Prog-Net 1.0 required more than programming skills. It demanded consistency, collaboration, creative thinking, and a willingness to keep working throughout the available timeline.",
        "For two months, the team dedicated its time to developing and expanding the project. Rather than treating the deadline as a reason to slow down after completing a few applications, we continued exploring ideas, implementing features, and improving our collection of programs.",
        "The experience provided an opportunity to learn beyond the classroom. It tested our ability to work together, manage development tasks, solve problems, and turn individual contributions into a unified project.",
        "The journey eventually led to the final exhibition, where Prog-Net was presented as a collection of 19 applications connected through a central concept."),
      sec("Lessons learned", sub("More Than Just Code"),
        "Prog-Net 1.0 taught us that software development is not limited to writing code. It involves observing problems, exploring ideas, making decisions, working consistently, and finding ways to bring different components together.",
        "One of the biggest lessons was the value of execution. An idea may look simple on paper, but turning it into a working application requires time, effort, experimentation, and problem-solving.",
        "The project also demonstrated the importance of thinking beyond individual applications. By connecting multiple programs through a central lobby, we learned how separate components could become part of a larger system.",
        "Most importantly, Prog-Net showed us what could be achieved through consistent effort and creative thinking. It gave us practical experience, a stronger understanding of software development, and the confidence to take on more ambitious projects.",
        "These experiences became the foundation for the next generation: Prog-Net 2.0.",
        quote("The first generation gave us the experience. The next would give us a bigger challenge."))
    ]
  },
  "chronicle/prog-net-2": {
    title: "Prog-Net 2.0", group: "The Chronicle", summary: "The second generation introduced Java Swing, games, utilities, and a lobby system.",
    intro: [
      "Prog-Net 2.0 marked the next stage in the project's evolution, bringing a shift from C-based applications to Java Swing development.",
      "Building on the experience gained from the first generation, this version introduced a more structured application environment, bringing games and utilities together through a centralized lobby.",
      "The second generation was an opportunity to explore object-oriented programming, graphical user interfaces, and a more organized approach to software development. It also laid the groundwork for more ambitious ideas that would eventually influence Prog-Net 3.0."
    ],
    sections: [
      sec("A new generation",
        "With Prog-Net 2.0, the project entered a new development phase. The decision to move to Java introduced a different programming environment and an opportunity to work with object-oriented concepts and graphical application development.",
        "The central idea of connecting multiple applications through a lobby remained, but the implementation evolved. Using Java Swing, we developed a launcher-style application that brought different games and utilities into one interface.",
        "The project also introduced a more organized navigation experience, allowing users to move between different modules without treating each application as an entirely separate experience.",
        "Prog-Net 2.0 was not simply an attempt to recreate the first generation. It was an effort to take what we had learned and apply it through a new language, a new interface, and a more structured approach.",
        fig("images/prognet-2-lobby.png", "Prog-Net 2.0 lobby screenshot", "Prog-Net 2.0 — The transition to a Java Swing-based application environment.")),
      sec("Games, utilities, and lobby",
        "Prog-Net 2.0 expanded the original concept of a centralized application hub. Instead of focusing on a collection of smaller C-based programs, this generation brought together multiple games and utilities developed as Java applications.",
        "The lobby served as the main entry point, allowing users to select and launch different modules through a unified interface. Each module had its own functionality while remaining part of the larger Prog-Net environment.",
        sub("One Lobby, Multiple Experiences"),
        "The lobby acted as the central navigation system of Prog-Net 2.0. It provided users with a visual collection of available modules and allowed them to access different applications without launching each one separately.",
        "The application used Java Swing for its graphical interface and CardLayout for navigation. This allowed different screens and modules to be organized within a single application window, creating a more consistent user experience.",
        fig("images/prognet-2-lobby.png", "Prog-Net 2.0 lobby interface", "The Prog-Net 2.0 lobby interface."),
        sub("The Modules"),
        sub4("Games"),
        { table: { head: ["Module", "Description"], rows: [
          ["Minecraft 2D", "A two-dimensional Minecraft-inspired game with player movement, world exploration, and map editing."],
          ["Tic Tac Toe", "A classic two-player strategy game."],
          ["Guess the Number", "A number-guessing game built around logical deduction."],
          ["Rock Paper Scissors", "A digital implementation of the classic hand game."],
          ["Snake", "A classic arcade-style snake game."],
          ["Mario", "A platform-style game inspired by classic Mario gameplay."],
          ["Pacman", "A maze-based arcade game."],
          ["Flappy Bird", "An obstacle-avoidance game based on timed player input."]
        ] } },
        sub4("Utilities"),
        { table: { head: ["Module", "Description"], rows: [
          ["Morse Converter", "A utility for converting text into Morse code and vice versa."],
          ["Database Manager", "A utility for managing database-related operations."]
        ], caption: "Descriptions are concise summaries of the documented module concepts, not detailed technical specifications." } },
        { feature: { kicker: "FEATURED MODULE", title: "A World of Its Own", paras: [
          "Among the modules, Minecraft 2D represented a more extensive development effort. Rather than being limited to a basic game implementation, it included world interaction and map-editing capabilities.",
          "The module was designed to launch directly through the Prog-Net lobby, keeping it integrated into the overall application environment.",
          "Its functionality included player movement, keyboard controls, camera handling, map loading, asset loading, and an integrated map editor with tools for editing and managing the game world."
        ], fig: { src: "images/prognet-2-minecraft.png", alt: "Minecraft 2D gameplay or map editor screenshot", caption: "Minecraft 2D — gameplay and map editor." } } }),
      sec("Major improvements",
        sub("From Individual Programs to a Unified Application"),
        "Prog-Net 2.0 brought several important changes to the original concept. While the first generation was built around smaller C-based applications connected through a lobby, the second generation introduced a more structured environment using Java Swing.",
        "The transition from C to Java gave us an opportunity to explore object-oriented programming and graphical application development. Instead of treating the modules as separate programs, we brought them together within a single application environment.",
        { table: { head: ["Area", "Prog-Net 1.0", "Prog-Net 2.0"], rows: [
          ["Language", "C", "Java"],
          ["Interface", "Earlier lobby interface", "Java Swing GUI"],
          ["Structure", "Collection of smaller applications", "Unified application environment"],
          ["Navigation", "Central program-selection lobby", "CardLayout-based screen navigation"],
          ["Scope", "19 applications", "Games, utilities, and larger modules"]
        ], caption: "Prog-Net 1.0 vs. Prog-Net 2.0. The lobby concept was carried forward from the first generation." } },
        sub("A More Organized Interface"),
        "The Java Swing interface provided a graphical environment for navigating between different modules. The lobby became more than a simple selection screen; it served as the central point from which users could access the different games and utilities.",
        "Using CardLayout, we organized the application into multiple screens and allowed users to move between them without opening a separate window for every section.",
        sub("Expanded Project Scope"),
        "Prog-Net 2.0 also expanded the range of experiences available through the project. Alongside familiar games and utilities, it introduced larger modules such as Minecraft 2D, which included player movement, world interaction, and an integrated map editor.",
        "These changes represented a shift in ambition: from creating a collection of smaller programs to building a more connected and organized application.",
        sub("Building on the First Generation"),
        "The second generation did not abandon the original idea. It carried forward the concept of a central lobby while improving how the modules were organized, presented, and accessed.",
        "Prog-Net 1.0 gave us our starting point. Prog-Net 2.0 allowed us to take that foundation further."),
      sec("Lessons learned",
        sub("More Than a Change of Language"),
        "Prog-Net 2.0 taught us that moving to a new programming language is not simply about learning different syntax. It also means adapting to new ways of organizing code, designing interfaces, and approaching problems.",
        "Working with Java Swing introduced us to graphical application development and gave us practical experience with object-oriented programming. We also learned how a centralized application could bring multiple independent modules together in a more organized way.",
        { cards: [
          { title: "Java and Object-Oriented Programming" },
          { title: "Graphical User Interface Development" },
          { title: "CardLayout and Module Integration" },
          { title: "Larger Feature Development" }
        ], caption: "Prog-Net 2.0 learning highlights." },
        sub("Understanding Structure and Integration"),
        "As the project grew, keeping its different modules connected became an important part of development. The lobby and CardLayout navigation helped us understand how separate screens and features could work within one application.",
        "Developing Minecraft 2D also gave us experience with a larger module involving player movement, camera handling, world loading, assets, and map editing. It showed us that more ambitious features require careful planning and coordination between different parts of an application.",
        sub("Preparing for the Next Step"),
        "The second generation built on the experience of the first while introducing new technical challenges. It strengthened our understanding of application structure, interface design, modular development, and problem-solving.",
        "These lessons became part of the foundation for Prog-Net 3.0, where the project would move beyond a single launcher and explore a new set of independent software products.",
        quote("Prog-Net 2.0 was not the end of the journey. It was preparation for what came next."))
    ]
  },
  "chronicle/prog-net-3": {
    title: "Prog-Net 3.0", group: "The Chronicle", summary: "The current generation's four product concepts, team, and development approach.",
    intro: [
      "Prog-Net 3.0 marks a new chapter in the Prog-Net journey. After exploring C-based applications in the first generation and building a Java Swing application in the second, the third generation shifted its focus towards developing independent software products.",
      "Rather than bringing games and utilities together in a single application, Prog-Net 3.0 explored ideas designed to address different needs and audiences. Four product concepts were introduced: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker.",
      "As the project developed, priorities changed. Handmade Marketplace and Modern Ticketing System remained active, while MicroJobs and Mosque Tracker were placed on hold.",
      "This generation represents a broader approach to software development: identifying problems, exploring practical solutions, dividing responsibilities, and turning ideas into working products."
    ],
    sections: [
      sec("A new direction",
        { steps: { items: [
          ["1.0", "Prog-Net 1.0", "C-based applications"],
          ["2.0", "Prog-Net 2.0", "Java Swing application"],
          ["3.0", "Prog-Net 3.0", "Independent software products"]
        ], layout: "is-row" }, caption: "The transition across the three generations." },
        { cards: [
          { title: "Handmade Marketplace", status: "Active" },
          { title: "MicroJobs", status: "On Hold" },
          { title: "Modern Ticketing System", status: "Active" },
          { title: "Mosque Tracker", status: "On Hold" }
        ], caption: "Prog-Net 3.0 product concepts and their current statuses." }),
      sec("The four product concepts",
        "Prog-Net 3.0 introduced four different product ideas, each exploring a separate area of software development. Although they share the same project journey, each concept has its own purpose, intended audience, and potential features.",
        sub("01. Handmade Marketplace"), { status: "Active" },
        "A dedicated marketplace concept designed to connect handmade creators with customers. It focuses on giving independent creators a place to showcase and sell their work, including handmade jewelry, crochet accessories, paintings, crafts, and customized gifts.",
        sub("02. MicroJobs"), { status: "On Hold" },
        "A platform concept focused on short-term and flexible job opportunities. It aims to connect students and individuals looking for small tasks with businesses or people who need temporary assistance.",
        sub("03. Modern Ticketing System"), { status: "Active" },
        "A centralized ticket management system designed to organize support requests and technical issues. Its concept revolves around structured tickets, priority levels, assignments, status tracking, and progress management.",
        sub("04. Mosque Tracker"), { status: "On Hold" },
        "A platform concept intended to make mosque-related information easier to discover and access. Its detailed scope and features remain subject to future consideration.",
        sub("Different Ideas, One Journey"),
        "Each product represents a different direction explored during Prog-Net 3.0. Some have moved forward into active development, while others remain on hold. Together, they document the range of ideas considered during this generation.",
        { cards: [
          { title: "Handmade Marketplace", status: "Active", text: "Handmade products and independent creators.", img: "images/product-handmade-marketplace.jpg", link: "products/handmade-marketplace" },
          { title: "MicroJobs", status: "On Hold", text: "Flexible tasks and short-term opportunities.", img: "images/product-microjobs.jpg", link: "products/microjobs" },
          { title: "Modern Ticketing System", status: "Active", text: "Organized support requests and issue tracking.", img: "images/product-ticketing-system.jpg", link: "products/ticketing-system" },
          { title: "Mosque Tracker", status: "On Hold", text: "Discovering and accessing mosque information.", img: "images/product-mosque-tracker.jpg", link: "products/mosque-tracker" }
        ] }),
      sec("Team & responsibilities",
        sub("The Team Behind Prog-Net 3.0"),
        "Prog-Net 3.0 brought together five student developers, each contributing different technical skills and experience. The team was organized around the project's product areas, with members taking responsibility for different parts of development.",
        { card: { title: "A Team of Full-Stack Developers", paras: [
          "Prog-Net 3.0 follows a collaborative learning approach in which every team member is encouraged to understand and work across the full stack of software development.",
          "Although initial responsibilities are divided to organize the workload, frontend and backend assignments are not intended to limit anyone to a single area. Every member is working towards developing the skills needed to understand the complete process of building software.",
          "The objective is to grow as well-rounded developers who can contribute to different parts of a product, collaborate effectively, and take on new technical challenges."
        ] } },
        { hierarchy: { lead: ["Usman Shaikh", "Team Lead · Full Stack Developer"], members: [
          ["Ammar", "Backend Developer"], ["Faheem Khan", "Frontend Developer"], [SHAZEEL, "Backend Developer"], ["Mohib Imran Rajput", "Frontend Developer"]
        ] }, caption: "The five-member Prog-Net 3.0 team." },
        sub("Project Responsibilities"),
        "The team was organized into the following working groups:",
        { cards: [
          { title: "Modern Ticketing System", status: "Active", list: ["Usman Shaikh — Full Stack Development", SHAZEEL + " — Backend", "Mohib Imran Rajput — Frontend"] },
          { title: "Handmade Marketplace", status: "Active", list: ["Ammar — Backend", "Faheem Khan — Frontend", "Mustafa Kashif — Backend (collaborator)"] },
          { title: "MicroJobs & Mosque Tracker", status: "On Hold", text: "Both were introduced as product concepts, but neither was assigned an active development team." }
        ] }),
      sec("Development approach",
        sub("From Ideas to Independent Products"),
        "Unlike the previous generations, Prog-Net 3.0 focuses on developing separate software products rather than combining multiple applications into one launcher.",
        "Each product has its own purpose, requirements, and development direction. This approach allows the team to focus on the specific problems each product is intended to address.",
        sub("Shared Responsibilities, Broader Skills"),
        "The team divides initial responsibilities to keep development organized, but learning is not restricted to those assignments.",
        "Every member is working towards becoming a full-stack developer, gaining an understanding of both frontend and backend development, as well as the different stages involved in building a complete application.",
        "This approach encourages members to learn beyond their assigned tasks, share knowledge, support one another, and become capable of contributing across different areas of development. The goal is not just to divide the work, but to develop the skills to understand and build the whole product.",
        sub("A Practical Development Process"),
        "The development approach centers on understanding the product idea before building its features. This involves identifying the intended users, defining requirements, planning the interface, organizing functionality, and developing the application in manageable stages.",
        "The goal is not simply to complete a project, but to understand the process behind building software—from an initial idea to a usable product.",
        { steps: { items: [
          ["1", "Idea & Problem Identification"], ["2", "Requirements & Planning"], ["3", "Interface & Feature Design"], ["4", "Development"], ["5", "Testing & Refinement"]
        ] }, caption: "Suggested general workflow. This is an explanatory diagram, not a claim that every stage has already been completed." },
        sub("Adapting to Changing Priorities"),
        "Development plans can change as a project progresses. During Prog-Net 3.0, Handmade Marketplace and Modern Ticketing System remained active, while MicroJobs and Mosque Tracker were placed on hold.",
        "Documenting these changes is part of the development journey. It keeps the project's direction clear and ensures that its documentation reflects its actual priorities."),
      sec("Development roadmap",
        sub("Building Step by Step"),
        "Prog-Net 3.0 is a learning-driven development journey. Rather than rushing towards finished products, the focus is on understanding the requirements, learning the necessary technologies, and building each product through a structured process.",
        "Each active project follows its own development path, while the team continues to improve its collective understanding of full-stack development.",
        sub("Our Development Stages"),
        { steps: { items: [
          ["01", "Research & Understanding", "Understand the problem each product aims to solve, identify its intended users, and explore possible solutions."],
          ["02", "Planning & Requirements", "Define the product's scope, identify essential features, organize requirements, and establish a clear development direction."],
          ["03", "Design & Prototyping", "Plan the user experience, prepare interface layouts, and establish how the product's different components should work together."],
          ["04", "Development", "Build the frontend and backend components, connect the necessary functionality, and gradually turn the planned features into a working application."],
          ["05", "Testing & Refinement", "Identify issues, test functionality, improve usability, and refine the application based on the results."],
          ["06", "Finalization & Documentation", "Prepare the completed product, organize its documentation, and present its features, purpose, and development journey."]
        ], layout: "is-grid" }, caption: "This is a proposed development workflow, not a representation of completed milestones." },
        sub("Current Project Priorities"),
        "Handmade Marketplace and Modern Ticketing System are the two active development priorities. MicroJobs and Mosque Tracker remain on hold and may be reconsidered in the future.",
        { cards: [
          { title: "Handmade Marketplace", status: "Active" }, { title: "Modern Ticketing System", status: "Active" },
          { title: "MicroJobs", status: "On Hold" }, { title: "Mosque Tracker", status: "On Hold" }
        ] },
        "The roadmap is intended to provide direction, not fixed deadlines. As the team learns and development progresses, priorities and implementation plans may evolve."),
      sec("A different development approach",
        sub("Learning Beyond Assigned Roles"),
        "Prog-Net 3.0 takes a different approach to teamwork and software development. Instead of limiting members to fixed frontend or backend roles, the team aims to develop full-stack skills across every member.",
        "Initial responsibilities help organize the workload, but they do not define the limits of what someone can learn or contribute. Every member is encouraged to explore different areas of development, understand how the components of an application work together, and gain experience beyond their initial assignments.",
        sub("Collaboration Over Specialization"),
        "The idea is simple: everyone should understand more than just their assigned part of a project. By sharing knowledge, exploring unfamiliar technologies, and learning from one another, team members can develop a broader understanding of software development. This also encourages collaboration when solving problems that involve multiple parts of an application.",
        { mindset: { title: "One Team. Full-Stack Mindset.", people: ["Usman Shaikh", "Ammar", "Faheem Khan", SHAZEEL, "Mohib Imran Rajput"],
          areas: ["Frontend Development", "Backend Development", "Database Management", "Integration", "Testing"] }, caption: "These are shared learning areas, not five permanently assigned specializations." },
        sub("Growing Together as Developers"),
        "Prog-Net 3.0 is not only about building products. It is also about building the skills and confidence required to develop them.",
        "Every challenge is an opportunity to learn something new, every contribution adds to the team's experience, and every project provides a chance to understand the complete development process.",
        "Our goal is to grow together—not just as a team that builds software, but as developers capable of understanding and building complete solutions.")
    ]
  },
  "chronicle/milestones": {
    title: "Evolution & Milestones", group: "The Chronicle", summary: "A verified timeline of important events, decisions, and changes across generations.",
    intro: "This timeline is intentionally evidence-led. No dates have been supplied, so milestones stay undated until the project history can be verified.",
    sections: [
      ["Project timeline", "Dates and milestone descriptions are placeholders until verified.", "Add dates, source links, and a concise description for each milestone.", "diagram"],
      ["Major achievements", "Achievements should reflect documented outcomes rather than estimates or unverified claims.", "Record the evidence and people involved for each entry."],
      ["Important decisions", "Significant technical and product decisions can be added here with their context and consequences.", "Link decisions to source discussions or project records."],
      ["Across the generations", "The known generation markers are C for Prog-Net 1.0; Java Swing, games, utilities, and a lobby system for Prog-Net 2.0; and three product concepts for Prog-Net 3.0."]
    ]
  },
  "people/founding-team": {
    title: "The Founding Team", group: "The People", summary: "The original Prog-Net 1.0 team and how the team evolved across generations.",
    intro: "The people who originally established Prog-Net, and how the team evolved across its first generations.",
    sections: [sec("Founding contributors",
      "Prog-Net began with a team of five students who came together to explore software development, experiment with ideas, and build something of their own.",
      "What started as a learning-based experiment gradually developed into Prog-Net 1.0, establishing the foundation for the generations that followed.",
      "The original Prog-Net 1.0 team consisted of:",
      ol("Usman Shaikh", "Rana Qasim Shafiq", "Mustafa Kashif", "Faheem Khan", SHAZEEL),
      "As the project progressed, its team composition changed. Prog-Net 2.0 continued with three members, while Prog-Net 3.0 introduced a new five-member official team.",
      "Although not everyone continued into later generations, their involvement remains part of Prog-Net's history.")]
  },
  "people/team-structure": {
    title: "Team Structure", group: "The People", summary: "How the Prog-Net 3.0 team is organized and how responsibilities are assigned.",
    intro: "How Prog-Net 3.0 is organized, how responsibilities are assigned, and how the team works across its projects.",
    sections: [sec("Organization",
      "Prog-Net 3.0 is organized around independent software projects, with team members initially assigned to different development responsibilities.",
      "Unlike previous generations, which focused on building a single application containing multiple games and utilities, Prog-Net 3.0 follows a project-based structure. Each product has its own development direction, requirements, and responsibilities.",
      { branches: { root: "Prog-Net 3.0", items: [["Modern Ticketing System", "Active"], ["Handmade Marketplace", "Active"], ["MicroJobs", "On Hold"]] }, caption: "Product workstreams and their current statuses." },
      sub("Project Teams"),
      "The initial allocation of responsibilities is as follows:",
      sub4("Modern Ticketing System"),
      ul("Usman Shaikh — Full Stack Development", SHAZEEL + " — Initially assigned to Backend Development", "Mohib Imran Rajput — Initially assigned to Frontend Development"),
      sub4("Handmade Marketplace"),
      ul("Ammar — Initially assigned to Backend Development", "Faheem Khan — Initially assigned to Frontend Development", "Mustafa Kashif — Collaborator, Backend"),
      sub4("MicroJobs and Mosque Tracker"),
      "No active development team has been assigned to either concept. MicroJobs and Mosque Tracker are currently on hold, while Handmade Marketplace and Modern Ticketing System remain active.",
      sub("A Shared Development Approach"),
      "These assignments establish an initial division of work, not permanent specializations. The team's broader objective is for every member to understand and learn the complete software development process.",
      { mindset: { title: "Shared learning areas", people: [], areas: ["Frontend", "Backend", "Databases", "Integration", "Testing"] } },
      "Members are encouraged to explore frontend development, backend development, databases, integration, testing, and other areas involved in building complete software products.",
      "The structure provides a starting point for organizing work while allowing members to learn, collaborate, and contribute beyond their initial responsibilities.")]
  },
  "people/collaborations": {
    title: "Alliances & Collaborations", group: "The People", summary: "Individual allies and the allied team connected to Prog-Net.",
    intro: [
      "Prog-Net's connections extend beyond its own development team. Over time, friendships, shared experiences, and independent project groups have created a network built around mutual support and cooperation.",
      "These relationships are not limited to formal project partnerships. Members and allies exchange ideas, share knowledge, offer assistance, and support one another while pursuing their respective projects."
    ],
    sections: [sec("Collaboration history",
      sub("Individual Allies"),
      "Prog-Net maintains connections with individuals working in different project groups. These relationships have developed through friendships and academic collaboration.",
      { chips: ["Rana Qasim Shafiq", "Rayyan Siddiqui", "Uzair", "Zahid Khan", "Huzaifa", "Abdullah Zaman Khan", "Abdullah Shaikh", "Ahmed Ali"] },
      sub("Team Collaboration"),
      "Intero Hub is Prog-Net's confirmed allied team. Both groups maintain a collaborative relationship while working together on their respective initiatives.",
      "Empire Hub, led by Rayyan Siddiqui, is an associated project group and is mentioned here for context only.",
      { hub: { center: "Prog-Net", groups: [{ label: "Individual allies", items: ["Rana Qasim Shafiq", "Rayyan Siddiqui", "Uzair", "Zahid Khan", "Huzaifa", "Abdullah Zaman Khan", "Abdullah Shaikh", "Ahmed Ali"] }, { label: "Team ally", items: ["Intero Hub"] }] }, caption: "Allies are connected to Prog-Net; they are not Prog-Net members." },
      "These connections reflect an important part of Prog-Net's environment: independent teams can follow their own directions while remaining connected through cooperation and shared support.")]
  },
  "people/acknowledgements": {
    title: "Acknowledgements", group: "The People", summary: "Recognition for contributors and supporters of Prog-Net.",
    intro: "Acknowledgements should be accurate, specific, and published with permission where appropriate.",
    sections: [sec("Contributors and supporters",
      "Prog-Net has grown through the efforts, contributions, and support of people both within and beyond its core team.",
      "We would like to acknowledge everyone who has contributed their time, shared knowledge, offered guidance, or supported the project throughout its development.",
      "Special recognition goes to our team members, collaborators, and supporters whose involvement has helped Prog-Net continue across its different generations.",
      "Their contributions remain an important part of the project's journey.")]
  },
  products: {
    title: "Our Products", group: "Our Products", summary: "An overview of the four product concepts introduced in Prog-Net 3.0 and their current status.",
    intro: [
      "Prog-Net 3.0 marks a shift towards developing independent software products, each addressing a different purpose and set of user needs.",
      "The project introduced four product concepts, with two currently receiving active development attention and the remaining two kept on hold for possible future consideration."
    ],
    cards: productCards,
    sections: [sec("Product documentation status",
      sub("Current Product Status"),
      ul("**Handmade Marketplace** — Active", "**Modern Ticketing System** — Active", "**MicroJobs** — On Hold", "**Mosque Tracker** — On Hold"),
      "Each product has its own direction and intended scope. The following documentation introduces these concepts and records their development status without treating proposed ideas as completed features.")]
  },
  "people/members": {
    title: "Members & Responsibilities", group: "The People", summary: "Verified member profiles, skills, responsibilities, and contributions.",
    intro: "This directory is a template, not a roster. Confirm names, preferred descriptions, roles, and contributions before publishing.",
    sections: [["Member directory", "No names or roles have been supplied for publication.", "For each confirmed member, add their name, role or responsibility, relevant skills, and contribution. Clearly label former or current participation where known."]]
  },
  "development/technology-stack": {
    title: "Technology Stack", group: "Development", summary: "Languages, frameworks, services, and tools used by Prog-Net 3.0.",
    intro: "The technology stack for Prog-Net 3.0 has not been supplied. Previous-generation technologies are documented separately in the Chronicle.",
    sections: [["Languages and frameworks", "No Prog-Net 3.0 language or framework has been confirmed.", "List confirmed technologies, versions where relevant, and the product or service where each is used."], ["Tools and services", "Build, design, hosting, storage, and collaboration tools are unknown.", "Add tools only after checking the project repositories and team-approved records."]]
  },
  "development/methodology": {
    title: "Development Methodology", group: "Development", summary: "How the team plans, develops, reviews, tests, and documents its work.",
    intro: "This page explains how the team plans, develops, reviews, tests, and documents its work. Practices are recorded here only once the team has confirmed them, so an unconfirmed process is never presented as established policy.",
    sections: [
      sec("Workflow",
        "This section will describe the team's actual development process, from planning through implementation and release. It will cover:",
        ul("How tasks are planned and assigned.", "How members work on their assigned tasks.", "How code and progress are reviewed.", "How testing and documentation are handled."),
        { placeholder: "diagram" },
        callout("The general development stages described under Prog-Net 3.0 are a general approach, not a confirmed team policy. A confirmed workflow diagram, from planning to release, will be added here.")),
      sec("Technical decisions",
        "This section will explain how important technical decisions are made and recorded, including:",
        ul("Why a particular technology or approach was selected.", "Alternatives that were considered.", "The reasoning behind the final decision.", "Any impact the decision has on the project."),
        callout("No technical decisions have been recorded yet. Decisions are added only after they are confirmed."))
    ]
  },
  "development/architecture": {
    title: "Architecture Overview", group: "Development", summary: "How Prog-Net 3.0's products and components fit together at a conceptual level.",
    intro: "This page explains the overall technical design of Prog-Net 3.0 and how its products and components fit together. Until technical designs are confirmed, it presents a conceptual overview rather than a finalized architecture.",
    sections: [
      sec("System context",
        "Prog-Net 3.0 is organized as independent software products rather than a single launcher. At a high level, the four product concepts are:",
        { branches: { root: "Prog-Net 3.0", items: [["Handmade Marketplace", "Active"], ["MicroJobs", "On Hold"], ["Modern Ticketing System", "Active"], ["Mosque Tracker", "On Hold"]] }, caption: "A conceptual overview, not a finalized architecture." },
        callout("Users, external systems, integrations, and connections between products will be added only where they are confirmed.")),
      sec("Product architecture",
        "The four product concepts are represented below. Their technical components and connections have not yet been decided.",
        ul("**Handmade Marketplace** — Active. Architecture to be confirmed.", "**MicroJobs** — On Hold. Architecture to be confirmed.", "**Modern Ticketing System** — Active. Architecture to be confirmed.", "**Mosque Tracker** — On Hold. Architecture to be confirmed."),
        { placeholder: "diagram" },
        callout("Architecture diagrams will be added once each product's technical design is confirmed."))
    ]
  },
  "development/project-structure": {
    title: "Project Structure", group: "Development", summary: "How the Prog-Net 3.0 repositories and application boundaries are organized.",
    intro: "This page shows how the Prog-Net 3.0 project files and repositories are organized. The structure is added from the actual repositories and kept up to date as the project develops.",
    sections: [
      sec("Repository layout",
        "This section will provide a directory-tree view of the actual project repositories, including:",
        ul("The main folders and files.", "A brief explanation of what each important directory contains."),
        callout("No directory tree is published yet. Add the real structure, or a screenshot of it, rather than a mock folder layout.")),
      sec("Application boundaries",
        "This section will explain how the different parts of the applications are separated, including:",
        ul("Major modules or components.", "Which parts belong to each product.", "How components connect, only where those connections are confirmed."))
    ]
  },
  "development/whats-new": {
    title: "What's New in Prog-Net 3.0", group: "Development", summary: "Confirmed changes in product direction compared with previous generations.",
    intro: "This page separates the confirmed change in product direction from technical improvements that still need evidence.",
    sections: [
      sec("Confirmed direction changes",
        "Prog-Net 3.0 introduces four independent product concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. Handmade Marketplace and Modern Ticketing System are active, while MicroJobs and Mosque Tracker are on hold.",
        "Unlike the earlier generations, which brought games and utilities together in a single launcher, Prog-Net 3.0 focuses on separate software products.",
        callout("This describes the stated direction, not a claim that the products are complete or launched.")),
      sec("Technical improvements",
        "No specific implementation improvements have been confirmed.",
        "Add a version-to-version comparison only when supported by implementation or release evidence.")
    ]
  },
  "road-ahead/future-vision": {
    title: "Future Vision", group: "The Road Ahead", summary: "The intended future direction, separated from committed delivery.",
    intro: "This page describes what Prog-Net aims to become and the direction the team wants to take. The themes below are suggestions, not an approved vision, until the team agrees on them.",
    sections: [
      sec("Direction",
        "The team's long-term vision for Prog-Net can address:",
        ul("What the team hopes to achieve beyond the current projects.", "How Prog-Net could evolve in future generations.", "What kind of impact the team wants its work to have."),
        { steps: { items: [["1.0", "Prog-Net 1.0", "C"], ["2.0", "Prog-Net 2.0", "Java Swing"], ["3.0", "Prog-Net 3.0", "Independent software products"], ["?", "Future generations", "Direction to be agreed by the team"]], layout: "is-row" }, caption: "Prog-Net's evolution and a possible future direction. Future stages are conceptual, not confirmed plans." }),
      sec("Principles",
        "Principles that could guide future development (suggested themes, not official principles until the team agrees on them):",
        ul("Continuous learning and improvement.", "Collaboration and knowledge sharing.", "Building practical, meaningful software.", "Encouraging every member to understand the full development process."))
    ]
  },
  "road-ahead/development-roadmap": {
    title: "Development Roadmap", group: "The Road Ahead", summary: "Current and upcoming milestones, separated from completed and verified work.",
    intro: "This page presents the development progress of Prog-Net 3.0, distinguishing completed work from upcoming milestones and ideas. No delivery dates or committed milestones have been confirmed yet.",
    sections: [
      sec("Roadmap status",
        "Each milestone will show its name, current status, the responsible member or team, and an expected date only if it has been officially decided.",
        { chips: ["Completed", "In Progress", "Approved", "Under Review", "Idea"], caption: "Status labels used on this roadmap." },
        { table: { head: ["Milestone", "Status", "Responsible", "Expected date"], rows: [["No confirmed milestones yet", "—", "—", "—"]] } },
        callout("Do not publish invented deadlines. Status indicators and dates are added only when confirmed.")),
      sec("Completed work",
        "This section documents work that has actually been completed and verified, such as completed development tasks, finished project components, major integrations, and verified releases or milestones.",
        callout("Nothing is listed yet. Move work here only after its completion has been verified."))
    ]
  },
  "road-ahead/planned-features": {
    title: "Planned Features", group: "The Road Ahead", summary: "Proposed and approved product capabilities with explicit status labels.",
    intro: "This page documents features being considered or planned for Prog-Net 3.0's products. Ideas are kept separate from approved development work.",
    sections: [
      sec("Proposed capabilities",
        "Each proposed feature will identify:",
        ul("Which product the feature belongs to.", "What the feature is intended to do.", "Its current status.", "Any relevant team decision."),
        callout("No feature proposals have been recorded yet. Proposed features are never displayed as confirmed functionality.")),
      sec("Status definitions",
        "Consistent labels show how far each feature has progressed:",
        { table: { head: ["Status", "Meaning"], rows: [
          ["Idea", "A possible feature, not committed"], ["Under Review", "Being evaluated"], ["Approved", "Accepted for future development"], ["In Progress", "Development has started"], ["Completed", "Verified as delivered"]
        ] } })
    ]
  },
  "road-ahead/long-term-goals": {
    title: "Long-Term Goals", group: "The Road Ahead", summary: "Long-term ambitions and priorities once formally agreed by the team.",
    intro: "This page presents the long-term ambitions and priorities of Prog-Net once they have been agreed by the team.",
    sections: [sec("Goals and priorities",
      "Each confirmed goal will explain what the team wants to achieve, why it matters, what outcome is expected, and how progress will be reviewed.",
      "Themes that may be discussed (suggestions, not confirmed commitments):",
      ul("Continuing Prog-Net into future generations.", "Improving software development skills.", "Building complete, practical software products.", "Maintaining collaboration and knowledge sharing."))]
  },
  about: {
    title: "About Prog-Net", group: "About", summary: "What Prog-Net is, why it exists, and the journey behind it.",
    intro: "Prog-Net is documented here as a project evolving across three generations. This site explains its history and current direction without treating unknown details as fact.",
    sections: [
      sec("About this documentation",
        "This website records the Prog-Net journey. It documents:",
        ul("Prog-Net's history across three generations.", "Its team and collaborations.", "Its products and development journey.", "Its future direction."),
        callout("Content marked as awaiting confirmation should be completed by project contributors before it is treated as official fact.")),
      sec("About The Foundry",
        "The name The Prog-Net Foundry has been discussed as a possible identity, but it has not been confirmed as the official name.",
        "An organization description will be added only once the team approves the identity."),
      sec("Credits and contact",
        "This section will include documentation contributors, project credits, official contact information, and relevant GitHub or project links.",
        callout("Only verified names and working links are added. None have been supplied yet."))
    ]
  }
};

const productDefs = [
  { slug: "handmade-marketplace", title: "Handmade Marketplace", status: "Active",
    intro: "Handmade Marketplace is one of the four product concepts introduced in Prog-Net 3.0. It is currently active, and its detailed functionality is still evolving.",
    overview: [
      "The Handmade Marketplace is a product concept focused on connecting independent handmade creators with customers looking for unique, handcrafted products.",
      "The platform aims to provide a dedicated space for handmade items, including jewelry, crochet accessories, paintings, crafts, and customized gifts.",
      "Its central idea is to make handmade products easier to discover while providing creators with an opportunity to showcase their work to a wider audience.",
      "The project is currently under active development, with its detailed functionality and implementation evolving as the team progresses."
    ] },
  { slug: "microjobs", title: "MicroJobs", status: "On Hold",
    intro: "MicroJobs is one of the four product concepts introduced in Prog-Net 3.0. It is currently on hold, so this page documents the concept only.",
    overview: [
      "MicroJobs is a platform concept designed to connect individuals seeking short-term work with people and small businesses looking for temporary assistance.",
      "The idea focuses on making flexible work opportunities more accessible, particularly for students and individuals interested in taking on smaller tasks alongside their existing commitments.",
      "Unlike conventional professional networking platforms, MicroJobs is intended to focus on practical, short-term opportunities rather than long-term career development.",
      "The project is currently on hold, and its detailed scope and implementation remain subject to future consideration."
    ] },
  { slug: "ticketing-system", title: "Modern Ticketing System", status: "Active",
    intro: "Modern Ticketing System is one of the four product concepts introduced in Prog-Net 3.0. It is currently active, and its functionality is evolving as development progresses.",
    overview: [
      "The Modern Ticketing System is a software product focused on organizing support requests and technical issues through a centralized ticket management environment.",
      "The system is intended to provide a structured way to manage tickets, including their priorities, assignments, statuses, and progress. Its goal is to make issue tracking more organized and provide better visibility into ongoing work.",
      "The project is currently under active development, with Usman Shaikh initially responsible for its full-stack development. Its functionality and technical implementation are evolving as development progresses."
    ] },
  { slug: "mosque-tracker", title: "Mosque Tracker", status: "On Hold",
    intro: "Mosque Tracker is one of the four product concepts introduced in Prog-Net 3.0. It is currently on hold, so this page documents the concept only.",
    overview: [
      "Mosque Tracker is a concept intended to help users discover and access mosque-related information.",
      "Its detailed scope, intended features, and implementation remain subject to future consideration. The project is currently on hold."
    ] }
];

for (const def of productDefs) {
  const { slug, title, status } = def;
  const sectionsForProduct = requiredProductSections.map(([heading, detail]) => [
    heading,
    `${detail} for ${title} has not been confirmed in the available project information.`,
    "Add reviewed, product-specific information here. Keep proposals separate from capabilities that are implemented or approved."
  ]);
  sectionsForProduct.splice(7, 0, ["Product preview", `No approved product screenshots or interface designs have been provided for ${title}.`, "Add reviewed screenshots or prototypes here, with descriptive alt text and any required attribution.", "screenshot"]);
  sectionsForProduct.splice(10, 0, ["Architecture diagram", `No architecture has been confirmed for ${title}.`, "Replace this placeholder with a reviewed diagram when system components and data flows are known.", "diagram"]);
  sectionsForProduct[0] = sec("Product overview", ...def.overview);
  pages[`products/${slug}`] = {
    title, group: "Our Products", status,
    summary: `${title}: product purpose, proposed solution, audience, capabilities, technical direction, and future development.`,
    intro: def.intro,
    sections: sectionsForProduct
  };
}

const pageOrder = ["home", ...sections.flatMap((group) => group.items.map((item) => item[1]))];
const pageContent = document.querySelector("#page-content");
const sideNav = document.querySelector("#side-nav");
const search = document.querySelector("#docs-search");
const results = document.querySelector("#search-results");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector(".mobile-menu");
const backdrop = document.querySelector("#mobile-backdrop");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function pageUrl(slug) {
  return slug === "home" ? "index.html" : `?page=${encodeURIComponent(slug)}`;
}

function renderSidebar(currentSlug) {
  sideNav.innerHTML = `<a class="side-home ${currentSlug === "home" ? "active" : ""}" href="${pageUrl("home")}" ${currentSlug === "home" ? 'aria-current="page"' : ""}>Overview</a>` +
    sections.map((group) => `<div class="nav-group"><h2>${escapeHtml(group.title)}</h2>${group.items.map(([label, slug]) =>
      `<a class="side-link ${slug === currentSlug ? "active" : ""}" href="${pageUrl(slug)}" ${slug === currentSlug ? 'aria-current="page"' : ""}>${escapeHtml(label)}</a>`
    ).join("")}</div>`).join("");
}

function rich(value) {
  return escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function statusBadge(status) {
  if (!status) return "";
  const cls = /hold/i.test(status) ? "is-hold" : "is-active";
  return `<span class="status-badge ${cls}">${escapeHtml(status)}</span>`;
}

function textOf(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(textOf).join(" ");
  if (typeof value === "object") return Object.values(value).map(textOf).join(" ");
  return "";
}

function sectionHeading(section) {
  return Array.isArray(section) ? section[0] : section.heading;
}

function figureMarkup({ src, alt, caption, note }, extraClass = "") {
  const label = alt || caption || "";
  return `<figure class="doc-figure ${extraClass}"><div class="figure-frame"><img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy" onerror="this.closest('.figure-frame').classList.add('is-missing')" /><div class="figure-placeholder"><span>IMAGE TO BE ADDED</span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(src)}</small></div></div>${caption ? `<figcaption>${rich(caption)}</figcaption>` : ""}${note ? `<p class="figure-note">${rich(note)}</p>` : ""}</figure>`;
}

function caption(text) {
  return text ? `<p class="visual-caption">${rich(text)}</p>` : "";
}

function blockMarkup(block) {
  if (typeof block === "string") return `<p>${rich(block)}</p>`;
  if (block.h3) return `<h3>${rich(block.h3)}</h3>`;
  if (block.h4) return `<h4>${rich(block.h4)}</h4>`;
  if (block.status) return `<p class="block-status">${statusBadge(block.status)}</p>`;
  if (block.ul) return `<ul class="doc-list">${block.ul.map((item) => `<li>${rich(item)}</li>`).join("")}</ul>`;
  if (block.ol) return `<ol class="doc-list is-numbered">${block.ol.map((item) => `<li>${rich(item)}</li>`).join("")}</ol>`;
  if (block.quote) return `<p class="highlight-line">${rich(block.quote)}</p>`;
  if (block.callout) return `<div class="callout"><span class="callout-icon" aria-hidden="true">i</span><p>${rich(block.callout)}</p></div>`;
  if (block.fig) return figureMarkup(block.fig);
  if (block.chips) return `<div class="visual-block"><div class="chip-row">${block.chips.map((chip) => `<span class="chip">${rich(chip)}</span>`).join("")}</div>${caption(block.caption)}</div>`;
  if (block.placeholder === "diagram") return `<div class="diagram-placeholder"><div class="diagram-node">[ Step ]</div><span aria-hidden="true">→</span><div class="diagram-node">[ Step ]</div><span aria-hidden="true">→</span><div class="diagram-node">[ Step ]</div><p>Diagram placeholder · replace with reviewed project information</p></div>`;
  if (block.placeholder === "screenshot") return `<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder"></div>`;
  if (block.table) {
    const { head, rows } = block.table;
    return `<div class="visual-block"><div class="table-wrap"><table class="doc-table"><thead><tr>${head.map((cell) => `<th>${rich(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${rich(cell)}</th>` : `<td>${rich(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${caption(block.table.caption)}</div>`;
  }
  if (block.card) return `<div class="info-card"><h3>${rich(block.card.title)}</h3>${block.card.paras.map((para) => `<p>${rich(para)}</p>`).join("")}</div>`;
  if (block.feature) {
    const f = block.feature;
    return `<div class="feature-panel"><span class="feature-kicker">${escapeHtml(f.kicker)}</span><h3>${rich(f.title)}</h3>${f.paras.map((para) => `<p>${rich(para)}</p>`).join("")}${f.fig ? figureMarkup(f.fig) : ""}</div>`;
  }
  if (block.cards) {
    const cls = block.cards.length === 4 ? "is-four" : block.cards.length === 3 ? "is-three" : "";
    return `<div class="visual-block"><div class="status-grid ${cls}">${block.cards.map((card) =>
      `<div class="status-card">${card.img ? figureMarkup({ src: card.img, alt: card.title }, "is-thumb") : ""}<div class="status-card-body"><div class="status-card-head"><h4>${rich(card.title)}</h4>${statusBadge(card.status)}</div>${card.text ? `<p>${rich(card.text)}</p>` : ""}${card.list ? `<ul>${card.list.map((item) => `<li>${rich(item)}</li>`).join("")}</ul>` : ""}${card.link ? `<a class="card-link" href="${pageUrl(card.link)}">View documentation <b aria-hidden="true">→</b></a>` : ""}</div></div>`
    ).join("")}</div>${caption(block.caption)}</div>`;
  }
  if (block.steps) {
    return `<div class="visual-block"><ol class="step-flow ${block.steps.layout || ""}">${block.steps.items.map(([num, title, text]) =>
      `<li><span class="step-num">${escapeHtml(num)}</span><div><strong>${rich(title)}</strong>${text ? `<p>${rich(text)}</p>` : ""}</div></li>`
    ).join("")}</ol>${caption(block.caption)}</div>`;
  }
  if (block.hierarchy) {
    const h = block.hierarchy;
    return `<div class="visual-block"><div class="org-chart"><div class="org-lead"><strong>${rich(h.lead[0])}</strong><span>${rich(h.lead[1])}</span></div><div class="org-arrow" aria-hidden="true">↓</div><div class="org-grid">${h.members.map(([name, role]) => `<div class="org-member"><strong>${rich(name)}</strong><span>${rich(role)}</span></div>`).join("")}</div></div>${caption(block.caption)}</div>`;
  }
  if (block.mindset) {
    const m = block.mindset;
    return `<div class="visual-block"><div class="mindset"><div class="mindset-title">${rich(m.title)}</div>${m.people.length ? `<div class="chip-row">${m.people.map((person) => `<span class="chip">${rich(person)}</span>`).join("")}</div><div class="org-arrow" aria-hidden="true">↓ ↓ ↓</div>` : ""}<div class="chip-row is-areas">${m.areas.map((area) => `<span class="chip is-area">${rich(area)}</span>`).join("")}</div></div>${caption(block.caption)}</div>`;
  }
  if (block.hub) {
    const h = block.hub;
    return `<div class="visual-block"><div class="hub"><div class="hub-center">${rich(h.center)}</div>${h.groups.map((group) => `<div class="hub-group"><span class="hub-label">${rich(group.label)}</span><div class="chip-row">${group.items.map((item) => `<span class="chip">${rich(item)}</span>`).join("")}</div></div>`).join("")}</div>${caption(block.caption)}</div>`;
  }
  if (block.branches) {
    const b = block.branches;
    return `<div class="visual-block"><div class="branches"><div class="hub-center">${rich(b.root)}</div><div class="branch-list">${b.items.map(([name, status]) => `<div class="branch-item"><strong>${rich(name)}</strong>${statusBadge(status)}</div>`).join("")}</div></div>${caption(b.caption || block.caption)}</div>`;
  }
  return "";
}

function sectionMarkup(section, index) {
  const id = `section-${index + 1}`;
  const heading = sectionHeading(section);
  let detail = "";
  if (Array.isArray(section)) {
    const [, text, note, type] = section;
    detail = `<p>${escapeHtml(text)}</p>`;
    if (type === "diagram") {
      detail += `<div class="diagram-placeholder"><div class="diagram-node">[ System / milestone ]</div><span aria-hidden="true">→</span><div class="diagram-node">[ Details to confirm ]</div><p>Diagram placeholder · replace with reviewed project information</p></div>`;
    }
    if (type === "screenshot") {
      detail += `<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder; no approved product screenshot is available"><div class="screenshot-window"><span></span><span></span><span></span></div><div class="screenshot-copy"><span>PRODUCT SCREENSHOT</span><strong>Visual preview<br />to be added</strong><small>Waiting for approved product imagery</small></div></div>`;
    }
    if (note) detail += `<div class="callout"><span class="callout-icon" aria-hidden="true">i</span><p>${escapeHtml(note)}</p></div>`;
  } else {
    detail = section.blocks.map(blockMarkup).join("");
  }
  return `<section class="doc-section" id="${id}"><h2><a href="#${id}" aria-label="Link to ${escapeHtml(heading)}">#</a>${escapeHtml(heading)}</h2>${detail}</section>`;
}

function renderCards(cards) {
  return `<div class="product-grid ${cards.length === 4 ? "is-four" : ""}">${cards.map(([title, description, slug, number, status]) =>
    `<a class="product-card" href="${pageUrl(slug)}"><span class="card-number">${escapeHtml(number)} / PRODUCT</span><h2>${escapeHtml(title)}<span aria-hidden="true">↗</span></h2>${statusBadge(status)}<p>${escapeHtml(description)}</p><span class="card-link">Explore documentation <b aria-hidden="true">→</b></span></a>`
  ).join("")}</div>`;
}

function renderLanding() {
  const jumpCards = [
    ["The Chronicle", "Discover how Prog-Net began, how each generation evolved, and the milestones that shaped its journey from an initial C project to Prog-Net 3.0.", "chronicle/beginning", "01"],
    ["The People", "Get to know the five-member Prog-Net 3.0 team, their technical backgrounds, responsibilities, and contributions to the project's development.", "people/founding-team", "02"],
    ["Our Products", "Explore all four product concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. Discover their purposes, proposed features, and current development statuses.", "products", "03"],
    ["Development", "Explore the technologies, development practices, architecture, and project structure behind Prog-Net 3.0 as they are documented and verified.", "development/technology-stack", "04"],
    ["The Road Ahead", "See the distinction between long-term vision, proposals, and commitments.", "road-ahead/future-vision", "05"],
    ["About", "Learn about this documentation and its publication status.", "about", "06"]
  ];
  return `<div class="landing-hero">
      <div class="breadcrumbs"><span>Documentation</span><span aria-hidden="true">/</span><span>Overview</span></div>
      <div class="hero-label"><span class="status-dot"></span> PROJECT DOCUMENTATION <span class="mono">VERSION 3.0</span></div>
      <h1>One project.<br /><span>Three generations.</span></h1>
      <p class="hero-copy">The official documentation of Prog-Net 3.0 — a journey of learning, collaboration, and software development spanning three generations. Explore its history, the people behind it, four product concepts, and the direction the project is taking.</p>
      <div class="hero-actions"><a class="button button-primary" href="${pageUrl("chronicle/beginning")}">Read the Chronicle <span aria-hidden="true">→</span></a><a class="button button-secondary" href="${pageUrl("products")}">Explore the products</a></div>
      <div class="hero-index"><span>01 — 03</span><span>History / People / Products / Development</span></div>
    </div>
    <section class="landing-section">
      <div class="section-kicker">A project in progress</div><div class="landing-intro"><h2>Built across generations.<br /><span>Documented with care.</span></h2><div><p>Prog-Net is an academic software development journey that has evolved across three generations. What began as a C-based project gradually expanded into Java Swing applications and has now progressed towards developing independent software products.</p><p>Prog-Net 3.0 introduced four product concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. As development priorities evolved, Handmade Marketplace and Modern Ticketing System remained active, while MicroJobs and Mosque Tracker were placed on hold. This documentation records the project's journey, its original ideas, current priorities, and the work behind each generation.</p></div></div>
      <div class="generation-strip"><div><span>01 / FIRST GENERATION</span><strong>Prog-Net 1.0</strong><p>C Language · Initial Development</p></div><div><span>02 / SECOND GENERATION</span><strong>Prog-Net 2.0</strong><p>Java Swing · Games · Utilities · Lobby System</p></div><div><span>03 / CURRENT DIRECTION</span><strong>Prog-Net 3.0</strong><p>Four Product Concepts · Two Active · Two On Hold</p></div></div>
      <div class="home-context-grid"><div><span class="section-kicker">MISSION & VISION</span><strong>Learning Through Building</strong><p>Our goal is to turn classroom knowledge into practical software development experience. Prog-Net encourages experimentation, teamwork, problem-solving, and continuous learning through projects that explore real-world ideas.</p><small class="context-note">Our proposed mission statement, not a previously approved official statement.</small></div><div><span class="section-kicker">LATEST DEVELOPMENT</span><strong>Four Product Concepts</strong><p>Prog-Net 3.0 introduced four software concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. Development currently focuses on Handmade Marketplace and Modern Ticketing System, while MicroJobs and Mosque Tracker remain on hold.</p><a href="${pageUrl("chronicle/prog-net-3")}">Read about Prog-Net 3.0 <span aria-hidden="true">→</span></a></div><div><span class="section-kicker">THE PEOPLE</span><strong>Built by a Five-Member Team</strong><p>Prog-Net 3.0 brings together five student developers with different technical skills and responsibilities. Working across multiple product teams, they contribute to planning, design, development, and problem-solving.</p><a href="${pageUrl("people/founding-team")}">Meet the team <span aria-hidden="true">→</span></a></div></div>
    </section>
    <section class="landing-section product-preview"><div class="section-heading"><div><div class="section-kicker">The current direction</div><h2>Four Ideas.<br /><span>One Evolving Project.</span></h2></div><a class="inline-link" href="${pageUrl("products")}">All product docs <span aria-hidden="true">↗</span></a></div>${renderCards(pages.products.cards)}</section>
    <section class="landing-section"><div class="section-heading"><div><div class="section-kicker">Explore the documentation</div><h2>Find your<br /><span>starting point.</span></h2></div><p class="section-side-note">Explore the complete Prog-Net journey through its history, contributors, product concepts, technical development, and future direction. Each section provides a closer look at a different part of the project.</p></div><div class="quick-grid">${jumpCards.map(([title, description, slug, number]) => `<a href="${pageUrl(slug)}" class="quick-card"><span>${number} / SECTION</span><h3>${escapeHtml(title)} <span aria-hidden="true">↗</span></h3><p>${escapeHtml(description)}</p></a>`).join("")}</div></section>
    <section class="home-note"><span class="note-mark" aria-hidden="true">i</span><div><strong>Accuracy before completeness</strong><p>This documentation aims to maintain accuracy, clarity, and transparency throughout the Prog-Net journey. Project details, technical information, development progress, and future plans are presented according to available and verified information. Unconfirmed details are clearly identified rather than presented as facts, ensuring that the documentation reflects the actual state of the project.</p></div><a href="${pageUrl("about")}">About this documentation <span aria-hidden="true">→</span></a></section>`;
}

function renderArticle(slug, page) {
  const crumbs = `<div class="breadcrumbs"><a href="${pageUrl("home")}">Documentation</a><span aria-hidden="true">/</span><span>${escapeHtml(page.group)}</span><span aria-hidden="true">/</span><span>${escapeHtml(page.title)}</span></div>`;
  const toc = (page.sections || []).map((section, index) => `<a href="#section-${index + 1}">${escapeHtml(sectionHeading(section))}</a>`).join("");
  const tocAside = toc ? `<aside class="toc" aria-label="On this page"><div class="toc-title">ON THIS PAGE</div>${toc}</aside>` : "";
  const body = page.landing ? renderLanding() : `<div class="article-header">${crumbs}<div class="article-kicker">${escapeHtml(page.group.toUpperCase())}<span>·</span> PROG-NET 3.0</div><h1>${escapeHtml(page.title)}</h1>${[].concat(page.intro).map((para) => `<p class="article-intro">${escapeHtml(para)}</p>`).join("")}<div class="article-meta"><span><span class="status-dot"></span> Documentation page</span>${page.status ? statusBadge(page.status) : ""}<span>Details subject to confirmation</span></div></div>
      <div class="article-layout"><div class="article-body">${page.cards ? renderCards(page.cards) : ""}${(page.sections || []).map(sectionMarkup).join("")}</div>${tocAside}</div>`;

  const currentIndex = pageOrder.indexOf(slug);
  const previous = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  const pagination = page.landing ? "" : `<nav class="page-pagination" aria-label="Page navigation">
    ${previous ? `<a href="${pageUrl(previous)}" class="page-prev"><span>← PREVIOUS</span><strong>${escapeHtml(pages[previous].title)}</strong></a>` : "<span></span>"}
    ${next ? `<a href="${pageUrl(next)}" class="page-next"><span>NEXT →</span><strong>${escapeHtml(pages[next].title)}</strong></a>` : ""}
  </nav>`;
  pageContent.innerHTML = `${body}${pagination}`;
  document.title = `${page.title} · Prog-Net Documentation`;
  renderSidebar(slug);
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function closeMobileNav() {
  sidebar.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open documentation navigation";
  backdrop.hidden = true;
}

function showSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    results.hidden = true;
    results.innerHTML = "";
    search.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = pageOrder.filter((slug) => {
    const page = pages[slug];
    const sectionText = textOf(page.sections);
    const cardText = textOf(page.cards);
    return `${page.title} ${page.group} ${page.summary} ${textOf(page.intro)} ${sectionText} ${cardText}`.toLowerCase().includes(normalized);
  }).slice(0, 8);
  results.innerHTML = matches.length
    ? matches.map((slug, index) => `<a role="option" aria-selected="false" href="${pageUrl(slug)}" ${index === 0 ? 'data-first-result="true"' : ""}><span>${escapeHtml(pages[slug].group)}</span><strong>${escapeHtml(pages[slug].title)}</strong><small>${escapeHtml(pages[slug].summary)}</small></a>`).join("")
    : `<p class="no-results">No pages found for “${escapeHtml(query.trim())}”.</p>`;
  results.hidden = false;
  search.setAttribute("aria-expanded", "true");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || link.target || link.origin !== window.location.origin || !link.search.startsWith("?page=")) return;
  event.preventDefault();
  history.pushState({}, "", link.href);
  const slug = new URL(link.href).searchParams.get("page") || "home";
  renderArticle(pages[slug] ? slug : "home", pages[slug] || pages.home);
  results.hidden = true;
  search.setAttribute("aria-expanded", "false");
  search.value = "";
});

window.addEventListener("popstate", () => {
  const slug = new URLSearchParams(window.location.search).get("page") || "home";
  renderArticle(pages[slug] ? slug : "home", pages[slug] || pages.home);
});

search.addEventListener("input", () => showSearchResults(search.value));
search.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    results.hidden = true;
    search.setAttribute("aria-expanded", "false");
    search.blur();
  } else if (event.key === "Enter") {
    const first = results.querySelector("[data-first-result]");
    if (first) first.click();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".sidebar-tools")) {
    results.hidden = true;
    search.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Open documentation navigation" : "Close documentation navigation";
  sidebar.classList.toggle("is-open", !isOpen);
  backdrop.hidden = isOpen;
});
backdrop.addEventListener("click", closeMobileNav);
document.querySelector("#current-year").textContent = new Date().getFullYear();

const initialSlug = new URLSearchParams(window.location.search).get("page") || "home";
renderArticle(pages[initialSlug] ? initialSlug : "home", pages[initialSlug] || pages.home);
