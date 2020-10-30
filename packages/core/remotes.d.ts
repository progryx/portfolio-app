declare module 'expressCredits/ExpressCreditsApp';

declare module 'acquiring/AcquiringApp' {
  import { Location } from 'history';
  import { ComponentType } from 'React';
  const AcquiringApp: ComponentType<{
    basepath?: string;
    location?: Location;
  }>;
  export = AcquiringApp;
}
