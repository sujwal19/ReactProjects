const employees = [
  {
    id: 1,
    firstName: "Eren",
    email: "employee1@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement landing page animations",
        description:
          "Build high-impact hero section animations using CSS and GSAP to improve user engagement.",
        date: "2026-01-05",
        category: "Frontend",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Convert Figma design to React components",
        description:
          "Translate approved Figma UI designs into reusable React components.",
        date: "2025-12-28",
        category: "Frontend",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Refactor legacy UI code",
        description:
          "Clean up old frontend codebase to improve performance and maintainability.",
        date: "2025-12-20",
        category: "Refactor",
      },
    ],
  },

  {
    id: 2,
    firstName: "Levi",
    email: "employee2@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Improve UI consistency",
        description:
          "Audit the application UI and ensure pixel-perfect spacing, typography, and alignment.",
        date: "2026-01-07",
        category: "UI/UX",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create reusable design system",
        description:
          "Develop a reusable component library following design guidelines.",
        date: "2025-12-30",
        category: "Design System",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Accessibility improvements",
        description:
          "Enhance accessibility by fixing contrast, keyboard navigation, and ARIA labels.",
        date: "2026-01-03",
        category: "Accessibility",
      },
    ],
  },

  {
    id: 3,
    firstName: "Armin",
    email: "employee3@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design backend architecture",
        description:
          "Plan scalable backend architecture for authentication and data management.",
        date: "2026-01-10",
        category: "Backend",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize database queries",
        description:
          "Analyze and optimize slow database queries to improve API response time.",
        date: "2025-12-29",
        category: "Database",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "API documentation",
        description:
          "Create detailed API documentation for frontend and third-party integrations.",
        date: "2026-01-02",
        category: "Documentation",
      },
    ],
  },

  {
    id: 4,
    firstName: "Erwin",
    email: "employee4@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Sprint planning & roadmap",
        description:
          "Define sprint goals, timelines, and assign tasks across the development team.",
        date: "2026-01-06",
        category: "Management",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Technical review meeting",
        description:
          "Review system design decisions and unblock technical challenges.",
        date: "2025-12-27",
        category: "Leadership",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Risk analysis",
        description:
          "Identify technical risks and create contingency plans for releases.",
        date: "2026-01-04",
        category: "Strategy",
      },
    ],
  },

  {
    id: 5,
    firstName: "Reiner",
    email: "employee5@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup CI/CD pipeline",
        description:
          "Configure automated build and deployment pipeline using GitHub Actions.",
        date: "2026-01-08",
        category: "DevOps",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server monitoring setup",
        description:
          "Implement monitoring and alerting for production servers.",
        date: "2025-12-26",
        category: "Infrastructure",
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Production deployment fix",
        description:
          "Resolve failed production deployment caused by environment misconfiguration.",
        date: "2025-12-22",
        category: "Deployment",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
