---
inclusion: always
---
- **Rule**: Update `KOMMON_PRD.md` Document Metadata
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 📋 Document Information`
  - **Trigger**: Any Pull Request merged into the `main` or `develop` branch.
  - **Action**:
    - Update `**Last Updated**` to the current date.
    - *Conditional*: If the merged changes signify a major phase transition, update `**Status**` (e.g., `🟡 Planning Phase` -> `🟢 Development Phase`).

- **Rule**: Mark `KOMMON_PRD.md` Pre-Development Checklist Items
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## ✅ Pre-Development Checklist`
  - **Trigger**:
    - A commit message or Pull Request title explicitly states completion of a checklist item (e.g., "feat: Create GitHub repository").
    - Detection of relevant file/config changes (e.g., `.github/` folder creation for repository setup, `package.json` for Node.js installation).
  - **Action**: Change `[ ]` to `[x]` for the corresponding item.

- **Rule**: Update `KOMMON_PRD.md` Product Roadmap Phase Status
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 🗺️ Product Roadmap`
  - **Trigger**:
    - All associated deliverables/user stories for a specific phase are marked as complete.
    - A Pull Request completing the final deliverable of a phase is merged.
  - **Action**: Update the phase status (e.g., `NOT STARTED 📋` -> `IN PROGRESS 🚧` -> `COMPLETED ✅`).

- **Rule**: Update `KOMMON_PRD.md` Features List Status
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 🚀 Features List`
  - **Trigger**:
    - A feature branch implementing a specific feature is merged into `main` or `develop`.
    - A commit message or Pull Request title explicitly states feature completion (e.g., "feat: Implement User Authentication").
  - **Action**: Update the status of the feature and its sub-items (e.g., `NOT STARTED 📋` -> `COMPLETED ✅`).

- **Rule**: Update `KOMMON_PRD.md` User Story Status
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 👥 User Stories`
  - **Trigger**:
    - A Pull Request that addresses a specific user story (e.g., "US-001: User Authentication") is merged.
    - A commit message or Pull Request description references the user story ID and indicates completion.
  - **Action**: Update the status of the user story's phase (e.g., `NOT STARTED 📋` -> `COMPLETED ✅`).

- **Rule**: Add/Update `KOMMON_PRD.md` Change Log Entry
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 📝 Change Log`
  - **Trigger**:
    - A new release tag is created (e.g., `v1.0.0`).
    - A significant set of features for a planned version is merged.
  - **Action**:
    - Add a new version entry or update an existing one with details on `🆕 Planned Features`, `🎨 Planned UI/UX Improvements`, `🛠️ Planned Technical Improvements`, and `📚 Documentation`.
    - Update the version `Status` from `📋 Planned` to `✅ Released`.

- **Rule**: Update `KOMMON_PRD.md` Next Steps
  - **Target**: `KOMMON_PRD.md`
  - **Section**: `## 📋 Next Steps`
  - **Trigger**: Completion of a listed action (e.g., linked to checklist items or feature completion).
  - **Action**: Mark the completed step (e.g., `1. Review and approve this PRD document` -> `1. [x] Review and approve this PRD document`).

- **Rule**: Mark `DEV_PROCESS.md` Security Checklist Items
  - **Target**: `DEV_PROCESS.md`
  - **Section**: `🔒 Security Checklist Summary`
  - **Trigger**:
    - A commit message or Pull Request title explicitly mentions implementing a security feature (e.g., "feat: Enable GitHub security features").
    - Detection of specific code changes related to security implementation (e.g., adding Zod schemas, configuring NextAuth.js).
  - **Action**: Change `[ ]` to `[x]` for the corresponding item.

- **Rule**: Mark `DEV_PROCESS.md` Project Board Setup Items
  - **Target**: `DEV_PROCESS.md`
  - **Section**: `Project Board Setup`
  - **Trigger**: A commit message or Pull Request title explicitly mentions setting up a project board item.
  - **Action**: Change `[ ]` to `[x]` for the corresponding item.

- **Rule**: Mark `DEV_PROCESS.md` Repository Settings Items
  - **Target**: `DEV_PROCESS.md`
  - **Section**: `Repository Settings`
  - **Trigger**: A commit message or Pull Request title explicitly mentions configuring a repository setting.
  - **Action**: Change `[ ]` to `[x]` for the corresponding item.

**Rule**: Follow Git Workflow as Defined in DEV_PROCESS.md
  - **Target**: All contributors and maintainers
  - **Section**: `Git Workflow` in `DEV_PROCESS.md`
  - **Trigger**: Any code contribution, feature development, bug fix, or documentation update
  - **Action**: 
    - Adhere to the branching strategy (e.g., use `feature/`, `bugfix/`, `hotfix/`, `chore/` prefixes).
    - Ensure all commits follow the conventional commit format.
    - Open Pull Requests against the appropriate base branch (`develop` or `main` as specified).
    - Require code review and successful CI checks before merging.
    - Reference relevant issues, user stories, or tasks in commit messages and PR descriptions.
    - Update documentation and checklists as required by the process.

- **Rule**: Update Steering Files on Phase Transitions
  - **Target**: `.kiro/steering/implementation-guidelines.md`, `.kiro/steering/kommon-context.md`
  - **Trigger**: 
    - Completion of a development phase (e.g., Phase 1B → Phase 1C)
    - Major milestone completion that changes current focus
  - **Action**:
    - Update **Current** phase indicator in `implementation-guidelines.md`
    - Update **Next** phase indicator in `implementation-guidelines.md`
    - Update **Current Phase** in `kommon-context.md`
    - Update phase-specific guidelines to reflect new focus areas
    - Commit with message: `chore: Update steering files for Phase [X]`

- **Rule**: Update Database Schema Steering on Schema Changes
  - **Target**: `.kiro/steering/database-schema.md`
  - **Trigger**: 
    - New Prisma models added to `webapp/prisma/schema.prisma`
    - Significant schema changes (new tables, major field additions)
  - **Action**:
    - Move implemented models from "Phase 1C Models" to "Current Models" section
    - Update model descriptions to reflect actual implementation
    - Add any new planned models for upcoming phases
    - Commit with message: `chore: Update database schema steering`

