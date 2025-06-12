interface formFields {
  email?: string;
  message?: string;
  subject?: string;
  emailError?: boolean;
  messageError?: boolean;
  subjectError?: boolean;
}

interface InputProps {
  name: string;
  value?: string;
  label: string;
  HTMLType: string;
  className?: string;
  error?: boolean;
  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textAreaOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pathName: string;
}

interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  delay?: number;
}
interface Carrier {
  id: number;
  company: string;
  title: string;
  description: string;
  topics: string[];
  image: string;
  delay?: number;
  period?: string;
  startedAt?: string;
  
}


export type { formFields, InputProps, SidebarProps, Repos , Carrier};
