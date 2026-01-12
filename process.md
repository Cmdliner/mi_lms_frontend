# Frontend MVP Implementation Process

This document outlines the step-by-step implementation plan for the **MI LMS Frontend**. The development is structured into "Issues" to simulate a professional workflow.

## 1. Tech Stack & Architecture

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 (Vanilla, using CSS variables for themeing)
- **State Management:** React Context (Auth) + TanStack Query (Server State)
- **Forms:** React Hook Form + Zod
- **Data Fetching:** Axios (with Interceptors for JWT Refresh)
- **Icons:** @phosphor-icons/react (Elegant, professional style)

### Design Philosophy
- **Aesthetics:** Premium, modern, using a "Green/Brown" earth-tone palette or similar high-quality scheme.
- **UX:** Smooth transitions, loading skeletons, responsive layouts.
- **Structure:** Modular, feature-folder based inside `app/`.

---

## 2. Issue Roadmap

### Phase 1: Foundation & Infrastructure

#### [ ] ISSUE-001: Project Configuration & Utilities
**Goal:** Initialize the core tools and helper functions.
- [ ] Install dependencies: `axios`, `@tanstack/react-query`, `@phosphor-icons/react`, `clsx`, `tailwind-merge`, `zod`, `react-hook-form`.
- [ ] Setup `lib/axios.ts`:
    - Configure Base URL (`http://localhost:3000` or env var).
    - **Crucial:** Add response interceptor to catch `401 Unauthorized`.
    - Implement logic to call `/auth/refresh` and retry the original request upon 401.
- [ ] Setup `lib/utils.ts`: `cn` helper for tailwind classes.
- [ ] Configure `globals.css`: Define CSS variables for colors (`--primary`, `--background`, etc.) to support the premium theme.

#### [ ] ISSUE-002: Authentication Context
**Goal:** Manage user session state globally.
- [ ] Create `context/AuthContext.tsx`.
- [ ] State: `user` (User | null), `isLoading` (boolean).
- [ ] Methods: `login(credentials)`, `logout()`.
- [ ] **On Mount:** Attempt to fetch the user profile (`/users/students`, `/users/teachers`, or a generic `/auth/me` if added).
    *   *Note based on backend:* The backend allows checking token validity via endpoints. We might need a "Get Me" endpoint or infer from role-based fetches.

### Phase 2: Public Interfaces

#### [ ] ISSUE-003: Landing Page & Login
**Goal:** A "Wow" factor public entry point.
- [ ] **Landing Page (`/`):**
    - Hero section ("Empowering Education").
    - "Login" CTA button.
- [ ] **Login Page (`/login`):**
    - **Design:** Split screen (Image on left/right, form on other).
    - **Form:**
        - Fields: Email/ID, Password.
        - **Role Selector:** Tabs or Dropdown to select User Role (Student, Teacher, Guardian, Admin) - *Required by backend DTOs*.
    - **Action:** Call `useAuth.login`. Redirect to `/dashboard` on success.

### Phase 3: Dashboard Skeleton

#### [ ] ISSUE-004: Dashboard Layout Strategy
**Goal:** A shared shell for the authenticated app.
- [ ] Create `app/dashboard/layout.tsx`.
- [ ] **Sidebar:**
    - Dynamic items based on `user.role`.
    - **Admin:** Users, Classes, Subjects, Promotions.
    - **Teacher:** My Classes, Grading, Subjects.
    - **Student:** My Results, Profile.
- [ ] **Top Header:** User Avatar, Breadcrumbs, Logout Button.

### Phase 4: Role-Based Features (The MVP)

#### [ ] ISSUE-005: Admin - User & Class Management
**Goal:** Enable setting up the school structure.
- [ ] **Users Page:** Table listing Users. Button to "Create User" (Modal with `CreateStudentDto` etc forms).
- [ ] **Classrooms Page:**
    - List Classrooms.
    - "Create Classroom" Modal.
    - **Drill-down:** Click class -> Assign Teacher / Add Student.

#### [ ] ISSUE-006: Teacher - Grading & Management
**Goal:** Allow teachers to manage their work.
- [ ] **My Classes:** List classes assigned to the teacher.
- [ ] **Grading Portal:**
    - Select Class -> Select Subject -> List Students.
    - Input fields for scores.
    - Submit to `/results` endpoints.

#### [ ] ISSUE-007: Student - Results & Profile
**Goal:** Allow students to view progress.
- [ ] **My Results:**
    - Filter by Session/Term.
    - Graphic display of GPA/Scores (Chart.js or similar simple visual).
- [ ] **Profile:**
    - View/Edit basic info.
    - View Guardian info.

---

## 3. Implementation Guidelines
- **DTO to Zod:** Match the backend DTOs exactly in Zod schemas.
- **Components:** Build reusable UI components (Button, Input, Card, Table) in `components/ui` first to ensure consistency.
- **Error Handling:** Use `toast` notifications for API success/errors.
