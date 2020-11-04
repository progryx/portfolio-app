import { useLocale } from '@hooks/useLocale';

export const useRoutesMap = () => {
  const localedText = useLocale();

  return {
    main: {
      url: '/',
      name: localedText('homeLink'),
    },
    projects: {
      url: '/projects',
      name: localedText('myProjects'),
    },
    timer: {
      url: '/projects/timer',
      name: localedText('projectsTimerName'),
    },
  };
};
