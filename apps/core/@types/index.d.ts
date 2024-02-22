/* eslint-disable import/no-default-export */
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.doc' {
  const content: string;
  export default content;
}

declare module '*.pdf' {
  const content: string;
  export default content;
}

declare module '*.rtf' {
  const content: string;
  export default content;
}

declare module '*.txt' {
  const content: string;
  export default content;
}

declare module 'quiz/QuizApp' {
  export default () => JSX;
}

declare module 'users/UsersTable' {
  export default () => JSX;
}

declare module 'dashboard/TaskDashboard' {
  export default () => JSX;
}

declare module 'timer/TimerApp' {
  export default () => JSX;
}
