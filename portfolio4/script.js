const sections = [
  {
    title: "The Chronicle", items: [
      ["The Beginning", "chronicle/beginning"], ["Prog-Net 1.0", "chronicle/prog-net-1"], ["Prog-Net 2.0", "chronicle/prog-net-2"], ["Prog-Net 3.0", "chronicle/prog-net-3"], ["Evolution & Milestones", "chronicle/milestones"]
    ]
  },
  {
    title: "The People", items: [
      ["The Founding Team", "people/founding-team"], ["Team Structure", "people/team-structure"], ["Members & Responsibilities", "people/members"], ["Alliances & Collaborations", "people/collaborations"], ["Acknowledgements", "people/acknowledgements"]
    ]
  },
  {
    title: "Our Products", items: [
      ["Product Overview", "products"], ["Handmade Marketplace", "products/handmade-marketplace"], ["MicroJobs", "products/microjobs"], ["Modern Ticketing System", "products/ticketing-system"], ["Mosque Tracker", "products/mosque-tracker"]
    ]
  },
  {
    title: "Development", items: [
      ["Technology Stack", "development/technology-stack"], ["Development Methodology", "development/methodology"], ["Architecture Overview", "development/architecture"], ["Project Structure", "development/project-structure"], ["What's New in Prog-Net 3.0", "development/whats-new"]
    ]
  },
  {
    title: "The Road Ahead", items: [
      ["Future Vision", "road-ahead/future-vision"], ["Development Roadmap", "road-ahead/development-roadmap"], ["Planned Features", "road-ahead/planned-features"], ["Long-Term Goals", "road-ahead/long-term-goals"]
    ]
  },
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

const pages = {
  home: { title: "Prog-Net 3.0 documentation", group: "Home", summary: "A guide to Prog-Net's evolution, people, products, development, and future direction.", landing: true },
  "chronicle/beginning": {
    title: "The Beginning",
    group: "The Chronicle",
    summary: "The origin story of Prog-Net and the early idea behind its first generation.",
    intro: "Prog-Net began as an academic software development project and gradually evolved into a journey spanning multiple generations. What started as an initial exploration of programming and software development became an opportunity to experiment with ideas, build practical applications, and develop technical skills through teamwork.",
    sections: [
      ["An Experiment Before a Project", "Prog-Net 1.0 did not begin as a conventional software project. It started as a learning-based experiment built around observation, creativity, and ambition. The team studied other student projects, identified ideas with potential, and explored how they could be improved through a different mindset and greater creative effort. Instead of treating existing ideas as limits, the team treated them as starting points. This process became the foundation for Prog-Net.", "The project began with observation, inspiration, and creative experimentation rather than a fixed product plan."],
      ["Beyond the Ordinary", "Our initial objective was not simply to complete a few small applications. We wanted to challenge ourselves, explore different possibilities, and make the most of the time available to us. The goals were to explore multiple software concepts, learn through practical implementation, improve ideas through independent creativity and execution, and make productive use of the full development period.", "The first goals centered on experimentation, skills development, and collaborative problem-solving."],
      ["Inspiration or Imitation?", "Taking inspiration from other teams came with its own challenges. Since some ideas originated from observing projects around us, our work was sometimes labelled as copying. However, inspiration was only the starting point. We reinterpreted those concepts, implemented them independently, and invested considerably more effort into expanding their scope and execution. We chose not to let those opinions define our work.", "The early project faced criticism and uncertainty, but the team focused on learning, execution, and improvement."]
    ]
  },
  "chronicle/prog-net-1": {
    title: "Prog-Net 1.0",
    group: "The Chronicle",
    summary: "The first generation: a C-based starting point and the lessons it left behind.",
    intro: "Prog-Net 1.0 began as a learning-based experiment and gradually developed into a more structured software project. What initially started as a collection of small programs became a central idea: a connected system of multiple applications accessible through a lobby.",
    sections: [
      ["From an Experiment to Prog-Net", "What initially started as a learning-based experiment gradually developed into a structured software project. As the collection of applications grew, we began looking beyond individual programs and considered how they could work together as part of a single system. We named it ProgNet, an abbreviation of Program Network, and created a lobby that connected multiple applications and presented the available choices to users.", "The name reflects the idea of a connected collection of programs, not a computer network or internet system."],
      ["The Applications Behind the Network", "Prog-Net 1.0 brought together a collection of 19 applications divided into main and supportive categories. The main applications were accessible through the central lobby, while supportive applications worked behind the scenes to enable the system's functionality. Together, these components formed the foundation of Program Network: a central interface connecting multiple applications within one project ecosystem.", "The project combined a central lobby with a range of smaller utility and game applications."],
      ["Two Months of Consistent Effort", "The development of Prog-Net 1.0 required more than programming skills. It demanded consistency, collaboration, creative thinking, and a willingness to keep working throughout the available timeline. For two months, the team focused on developing and expanding the project, using the full period to improve the number and quality of applications rather than treating the deadline as an end point.", "The collective team effort was central to the project’s early growth."],
      ["More Than Just Code", "Prog-Net 1.0 taught us that software development is not limited to writing code. It involves observing problems, exploring ideas, making decisions, working consistently, and finding ways to bring different components together. One of the biggest lessons was the value of execution: an idea may look simple on paper, but turning it into a working application requires time, effort, experimentation, and problem-solving.", "The first generation gave the team practical experience and prepared it for bigger challenges ahead."]
    ]
  },
  "chronicle/prog-net-2": {
    title: "Prog-Net 2.0",
    group: "The Chronicle",
    summary: "The second generation introduced Java Swing, games, utilities, and a more organized lobby system.",
    intro: "Prog-Net 2.0 marked the next stage in the project's evolution, bringing a shift from C-based applications to Java Swing development. Building on the experience gained from the first generation, this version introduced a more structured application environment and a more organized way of combining games and utilities through a centralized lobby.",
    sections: [
      ["A New Generation", "With Prog-Net 2.0, the project entered a new development phase. The decision to move to Java introduced a different programming environment and an opportunity to work with object-oriented concepts and graphical application development. The central idea of connecting multiple applications through a lobby remained, but the implementation evolved. Using Java Swing, the team developed a launcher-style application that brought different games and utilities into one interface.", "The core lobby concept was carried forward, but its technical implementation changed as the project grew."],
      ["Games, Utilities, and Lobby", "Prog-Net 2.0 expanded the original concept of a centralized application hub. Instead of focusing on a collection of smaller C-based programs, this generation brought together multiple games and utilities developed as Java applications. The lobby served as the main entry point, allowing users to select and launch different modules through a unified interface. Each module had its own functionality while remaining part of the larger Prog-Net environment.", "The lobby became a more organized and visual gateway to the project’s modules."],
      ["Major Improvements", "From individual programs to a unified application: Prog-Net 2.0 introduced better organization, a Java Swing interface, and more structured navigation. The lobby became more than a simple selection screen; it served as the central point from which users could access different games and utilities. CardLayout allowed multiple screens and modules to work within a single application window, creating a more consistent user experience. The project’s scope also expanded with larger modules such as Minecraft 2D, which added player movement, map editing, and world interaction.", "The second generation focused on structure, navigation, and a more connected application experience."],
      ["Lessons Learned", "Prog-Net 2.0 taught us that moving to a new programming language is not simply about learning different syntax. It also means adapting to new ways of organizing code, designing interfaces, and approaching problems. Working with Java Swing introduced us to graphical application development and gave us practical experience with object-oriented programming. The project also showed us how a centralized application could bring multiple independent modules together in a more organized way.", "The second generation prepared the team for the broader, product-focused direction of Prog-Net 3.0."]
    ]
  },
  "chronicle/prog-net-3": {
    title: "Prog-Net 3.0",
    group: "The Chronicle",
    summary: "The current generation focuses on independent software products instead of a single launcher application.",
    intro: "Prog-Net 3.0 marks a new chapter in the Prog-Net journey. After exploring C-based applications in the first generation and building a Java Swing application in the second, the third generation shifted its focus towards developing independent software products. Rather than bringing games and utilities together in a single application, Prog-Net 3.0 explored ideas designed to address different needs and audiences.",
    sections: [
      ["A New Direction", "Prog-Net 3.0 introduced four product concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. As the project developed, priorities changed. Handmade Marketplace and Modern Ticketing System remained active, while MicroJobs and Mosque Tracker were placed on hold. This generation represents a broader approach to software development: identifying problems, exploring practical solutions, dividing responsibilities, and turning ideas into working products.", "The project moved from a single launcher model to a product-based direction."],
      ["The Four Product Concepts", "Prog-Net 3.0 introduced four different product ideas, each exploring a separate area of software development. Although they share the same project journey, each concept has its own purpose, intended audience, and potential features. Handmade Marketplace focuses on connecting handmade creators with customers. MicroJobs explores short-term and flexible job opportunities. Modern Ticketing System focuses on structured support requests and technical issue tracking. Mosque Tracker is a concept focused on discovering and accessing mosque-related information.", "Each product represents a different direction explored during Prog-Net 3.0."],
      ["Development Approach", "Unlike previous generations, Prog-Net 3.0 focuses on developing separate software products rather than combining multiple applications into one launcher. Each product has its own purpose, requirements, and development direction. This approach allows the team to focus on the specific problems each product is intended to address while also building broader full-stack skills across the team.", "Development is organized around product ideas and learning, not around a single integrated app."],
      ["The Road Ahead", "Prog-Net 3.0 is a learning-driven development journey. Rather than rushing towards finished products, the focus is on understanding requirements, learning necessary technologies, and building each product through a structured process. As the team develops, priorities may change and product statuses may evolve.", "The future direction remains flexible and continues to be documented as the project progresses."]
    ]
  },
  "chronicle/milestones": {
    title: "Evolution & Milestones",
    group: "The Chronicle",
    summary: "A timeline of key shifts across the project’s generations and development directions.",
    intro: "This timeline is intentionally evidence-led. No dates have been supplied, so milestones remain undated until the project history can be verified.",
    sections: [
      ["Project timeline", "The project can be understood across three major generations: Prog-Net 1.0, Prog-Net 2.0, and Prog-Net 3.0. The key milestones are the move from C-based applications to Java Swing, the introduction of a centralized lobby, and the shift toward independent software products.", "The chronology focuses on confirmed changes in project direction rather than guessed dates or unsupported claims."],
      ["Major achievements", "The major achievements include the expansion from a small learning experiment to a collection of 19 applications, the growth of a Java Swing environment, and the introduction of four product concepts for Prog-Net 3.0.", "Achievements should be supported by evidence and updated when verified."],
      ["Important decisions", "Key decisions include moving from C to Java, centralizing application navigation through a lobby, and reorganizing the project around independent products instead of a single launcher. These decisions shaped the project’s structure and future direction.", "Decision records should be linked to source discussions or approved project materials."],
      ["Across the generations", "Prog-Net 1.0 focused on practical experimentation and connected applications. Prog-Net 2.0 expanded the project with Java Swing, games, utilities, and more structured navigation. Prog-Net 3.0 introduced multiple product concepts and a more focused software development approach.", "The journey illustrates a gradual evolution in both technical direction and team thinking."]
    ]
  },
  "people/founding-team": {
    title: "The Founding Team",
    group: "The People",
    summary: "The original contributors who established Prog-Net and shaped its early direction.",
    intro: "Prog-Net began with a team of five students who came together to explore software development, experiment with ideas, and build something of their own. What started as a learning-based experiment gradually developed into Prog-Net 1.0, establishing the foundation for the generations that followed.",
    sections: [
      ["Founding Contributors", "The original Prog-Net 1.0 team consisted of Usman Shaikh, Rana Qasim Shafiq, Mustafa Kashif, Faheem Khan, and Shazil Khan. As the project progressed, its team composition changed. Prog-Net 2.0 continued with three members, while Prog-Net 3.0 introduced a new five-member official team. Although not everyone continued into later generations, their involvement remains part of Prog-Net's history.", "The section keeps focus on the original members rather than inventing later biographies or achievements."]
    ]
  },
  "people/team-structure": {
    title: "Team Structure",
    group: "The People",
    summary: "How the Prog-Net team is organized and how responsibilities are assigned across product work.",
    intro: "Prog-Net 3.0 is organized around independent software projects, with team members initially assigned to different development responsibilities. Unlike previous generations, which focused on building a single application containing multiple games and utilities, Prog-Net 3.0 follows a project-based structure.",
    sections: [
      ["Organization", "The team is organized around product workstreams, with responsibilities distributed across the project's main areas. Modern Ticketing System is led by Usman Shaikh, while Handmade Marketplace is supported by Mustafa Kashif and Faheem Khan. MicroJobs and Mosque Tracker were introduced as product concepts but were not assigned active development teams. The structure provides an initial division of work while allowing team members to learn, collaborate, and contribute beyond their initial responsibilities.", "Initial assignments are meant to organize the workload, not to limit long-term learning or contribution."]
    ]
  },
  "people/members": {
    title: "Members & Responsibilities",
    group: "The People",
    summary: "The five people behind Prog-Net 3.0 and their initial product responsibilities.",
    intro: "Prog-Net 3.0 brought together five student developers, each contributing different technical skills and experience. The team was organized around the project's product areas, with members taking responsibility for different parts of development.",
    sections: [
      ["Member directory", "Usman Shaikh — Full Stack Developer — Responsible for leading the overall project and working independently on the Modern Ticketing System. Ammar — Backend Developer — Assigned to Handmade Marketplace and focused on its backend development. Faheem Khan — Frontend Developer — Assigned to Handmade Marketplace and focused on its frontend development. Shazeel Khan — Backend Developer — Assigned to the Ticketing System and focused on backend development. Mohib Imran Rajput — Frontend Developer — Assigned to the Ticketing System and focused on frontend development. These responsibilities define the initial division of work, not permanent specialization.", "The team encourages a broader learning mindset in which members are expected to understand more than one area of software development."]
    ]
  },
  "people/collaborations": {
    title: "Alliances & Collaborations",
    group: "The People",
    summary: "Confirmed allies, collaborations, and the project's broader support network.",
    intro: "Prog-Net's connections extend beyond its own development team. Over time, friendships, shared experiences, and independent project groups have created a network built around mutual support and cooperation.",
    sections: [
      ["Collaboration history", "Prog-Net maintains connections with individuals and teams working in different project groups. These relationships are built on friendship, academic collaboration, and mutual encouragement rather than formal contracts or official affiliations. Intero Hub is the confirmed allied team. Both groups maintain a collaborative relationship while working on their respective initiatives. These connections reflect an important part of Prog-Net's environment: independent teams can follow their own directions while remaining connected through cooperation and shared support.", "Alliances are documented as supportive relationships, not as formal product partnerships."]
    ]
  },
  "people/acknowledgements": {
    title: "Acknowledgements",
    group: "The People",
    summary: "Recognition for the people who contributed to or supported Prog-Net.",
    intro: "Prog-Net has grown through the efforts, contributions, and support of people both within and beyond its core team. We would like to acknowledge everyone who has contributed their time, shared knowledge, offered guidance, or supported the project throughout its development.",
    sections: [
      ["Contributors and supporters", "Special recognition goes to our team members, collaborators, and supporters whose involvement has helped Prog-Net continue across its different generations. Their contributions remain an important part of the project's journey. Individual acknowledgements should be added only after confirming their contributions and permission to publish.", "The page is intentionally general and does not list every ally as a formal contributor."]
    ]
  },
  products: {
    title: "Our Products",
    group: "Our Products",
    summary: "An overview of the four product concepts in the Prog-Net 3.0 direction.",
    intro: "Prog-Net 3.0 marks a shift towards developing independent software products, each addressing a different purpose and set of user needs. The project introduced four product concepts, with two currently receiving active development attention and the remaining two kept on hold for possible future consideration.",
    cards: [
      ["Handmade Marketplace", "Status: Active — A dedicated marketplace concept designed to connect handmade creators with customers.", "products/handmade-marketplace", "01"],
      ["MicroJobs", "Status: On Hold — A platform concept focused on short-term and flexible job opportunities.", "products/microjobs", "02"],
      ["Modern Ticketing System", "Status: Active — A centralized ticket management system for organized support requests and technical issue tracking.", "products/ticketing-system", "03"],
      ["Mosque Tracker", "Status: On Hold — A concept to help users discover and access mosque-related information.", "products/mosque-tracker", "04"]
    ],
    sections: [["Product documentation status", "Each product has its own direction and intended scope. The following documentation introduces these concepts and records their development status without treating proposed ideas as completed features.", "The purpose is to show the product portfolio while distinguishing active work from concepts that remain on hold."]]
  },
  "development/technology-stack": {
    title: "Technology Stack",
    group: "Development",
    summary: "The technologies and technical direction behind Prog-Net 3.0.",
    intro: "The project is still in the process of defining and validating its technology choices. This page records the direction that has been confirmed and avoids claiming unverified technologies as official decisions.",
    sections: [
      ["Confirmed direction", "Prog-Net 3.0 continues to evolve around practical software development. The team is using the project itself to learn and document technologies, workflows, and implementation decisions as they are validated.", "Only confirmed technologies should be listed here; speculative tools should remain out of the official record."],
      ["Tools and services", "Build, design, hosting, storage, and collaboration tools should be added only after checking the project repositories and team-approved records. This page should remain precise and avoid inventing a technology stack that has not been verified.", "The documentation should favor confirmed information over placeholder technical details."]
    ]
  },
  "development/methodology": {
    title: "Development Methodology",
    group: "Development",
    summary: "The team's planning, development, review, and documentation workflow.",
    intro: "The development approach centers on understanding the product idea before building its features, identifying the intended users, defining requirements, planning the interface, and developing the application in manageable stages.",
    sections: [
      ["Workflow", "The project follows a practical development process that begins with understanding the problem, moves through planning and design, and then shifts into implementation, testing, refinement, and final documentation. Work is organized around product goals and guided by collaboration, review, and iterative learning.", "The process is documented as a working approach, not as a fixed policy that must remain unchanged."],
      ["Technical decisions", "Important technical decisions are made with context, alternatives considered, and the reasoning behind the final approach recorded. This helps the project remain transparent and prevents assumptions from being treated as confirmed decisions.", "Documentation should focus on how and why choices were made rather than inventing formal governance."]
    ]
  },
  "development/architecture": {
    title: "Architecture Overview",
    group: "Development",
    summary: "System boundaries, major components, and technical structure across the product ideas.",
    intro: "The project is still in the process of establishing a fully confirmed architecture. This page documents the high-level direction while keeping technical details clear and provisional where needed.",
    sections: [
      ["System context", "Prog-Net 3.0 is structured around multiple independent products rather than a single connected launcher. Each product is intended to sit within its own boundaries, with users and products identified clearly once the technical design is confirmed.", "The architecture should reflect verified relationships and avoid invented integrations."],
      ["Product architecture", "Each product concept has its own intended purpose, audience, and technical direction. At this stage, the architecture should be represented conceptually and updated only after the actual implementation and component structure are established.", "Architecture diagrams are helpful, but they should be based on confirmed design rather than assumptions."]
    ]
  },
  "development/project-structure": {
    title: "Project Structure",
    group: "Development",
    summary: "How the Prog-Net project is organized across repositories, files, and product workstreams.",
    intro: "The project structure should reflect the actual repositories and file organization as they are established. This page is intended to document the practical layout of the work rather than present a mock folder structure.",
    sections: [
      ["Repository layout", "The project files and repositories should be displayed in a clear directory-tree or summary view. Important folders and files should be explained briefly, while private or sensitive files remain excluded from public documentation.", "The structure should be updated as the project develops and grows."],
      ["Application boundaries", "The different parts of the project should be separated clearly according to product area and major function. This helps show how the project is organized without implying that every component is fully established or integrated.", "Application boundaries should be aligned with the architecture overview and the working product priorities."]
    ]
  },
  "development/whats-new": {
    title: "What's New in Prog-Net 3.0",
    group: "Development",
    summary: "The confirmed changes in the project’s direction compared with earlier generations.",
    intro: "Prog-Net 3.0 is a different direction from the earlier generations. Instead of a single launcher with multiple applications, the project focuses on independent software products and a broader development approach.",
    presentations: [
      {
        title: "Presentation 01", summary: "Confirmed direction changes and the status of technical improvements.", open: true,
        sections: [
          {
            label: "A", title: "Confirmed Direction Changes", items: [
              ["Direction", "Prog-Net 3.0 introduces three independent product concepts: Handmade Marketplace, MicroJobs, and Modern Ticketing System.", "This describes the stated direction, not a claim that the products are complete or launched.", "confirmed"],
              ["Compared with earlier generations", "Prog-Net 1.0 started with C and Prog-Net 2.0 used Java Swing for games, utilities, and a lobby. Prog-Net 3.0 shifts toward three independent product concepts.", "", "confirmed"],
              ["Objectives", "The objectives of this generation have not been confirmed.", "Add the team's confirmed goals and the criteria used to evaluate progress.", "pending"],
              ["Project scope", "The product names establish the concepts but do not confirm specific features or scope.", "", "pending"],
              ["Organization", "The three products are identified as independent concepts. How the work is organized around them has not been confirmed.", "", "pending"],
              ["Development approach", "The project brief describes a changed development approach but does not specify its process.", "Document the actual workflow and decisions in Development Methodology.", "pending"]
            ]
          },
          {
            label: "B", title: "Technical Improvements", items: [
              ["Implementation improvements", "No specific implementation improvements have been confirmed.", "Add a version-to-version comparison only when supported by implementation or release evidence.", "pending"],
              ["Architecture", "The three products are identified as independent concepts; their implementation and relationships are not specified.", "", "pending"],
              ["Technologies and practices", "No Prog-Net 3.0 language, framework, tool, or development practice has been confirmed.", "Confirmed details belong in Technology Stack and Development Methodology.", "pending"]
            ]
          }
        ]
      },
      {
        title: "Presentation 02", summary: "Current priorities and the development status of Prog-Net 3.0 product concepts.",
        sections: [
          {
            label: "A", title: "Active Product Priorities", items: [
              ["Handmade Marketplace", "An active product concept focused on connecting handmade creators with customers.", "", "confirmed"],
              ["Modern Ticketing System", "An active product concept focused on support requests and technical issue tracking.", "", "confirmed"]
            ]
          },
          {
            label: "B", title: "Concepts on Hold", items: [
              ["MicroJobs", "A product concept exploring short-term and flexible job opportunities; it is currently on hold.", "", "confirmed"],
              ["Mosque Tracker", "A product concept focused on mosque-related information; it is currently on hold.", "", "confirmed"]
            ]
          }
        ]
      }
    ]
  },
  "road-ahead/future-vision": {
    title: "Future Vision",
    group: "The Road Ahead",
    summary: "The intended future direction for Prog-Net as a growing project.",
    intro: "The team’s longer-term vision should describe what Prog-Net aims to become once its current product work evolves and the project continues beyond its present stage. This page keeps that vision separate from the current roadmap and confirmed work.",
    sections: [
      ["Direction", "Prog-Net aims to continue growing as a learning-driven software development journey. The team hopes to improve its technical skills, build practical software products, and continue exploring ideas that can become meaningful contributions. This vision is broad and future-facing rather than a commitment to fixed deliverables.", "Future direction should be described as aspiration, not guaranteed outcome."],
      ["Principles", "The project can be guided by principles such as continuous learning, collaboration, knowledge sharing, and building practical software. These are suggestions for future alignment and should be confirmed by the team before being treated as formal principles.", "Principles should be reviewed and approved before being published as the project’s official values."]
    ]
  },
  "road-ahead/development-roadmap": {
    title: "Development Roadmap",
    group: "The Road Ahead",
    summary: "A roadmap that distinguishes current priorities from future ideas and uncommitted milestones.",
    intro: "No dates or committed milestones have been provided. This roadmap is a structure for publishing reviewed priorities rather than a fixed schedule.",
    sections: [
      ["Roadmap status", "The active product priorities are Handmade Marketplace and Modern Ticketing System. MicroJobs and Mosque Tracker remain on hold. The roadmap is intended to provide direction without inventing deadlines or implying that unfinished work is complete.", "Milestones should be added only when they have been formally reviewed and approved."],
      ["Completed work", "Work should be moved here only after it has actually been completed and verified. The project should document real milestones, not aspirational ones.", "This makes the roadmap clear and prevents the project from overstating work that is still in progress."]
    ]
  },
  "road-ahead/planned-features": {
    title: "Planned Features",
    group: "The Road Ahead",
    summary: "Potential product capabilities and their current statuses.",
    intro: "The project may explore future capabilities, but these are not the same as confirmed product features. Each idea should be clearly labelled by status and product area.",
    sections: [
      ["Proposed capabilities", "Potential features should be grouped by product and assigned a status such as Idea, Under Review, Approved, In Progress, or Completed. The status should make it clear whether the idea is simply proposed or already under development.", "Ideas should remain distinct from approved work and implemented features."],
      ["Status definitions", "Idea — a possible feature, not yet committed. Under Review — being evaluated. Approved — accepted for future development. In Progress — work is actively underway. Completed — verified as delivered.", "The labels should remain consistent across the product documentation to reduce confusion."]
    ]
  },
  "road-ahead/long-term-goals": {
    title: "Long-Term Goals",
    group: "The Road Ahead",
    summary: "The project’s larger ambitions and future priorities.",
    intro: "Long-term goals should only be published when they have been agreed by the team and are presented clearly as ambitions rather than guarantees.",
    sections: [
      ["Goals and priorities", "The project’s shared aims may include continuing Prog-Net into future generations, improving software development skills, building practical software products, and maintaining collaboration and knowledge sharing across the team. These are long-term themes that guide future work and help define the direction of the project.", "The goals should be reviewed periodically and updated when the team confirms a change in direction."]
    ]
  },
  about: {
    title: "About Prog-Net",
    group: "About",
    summary: "Project context, purpose, credits, and official contact information.",
    intro: "Prog-Net is a project documenting a journey across multiple generations. It brings together the project’s history, team, products, development direction, and future goals in one place.",
    sections: [
      ["About this documentation", "This website documents Prog-Net’s history across three generations, the people involved in its development, the products explored under Prog-Net 3.0, and the project’s current direction. It aims to present what is known and clearly separate it from what still needs confirmation.", "The documentation is intended to be accurate, clear, and transparent throughout the project journey."],
      ["About the Foundry", "The name The Prog-Net Foundry has been discussed as a possible identity, but it has not been confirmed as the official name of the project. It should only be included as an official description once the team approves it.", "This section should remain provisional until the team confirms its meaning and status."],
      ["Credits and contact", "Documentation contributors, project credits, and official contact information should only be added when they have been verified. The project should show working links and confirmed names rather than unreviewed details.", "This page acts as the closing summary of the project and its documentation."]
    ]
  }
};
for (const [slug, title] of [
  ["handmade-marketplace", "Handmade Marketplace"],
  ["microjobs", "MicroJobs"],
  ["ticketing-system", "Modern Ticketing System"],
  ["mosque-tracker", "Mosque Tracker"]
]) {
  const sectionsForProduct = requiredProductSections.map(([heading, detail]) => [
    heading,
    `${detail} for ${title} has not been fully confirmed in the available project information.`,
    "Add reviewed, product-specific information here. Keep proposals separate from capabilities that are implemented or approved."
  ]);
  sectionsForProduct.splice(7, 0, ["Product preview", `No approved product screenshots or interface designs have been provided for ${title}.`, "Add reviewed screenshots or prototypes here, with descriptive alt text and any required attribution.", "screenshot"]);
  sectionsForProduct.splice(10, 0, ["Architecture diagram", `No architecture has been confirmed for ${title}.`, "Replace this placeholder with a reviewed diagram when system components and data flows are known.", "diagram"]);
  pages[`products/${slug}`] = {
    title, group: "Our Products",
    summary: `${title}: product purpose, proposed solution, audience, capabilities, technical direction, and future development.`,
    intro: `This page documents ${title}, one of the four product concepts introduced in Prog-Net 3.0. Detailed implementation and future scope remain subject to confirmation.`,
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

function sectionMarkup(section, index) {
  const [heading, text, note, type] = section;
  const id = `section-${index + 1}`;
  let detail = `<p>${escapeHtml(text)}</p>`;
  if (type === "diagram") {
    detail += `<div class="diagram-placeholder"><div class="diagram-node">[ System / milestone ]</div><span aria-hidden="true">→</span><div class="diagram-node">[ Details to confirm ]</div><p>Diagram placeholder · replace with reviewed project information</p></div>`;
  }
  if (type === "screenshot") {
    detail += `<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder; no approved product screenshot is available"><div class="screenshot-window"><span></span><span></span><span></span></div><div class="screenshot-copy"><span>PRODUCT SCREENSHOT</span><strong>Visual preview<br />to be added</strong><small>Waiting for approved product imagery</small></div></div>`;
  }
  if (note) detail += `<div class="callout"><span class="callout-icon" aria-hidden="true">i</span><p>${escapeHtml(note)}</p></div>`;
  return `<section class="doc-section" id="${id}"><h2><a href="#${id}" aria-label="Link to ${escapeHtml(heading)}">#</a>${escapeHtml(heading)}</h2>${detail}</section>`;
}

const presentationStatus = { confirmed: "Confirmed", pending: "Awaiting confirmation" };

function renderPresentations(presentations) {
  return `<div class="presentation-list">${presentations.map((presentation, index) => {
    const number = String(index + 1).padStart(2, "0");
    const base = `presentation-${index + 1}`;
    const open = Boolean(presentation.open);
    const sectionsHtml = presentation.sections.map((section) => `<section class="presentation-section"><h3><span class="presentation-section-label" aria-hidden="true">${escapeHtml(section.label)}</span>${escapeHtml(section.title)}</h3>${section.items.map(([heading, text, note, status]) =>
      `<div class="presentation-item"><h4>${escapeHtml(heading)}${status ? `<span class="status-chip is-${escapeHtml(status)}">${escapeHtml(presentationStatus[status] || status)}</span>` : ""}</h4><p>${escapeHtml(text)}</p>${note ? `<div class="callout"><span class="callout-icon" aria-hidden="true">i</span><p>${escapeHtml(note)}</p></div>` : ""}</div>`
    ).join("")}</section>`).join("");
    return `<div class="presentation ${open ? "is-open" : ""}" id="${base}"><h2 class="presentation-heading"><button class="accordion-trigger" type="button" id="${base}-trigger" aria-expanded="${open}" aria-controls="${base}-panel"><span class="presentation-heading-text"><span class="presentation-number">${number} / PRESENTATION</span><span class="presentation-title">${escapeHtml(presentation.title)}</span><span class="presentation-summary">${escapeHtml(presentation.summary)}</span></span><span class="accordion-icon" aria-hidden="true"></span></button></h2><div class="accordion-panel" id="${base}-panel" role="region" aria-labelledby="${base}-trigger" ${open ? "" : "inert"}><div class="accordion-panel-inner"><div class="accordion-body">${sectionsHtml}</div></div></div></div>`;
  }).join("")}</div>`;
}

function setAccordion(trigger, open) {
  const item = trigger.closest(".presentation");
  trigger.setAttribute("aria-expanded", String(open));
  item.classList.toggle("is-open", open);
  item.querySelector(".accordion-panel").inert = !open;
}

function renderCards(cards) {
  return `<div class="product-grid">${cards.map(([title, description, slug, number]) =>
    `<a class="product-card" href="${pageUrl(slug)}"><span class="card-number">${escapeHtml(number)} / PRODUCT</span><h2>${escapeHtml(title)}<span aria-hidden="true">↗</span></h2><p>${escapeHtml(description)}</p><span class="card-link">Explore documentation <b aria-hidden="true">→</b></span></a>`
  ).join("")}</div>`;
}

function renderLanding() {
  const jumpCards = [
    ["The Chronicle", "Discover how Prog-Net began, how each generation evolved, and the milestones that shaped its journey from an initial C project to Prog-Net 3.0.", "chronicle/beginning", "01"],
    ["The People", "Get to know the five-member Prog-Net 3.0 team, their technical backgrounds, responsibilities, and contributions to the project’s development.", "people/founding-team", "02"],
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
      <div class="section-kicker">A project in progress</div><div class="landing-intro"><h2>Built across generations.<br /><span>Documented with care.</span></h2><div><p>Prog-Net is an academic software development journey that has evolved across three generations. What began as a C-based project gradually expanded into Java Swing applications and has now progressed towards developing independent software products.</p><p>Prog-Net 3.0 introduced four product concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. As development priorities evolved, Handmade Marketplace and Modern Ticketing System remained active, while MicroJobs and Mosque Tracker were placed on hold.</p></div></div>
      <div class="generation-strip"><div><span>01 / FIRST GENERATION</span><strong>Prog-Net 1.0</strong><p>C Language · Initial Development</p></div><div><span>02 / SECOND GENERATION</span><strong>Prog-Net 2.0</strong><p>Java Swing · Games · Utilities · Lobby System</p></div><div><span>03 / CURRENT DIRECTION</span><strong>Prog-Net 3.0</strong><p>Four Product Concepts · Two Active · Two On Hold</p></div></div>
      <div class="home-context-grid"><div><span class="section-kicker">MISSION & VISION</span><strong>Learning Through Building</strong><p>Our goal is to turn classroom knowledge into practical software development experience. Prog-Net encourages experimentation, teamwork, problem-solving, and continuous learning through projects that explore real-world ideas.</p></div><div><span class="section-kicker">LATEST DEVELOPMENT</span><strong>Four Product Concepts</strong><p>Prog-Net 3.0 introduced four software concepts: Handmade Marketplace, MicroJobs, Modern Ticketing System, and Mosque Tracker. Development currently focuses on Handmade Marketplace and Modern Ticketing System, while MicroJobs and Mosque Tracker remain on hold.</p><a href="${pageUrl("chronicle/prog-net-3")}">Read about Prog-Net 3.0 <span aria-hidden="true">→</span></a></div><div><span class="section-kicker">THE PEOPLE</span><strong>Built by a Five-Member Team</strong><p>Prog-Net 3.0 brings together five student developers with different technical skills and responsibilities. Working across multiple product teams, they contribute to planning, design, development, and problem-solving.</p><a href="${pageUrl("people/founding-team")}">Meet the team <span aria-hidden="true">→</span></a></div></div>
    </section>
    <section class="landing-section product-preview"><div class="section-heading"><div><div class="section-kicker">The current direction</div><h2>Four ideas.<br /><span>One evolving project.</span></h2></div><a class="inline-link" href="${pageUrl("products")}">All product docs <span aria-hidden="true">↗</span></a></div>${renderCards(pages.products.cards)}</section>
    <section class="landing-section"><div class="section-heading"><div><div class="section-kicker">Explore the documentation</div><h2>Find your<br /><span>starting point.</span></h2></div><p class="section-side-note">Explore the complete Prog-Net journey through its history, contributors, product concepts, technical development, and future direction. Each section provides a closer look at a different part of the project.</p></div><div class="quick-grid">${jumpCards.map(([title, description, slug, number]) => `<a href="${pageUrl(slug)}" class="quick-card"><span>${number} / SECTION</span><h3>${escapeHtml(title)} <span aria-hidden="true">↗</span></h3><p>${escapeHtml(description)}</p></a>`).join("")}</div></section>
    <section class="home-note"><span class="note-mark" aria-hidden="true">i</span><div><strong>Accuracy before completeness</strong><p>This documentation aims to maintain accuracy, clarity, and transparency throughout the Prog-Net journey. Project details, technical information, development progress, and future plans are presented according to available and verified information. Unconfirmed details are clearly identified rather than presented as facts.</p></div><a href="${pageUrl("about")}">About this documentation <span aria-hidden="true">→</span></a></section>`;
}
function renderArticle(slug, page) {
  const crumbs = `<div class="breadcrumbs"><a href="${pageUrl("home")}">Documentation</a><span aria-hidden="true">/</span><span>${escapeHtml(page.group)}</span><span aria-hidden="true">/</span><span>${escapeHtml(page.title)}</span></div>`;
  const toc = (page.presentations ? page.presentations.map((presentation, index) => `<a href="#presentation-${index + 1}">${escapeHtml(presentation.title)}</a>`) : (page.sections || []).map((section, index) => `<a href="#section-${index + 1}">${escapeHtml(section[0])}</a>`)).join("");
  const tocAside = toc ? `<aside class="toc" aria-label="On this page"><div class="toc-title">ON THIS PAGE</div>${toc}</aside>` : "";
  const body = page.landing ? renderLanding() : `<div class="article-header">${crumbs}<div class="article-kicker">${escapeHtml(page.group.toUpperCase())}<span>·</span> PROG-NET 3.0</div><h1>${escapeHtml(page.title)}</h1><p class="article-intro">${escapeHtml(page.intro)}</p><div class="article-meta"><span><span class="status-dot"></span> Documentation page</span><span>Details subject to confirmation</span></div></div>
      <div class="article-layout"><div class="article-body">${page.cards ? renderCards(page.cards) : ""}${page.presentations ? renderPresentations(page.presentations) : ""}${(page.sections || []).map(sectionMarkup).join("")}</div>${tocAside}</div>`;

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
    const sectionText = [...(page.sections || []), ...(page.presentations || []).flatMap((presentation) => [presentation.title, presentation.summary, ...presentation.sections.flatMap((section) => [section.title, ...section.items])])].flat().join(" ");
    const cardText = (page.cards || []).flat().join(" ");
    return `${page.title} ${page.group} ${page.summary} ${page.intro || ""} ${sectionText} ${cardText}`.toLowerCase().includes(normalized);
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
pageContent.addEventListener("click", (event) => {
  const trigger = event.target.closest(".accordion-trigger");
  if (trigger) setAccordion(trigger, trigger.getAttribute("aria-expanded") !== "true");
});
document.querySelector("#current-year").textContent = new Date().getFullYear();

const initialSlug = new URLSearchParams(window.location.search).get("page") || "home";
renderArticle(pages[initialSlug] ? initialSlug : "home", pages[initialSlug] || pages.home);
