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
