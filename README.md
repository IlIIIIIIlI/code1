# GE-RedBack 🎮 
> _Updated 1/May/2023; version 2; sprint2_

Game of Ethics is an interactive game aimed at investigating how decisions made in the process of designing a plane affect the final outcome. Five players take on different roles: Executive, Developer, Pilot, Engineer, and FAA. The game consists of two phases: answering personal questions separately, followed by a group discussion. The final outcome is determined based on the choices made by the players.

## Game Demo (Updated Version 1st May)
[![GE-Redback Demo_Sprint2](https://img.youtube.com/vi/bVS2GSoy7VU/0.jpg)](https://youtu.be/bVS2GSoy7VU "GE-Redback Demo_Sprint2")


## Repository Structure 📁

```
├── docs/                   # Documentation files (organized into subfolders)
├── src/                    # Source code for the Vue.js frontend and backend
├── tests/                  # User/system tests
├── prototypes/             # Prototypes
│   ├── low_fidelity/       # Low fidelity prototypes (screens, mockups, etc.)
│   └── high_fidelity/      # High fidelity prototypes (screens, source files, etc.)
├── ui/                     # UI assets (icons, fonts, backgrounds, etc.)
├── data_samples/           # Data samples necessary to simulate/demonstrate the prototype
└── README.md               # This file (updated regularly with project information)
```

## Branch Management 🌳
Our team maintains separate branches for frontend and backend development (including the database). Each branch contains the latest sprint's original version, enabling developers to pull and push updates during development. Additionally, we have a testing branch for the upcoming sprint, which will replace the main branch after passing all tests. For specific issues, dedicated branches are created to facilitate pull requests and address each problem individually.


```
├── main                    # Main branch (stable version)
├── frontend_sprint_x       # Frontend branch for the current sprint
├── backend_sprint_x        # Backend branch for the current sprint (including database)
├── testing_sprint_y        # Testing branch for the next sprint
└── issue_xx                # Issue-specific branches
```

## Getting Started 🚀

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/game-of-ethics.git`
2. Navigate to the `src` folder: `cd game-of-ethics/src`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run serve` (for the frontend) and `npm run start` (for the backend)

The frontend server should be running at `http://localhost:8080` and the backend server at `http://localhost:3000`.

## Documentation 📚

All project documentation can be found in the `docs` folder. This includes background information, client goals, motivation, personas, user stories, use cases, and more.

## Testing 🧪

Tests can be found in the `tests` folder. To run the tests, navigate to the `tests` folder and run the test script: `npm test`.

## Prototypes 🎨

Low fidelity and high fidelity prototypes can be found in the `prototypes` folder. These include screen designs, mockups, source files, and other visual representations of the application.

## UI Assets 🖼️

All UI assets, such as icons, fonts, and backgrounds, can be found in the `ui` folder.

## Data Samples 📊

Data samples necessary for simulating and demonstrating the prototype can be found in the `data_samples` folder.

## Sprint Updates 📝
- ### Sprint 2 （Updated: 1st May）:
> 🚀 This release represents the completion of Sprint 2 in our project, building upon the foundation established in the previous release. We have addressed the feedback received from Sprint 1, resolved critical issues, and made the current version of the software accessible to the client. The key achievements of this release are as follows:

> 1️⃣ Sprint1-Feedback Improvements: 📝 We have addressed the shortcomings identified in the feedback from Sprint 1, and made adjustments to the following areas:
  > - Project Background, Client Goals, and Motivation
  > - Character Roles
  > - Development Environment
  > - Project Plan
  > - Iteration Planning

> 2️⃣ Resolving Critical Issues: 🔧 We identified and resolved 4 out of the 7 major issues that were impacting the gameplay experience:
>  - Is01: Eliminated duplicate code segments to prevent missed updates
>  - Is03: Adjusted the backend structure of questions and options
>  - Is05: Revised the game's rejoin mechanism
>  - Is07: Resolved server overload to prevent disconnection and game freezing
> 3️⃣ Client Access to Current Software Version: 💼 The client can now access the current version of the software by running the Sprint 2 release code and viewing the demo video. This provides them with an opportunity to evaluate the progress made during this sprint.

---
- ### Sprint 1 （Updated: 26th Mar）:
> 🚀 This release marks the baseline for our project, combining the documentation from Sprint 1 and the source code inherited from the previous semester. It serves as a starting point for our team's development efforts moving forward. The key components included in this release are as follows:

> 1️⃣ Sprint 1 Documentation: 📄 The documentation covers the objectives, user stories, and tasks planned for Sprint 1. It also includes the initial project plan, team roles and responsibilities, and a rough timeline for future sprints.

> 2️⃣ Previous Semester's Source Code: 💻 This release incorporates the source code from the previous semester, which serves as the foundation for our current project. It contains the initial implementation of the core features, along with some preliminary tests and bug fixes.

## Contributing 🤝

We welcome contributions from previous and current developers. If you'd like to contribute, please feel free to submit a pull request or open an issue to discuss your ideas.

## License 📄

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
