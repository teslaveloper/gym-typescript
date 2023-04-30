export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  LogIn = "login",
  Landing = "landing",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
