export interface TrainingDay {
  day: string;
  title: string;
  topics: string[];
  learningObjectives: string[];
  sampleQuestions: string[];
  tasks: string[];
}

export const TRAINING_DAYS: TrainingDay[] = [
  {
    day: 'day1',
    title: 'Angular Architecture and Components',
    topics: [
      'Angular architecture (components, modules, services)',
      'Data binding',
      'Directives',
      'Custom directives'
    ],
    learningObjectives: [
      'Understand Angular component-based architecture',
      'Create and manage components, use data binding, and build custom directives'
    ],
    sampleQuestions: [
      'What is the purpose of an Angular module?',
      'Explain the difference between one-way and two-way data binding.',
      'How do you create a custom directive in Angular?'
    ],
    tasks: [
      'Create an Angular project with multiple components.',
      'Implement a form with two-way data binding using ngModel.',
      'Build a custom directive to highlight elements on hover.'
    ]
  },
  {
    day: 'day2',
    title: 'Angular Templates and Pipes',
    topics: [
      'Template syntax (interpolation, property/event binding)',
      'Structural directives (*ngIf, *ngFor)',
      'Custom pipes'
    ],
    learningObjectives: [
      'Master Angular template syntax and directives',
      'Create reusable custom pipes for data transformation'
    ],
    sampleQuestions: [
      'What is the difference between property binding and interpolation?',
      'How does *ngFor optimize rendering in Angular?',
      'How do you create a custom pipe, and when would you use it?'
    ],
    tasks: [
      'Build a dynamic list with *ngFor and conditional rendering with *ngIf.',
      'Create a custom pipe to format text, such as capitalize or filter.'
    ]
  },
  {
    day: 'day3',
    title: 'Angular Services and Dependency Injection',
    topics: [
      'Services',
      'Dependency injection',
      'HttpClient for API calls'
    ],
    learningObjectives: [
      'Create reusable services for business logic',
      'Make HTTP requests to a mock API'
    ],
    sampleQuestions: [
      'What is dependency injection in Angular, and why is it useful?',
      'How do you use HttpClient to fetch data from an API?',
      'How do you handle errors in HTTP requests?'
    ],
    tasks: [
      'Create a service to fetch data from a public API, such as JSONPlaceholder.',
      'Display API data in a component with error handling.'
    ]
  },
  {
    day: 'day4',
    title: 'Angular Routing',
    topics: [
      'Angular Router (routes, route parameters, child routes)',
      'Lazy loading',
      'Route guards'
    ],
    learningObjectives: [
      'Implement navigation using Angular Router',
      'Secure routes with guards and optimize with lazy loading'
    ],
    sampleQuestions: [
      'How do you configure routes with parameters in Angular?',
      'What is lazy loading, and how does it improve performance?',
      'How do you implement a CanActivate guard?'
    ],
    tasks: [
      'Create an app with multiple routes, including a parameterized route.',
      'Implement a route guard to restrict access to a route.'
    ]
  },
  {
    day: 'day5',
    title: 'Angular Forms',
    topics: [
      'Template-driven forms',
      'Reactive forms',
      'Form validation',
      'Custom validators'
    ],
    learningObjectives: [
      'Build and validate forms using both template-driven and reactive approaches',
      'Create custom validators for complex form logic'
    ],
    sampleQuestions: [
      'What is the difference between template-driven and reactive forms?',
      'How do you implement a custom validator in a reactive form?',
      'How do you handle form submission errors?'
    ],
    tasks: [
      'Build a reactive form with custom validation, such as email format and password strength.',
      'Create a template-driven form with basic validation.'
    ]
  },
  {
    day: 'day6',
    title: 'State Management with NgRx',
    topics: [
      'NgRx actions',
      'Reducers',
      'Selectors',
      'Effects',
      'State persistence'
    ],
    learningObjectives: [
      'Manage complex app state using NgRx',
      'Persist state across sessions'
    ],
    sampleQuestions: [
      'What is the purpose of actions and reducers in NgRx?',
      'How do you use effects to handle side effects in NgRx?',
      'How can you persist NgRx state using local storage?'
    ],
    tasks: [
      'Implement NgRx to manage a list of items, such as tasks or products.',
      'Persist state using local storage or session storage.'
    ]
  },
  {
    day: 'day7',
    title: 'Angular Performance and UI/UX',
    topics: [
      'Change detection (OnPush)',
      'Lazy loading',
      'Angular Material',
      'Responsive design',
      'Accessibility'
    ],
    learningObjectives: [
      'Optimize Angular apps for performance',
      'Build professional UI with Angular Material and ensure accessibility'
    ],
    sampleQuestions: [
      'How does OnPush change detection improve performance?',
      'What is Angular Material, and how does it enhance UI?',
      'What are accessibility best practices in Angular?'
    ],
    tasks: [
      'Refactor a component to use OnPush change detection.',
      'Build a form using Angular Material components with responsive design.'
    ]
  },
  {
    day: 'day8',
    title: 'Advanced Angular Components',
    topics: [
      'Dynamic components',
      'Component communication (@Input, @Output)',
      'Content projection'
    ],
    learningObjectives: [
      'Create dynamic and reusable components',
      'Implement advanced component interactions'
    ],
    sampleQuestions: [
      'How do you create a dynamic component in Angular?',
      'What is content projection, and how is it used?',
      'How do @Input and @Output facilitate component communication?'
    ],
    tasks: [
      'Create a dynamic component loaded based on user input.',
      'Build a parent-child component structure with @Input and @Output.'
    ]
  },
  {
    day: 'day9',
    title: 'Angular Authentication and Interceptors',
    topics: [
      'JWT-based authentication',
      'HTTP interceptors',
      'Role-based routing'
    ],
    learningObjectives: [
      'Implement authentication in Angular',
      'Use interceptors to handle JWT tokens and API requests'
    ],
    sampleQuestions: [
      'How do you store and manage JWT tokens in Angular?',
      'What is the role of an HTTP interceptor?',
      'How do you implement role-based navigation?'
    ],
    tasks: [
      'Build a login form that integrates with a mock JWT API.',
      'Create an interceptor to attach JWT tokens to HTTP requests.'
    ]
  },
  {
    day: 'day10',
    title: 'Angular Testing',
    topics: [
      'Jasmine',
      'Karma',
      'Unit testing components and services',
      'Mocking HTTP requests'
    ],
    learningObjectives: [
      'Write and run unit tests for Angular apps',
      'Mock dependencies for testing'
    ],
    sampleQuestions: [
      'What is the role of Jasmine and Karma in Angular testing?',
      'How do you mock an HTTP service in Angular tests?',
      'What is the purpose of TestBed in Angular testing?'
    ],
    tasks: [
      'Write unit tests for a component and a service.',
      'Mock an HTTP service for testing API calls.'
    ]
  },
  {
    day: 'day11',
    title: 'QR Code Generation and Language Translation',
    topics: [
      'QR code generation, such as using ngx-qrcode',
      'Language translation, such as ngx-translate'
    ],
    learningObjectives: [
      'Generate QR codes based on user data, such as text, URL, or logo',
      'Implement multilingual support in Angular'
    ],
    sampleQuestions: [
      'How do you generate a QR code in Angular?',
      'What is ngx-translate, and how does it handle language translation?',
      'How can you include a logo in a QR code?'
    ],
    tasks: [
      'Create a component to generate QR codes as PNG or JPEG for user data.',
      'Implement a language toggle, such as English and Spanish, using ngx-translate.'
    ]
  },
  {
    day: 'day12',
    title: 'Mini-Project: Angular Dashboard',
    topics: [
      'Build an Angular dashboard with authentication',
      'State management',
      'QR code generation'
    ],
    learningObjectives: [
      'Combine Angular skills into a cohesive project',
      'Implement professional UI and features'
    ],
    sampleQuestions: [
      'How did you structure the dashboard components?',
      'What state management approach did you use, and why?',
      'How did you ensure the app is responsive and accessible?'
    ],
    tasks: [
      'Build a dashboard with user authentication, data display, and QR code generation.',
      'Use Angular Material for UI and NgRx for state management.'
    ]
  }
];

export const DOTNET_TRAINING_DAYS: TrainingDay[] = [
  {
    day: 'day13',
    title: 'ASP.NET Core Web API and LINQ',
    topics: [
      'RESTful Web API',
      'LINQ queries',
      'Status codes',
      'DTOs (Data Transfer Objects)'
    ],
    learningObjectives: [
      'Build robust REST APIs with .NET Core',
      'Use LINQ for data querying and understand DTOs'
    ],
    sampleQuestions: [
      'What are the key principles of a RESTful API?',
      'How does LINQ simplify data operations in .NET?',
      'What is a DTO, and how is it used in a Web API?'
    ],
    tasks: [
      'Create a Web API with CRUD endpoints using DTOs.',
      'Write LINQ queries to filter and sort data.'
    ]
  },
  {
    day: 'day14',
    title: 'Entity Framework Core',
    topics: [
      'EF Core ORM',
      'Migrations',
      'Relationships',
      'Code-first approach',
      'DTOs in EF Core'
    ],
    learningObjectives: [
      'Use EF Core for database operations',
      'Design relational databases and map to DTOs'
    ],
    sampleQuestions: [
      'How do you define a one-to-many relationship in EF Core?',
      'What is the purpose of migrations in EF Core?',
      'How do you map an entity to a DTO in EF Core?'
    ],
    tasks: [
      'Create a database with one-to-many relationships using EF Core.',
      'Map entities to DTOs for API responses.'
    ]
  },
  {
    day: 'day15',
    title: 'Dapper and NHibernate',
    topics: [
      'Dapper micro-ORM',
      'NHibernate ORM',
      'Comparison with EF Core'
    ],
    learningObjectives: [
      'Use Dapper for lightweight database access',
      'Understand NHibernate basics and its use cases'
    ],
    sampleQuestions: [
      'What are the advantages of Dapper over EF Core?',
      'How does NHibernate handle database mappings?',
      'When would you choose Dapper over NHibernate?'
    ],
    tasks: [
      'Create a Web API endpoint using Dapper for data retrieval.',
      'Implement a simple NHibernate query for comparison.'
    ]
  },
  {
    day: 'day16',
    title: 'Authentication in .NET',
    topics: [
      'Basic Authentication',
      'JWT Authentication',
      'Refresh Tokens',
      'Role-Based Authorization'
    ],
    learningObjectives: [
      'Implement multiple authentication mechanisms',
      'Secure APIs with role-based access'
    ],
    sampleQuestions: [
      'What is the difference between Basic and JWT authentication?',
      'How do you implement refresh tokens in .NET?',
      'How do you assign roles to users in ASP.NET Core?'
    ],
    tasks: [
      'Create a Web API with Basic and JWT authentication.',
      'Implement refresh token logic and role-based authorization.'
    ]
  },
  {
    day: 'day17',
    title: 'Middleware and CORS',
    topics: [
      'Custom middleware',
      'CORS configuration',
      'Handling CORS issues'
    ],
    learningObjectives: [
      'Build and use custom middleware in .NET',
      'Enable and troubleshoot CORS for cross-origin requests'
    ],
    sampleQuestions: [
      'What is the role of middleware in ASP.NET Core?',
      'How do you enable CORS in a .NET API?',
      'How do you debug CORS-related issues?'
    ],
    tasks: [
      'Create a custom middleware for request logging.',
      'Configure CORS to allow specific origins.'
    ]
  },
  {
    day: 'day18',
    title: 'CQRS and MediatR',
    topics: [
      'CQRS pattern',
      'MediatR library',
      'Commands and queries'
    ],
    learningObjectives: [
      'Understand CQRS and its benefits',
      'Use MediatR to implement CQRS in .NET'
    ],
    sampleQuestions: [
      'What is the CQRS pattern, and how does it differ from traditional CRUD?',
      'How does MediatR simplify CQRS implementation?',
      'What is a mediator in the context of CQRS?'
    ],
    tasks: [
      'Implement a CQRS-based API using MediatR for a simple feature, such as user management.',
      'Create separate command and query handlers.'
    ]
  },
  {
    day: 'day19',
    title: 'AutoMapper and Serilog',
    topics: [
      'AutoMapper for object mapping',
      'Serilog for structured logging'
    ],
    learningObjectives: [
      'Automate object mapping with AutoMapper',
      'Implement logging with Serilog'
    ],
    sampleQuestions: [
      'What is AutoMapper, and how does it simplify DTO mapping?',
      'How do you configure Serilog in a .NET application?',
      'What are the benefits of structured logging?'
    ],
    tasks: [
      'Use AutoMapper to map entities to DTOs in a Web API.',
      'Configure Serilog to log API requests and errors.'
    ]
  },
  {
    day: 'day20',
    title: 'Real-time Applications with SignalR',
    topics: [
      'SignalR for real-time communication',
      'Integrating SignalR with Angular'
    ],
    learningObjectives: [
      'Build real-time features using SignalR',
      'Integrate SignalR with Angular for live updates'
    ],
    sampleQuestions: [
      'What is SignalR, and how does it enable real-time communication?',
      'How do you connect an Angular app to a SignalR hub?',
      'What are some use cases for SignalR?'
    ],
    tasks: [
      'Create a SignalR hub for a chat feature.',
      'Integrate the hub with an Angular app for real-time messaging.'
    ]
  },
  {
    day: 'day21',
    title: 'Image Handling, PDF, and Excel Generation',
    topics: [
      'Image upload/download',
      'PDF generation',
      'Excel generation',
      'QR code generation'
    ],
    learningObjectives: [
      'Handle file uploads and downloads in .NET',
      'Generate PDF and Excel files with dynamic data'
    ],
    sampleQuestions: [
      'How do you handle image uploads in a .NET API?',
      'What libraries can you use to generate PDFs in .NET?',
      'How do you create a QR code in a .NET API?'
    ],
    tasks: [
      'Create an API endpoint for image upload/download.',
      'Generate a PDF and Excel report with sample data.',
      'Create a QR code as PNG or JPEG based on user data.'
    ]
  },
  {
    day: 'day22',
    title: 'Email and Rate Limiting',
    topics: [
      'Sending emails with attachments',
      'MailKit',
      'Rate limiting'
    ],
    learningObjectives: [
      'Send emails with attachments in .NET',
      'Apply rate limiting to prevent API abuse'
    ],
    sampleQuestions: [
      'How do you configure email sending in .NET using MailKit?',
      'What is rate limiting, and why is it important?',
      'How do you implement rate limiting in ASP.NET Core?'
    ],
    tasks: [
      'Create an API to send emails with PDF attachments.',
      'Implement rate limiting on an API endpoint.'
    ]
  },
  {
    day: 'day23',
    title: 'Minimal APIs and Environment Variables',
    topics: [
      'Minimal APIs in .NET 6+',
      'Environment variables'
    ],
    learningObjectives: [
      'Build lightweight APIs using Minimal APIs',
      'Manage configuration with environment variables'
    ],
    sampleQuestions: [
      'What are Minimal APIs, and how do they differ from controller-based APIs?',
      'How do you access environment variables in .NET?',
      'What are the benefits of Minimal APIs?'
    ],
    tasks: [
      'Create a Minimal API for a simple CRUD operation.',
      'Configure and use environment variables in the API.'
    ]
  },
  {
    day: 'day24',
    title: 'Elastic Logging and Kibana',
    topics: [
      'Elastic logging with Serilog',
      'Elasticsearch',
      'Kibana'
    ],
    learningObjectives: [
      'Set up structured logging with Elasticsearch',
      'Visualize logs using Kibana'
    ],
    sampleQuestions: [
      'How do you configure Serilog to send logs to Elasticsearch?',
      'What is Kibana, and how does it help with log analysis?',
      'Why is centralized logging important in production?'
    ],
    tasks: [
      'Configure Serilog to send logs to Elasticsearch.',
      'Set up a Kibana dashboard to visualize API logs.'
    ]
  },
  {
    day: 'day25',
    title: 'Deployment and Optimization',
    topics: [
      'Deploying to IIS',
      'Docker basics',
      'Database optimization',
      'Indexing',
      'Stored procedures'
    ],
    learningObjectives: [
      'Deploy .NET APIs to IIS and understand containerization',
      'Optimize database performance'
    ],
    sampleQuestions: [
      'What are the steps to deploy a .NET API to IIS?',
      'How does indexing improve database performance?',
      'What is the role of stored procedures in database operations?'
    ],
    tasks: [
      'Deploy a .NET API to IIS.',
      'Create a Docker container for the API.',
      'Optimize a database table with indexing and stored procedures.'
    ]
  },
  {
    day: 'day26',
    title: 'Project 1: User Authentication API - Database and Endpoints',
    topics: [
      'Registration',
      'Login',
      'Roles',
      'Permissions'
    ],
    learningObjectives: [
      'Implement a secure authentication system',
      'Integrate with Angular for front-end interaction'
    ],
    sampleQuestions: [
      'How did you secure user registration and login endpoints?',
      'What approach did you use for role-based menu access?',
      'How did you handle permission assignment in the API?'
    ],
    tasks: [
      'Design database schema and API endpoints for registration, login, roles, and permissions.'
    ]
  },
  {
    day: 'day27',
    title: 'Project 1: User Authentication API - Authentication',
    topics: [
      'JWT authentication',
      'Refresh tokens',
      'Role-based authorization'
    ],
    learningObjectives: [
      'Implement secure token-based authentication',
      'Protect APIs with role-based authorization'
    ],
    sampleQuestions: [
      'How did you secure user registration and login endpoints?',
      'What approach did you use for role-based menu access?',
      'How did you handle permission assignment in the API?'
    ],
    tasks: [
      'Implement JWT authentication, refresh tokens, and role-based authorization.'
    ]
  },
  {
    day: 'day28',
    title: 'Project 1: User Authentication API - Angular Front End',
    topics: [
      'Angular login',
      'Role-based menu',
      'Permission management'
    ],
    learningObjectives: [
      'Connect Angular screens to authentication APIs',
      'Build role-aware front-end behavior'
    ],
    sampleQuestions: [
      'How did you secure user registration and login endpoints?',
      'What approach did you use for role-based menu access?',
      'How did you handle permission assignment in the API?'
    ],
    tasks: [
      'Build an Angular front end to interact with the API for login, role-based menu, and permission management.'
    ]
  },
  {
    day: 'day29',
    title: 'Project 2: Real-time POS Application',
    topics: [
      'POS API',
      'SignalR',
      'EF Core',
      'QR code generation'
    ],
    learningObjectives: [
      'Create a real-time POS system with inventory and transaction features',
      'Integrate QR code generation and real-time updates'
    ],
    sampleQuestions: [
      'How did you implement real-time updates in the POS app?',
      'What challenges did you face in integrating QR code generation?',
      'How did you ensure the app is performant and secure?'
    ],
    tasks: [
      'Build a .NET API for POS products, transactions, and inventory.',
      'Create an Angular front end with SignalR for real-time updates.',
      'Add QR code generation for transaction receipts.'
    ]
  },
  {
    day: 'day30',
    title: 'Final Assessment and Deployment',
    topics: [
      'End-to-end testing',
      'Deployment to IIS or Azure',
      'Mock interview',
      'Career advice'
    ],
    learningObjectives: [
      'Test and deploy both projects',
      'Prepare for real-world interviews'
    ],
    sampleQuestions: [
      'How did you test the authentication and POS APIs?',
      'What deployment challenges did you encounter?',
      'How would you improve the projects for scalability?'
    ],
    tasks: [
      'Write end-to-end tests for both projects.',
      'Deploy both projects to IIS or Azure.',
      'Conduct a mock technical interview.'
    ]
  }
];
