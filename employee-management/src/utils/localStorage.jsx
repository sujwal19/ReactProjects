const employees = [
  {
    id: 1,
    email: "employee1@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Prepare and submit the monthly sales report",
        date: "2026-01-05",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with existing clients via email",
        date: "2025-12-28",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data migration",
        description: "Migrate old customer data to new system",
        date: "2025-12-20",
        category: "Technical",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design homepage",
        description: "Create a new homepage design mockup",
        date: "2026-01-07",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update brand assets",
        description: "Update logos and brand guidelines",
        date: "2025-12-30",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team meeting",
        description: "Attend weekly design sync meeting",
        date: "2026-01-03",
        category: "Meeting",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API integration",
        description: "Integrate payment gateway API",
        date: "2026-01-10",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug fixes",
        description: "Fix login and signup related bugs",
        date: "2025-12-29",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review pull requests from team",
        date: "2026-01-02",
        category: "Review",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Recruitment screening",
        description: "Screen resumes for frontend developer role",
        date: "2026-01-06",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Interview scheduling",
        description: "Schedule interviews with shortlisted candidates",
        date: "2025-12-27",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Policy update",
        description: "Update work-from-home policy document",
        date: "2026-01-04",
        category: "Administration",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Check and update office inventory list",
        date: "2026-01-08",
        category: "Operations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Vendor payment",
        description: "Process payment for office supplies vendor",
        date: "2025-12-26",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Shipment coordination",
        description: "Coordinate delayed shipment with courier",
        date: "2025-12-22",
        category: "Logistics",
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
};
