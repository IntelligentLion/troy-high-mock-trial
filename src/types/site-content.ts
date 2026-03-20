export interface CoreValues {
  legalStudies: string;
  competition: string;
  skills: string;
}

export interface Coach {
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

export interface TeamInfo {
  name: string;
  founded: number;
  school: string;
  description: string;
  coreValues: CoreValues;
  coaches: Coach[];
}

export interface Alumni {
  name: string;
  graduationYear: string;
  years: string[];
  role: string;
  college: string;
  major: string;
  achievements: string[];
  photo: string;
}

export interface GalleryItem {
  url: string;
  year: string;
  season: string;
  caption: string;
  category: string;
  downloaded: boolean;
  localPath: string;
}

export interface Officer {
  name: string;
  role: string;
  photo: string;
  competitions: string[];
  awards: string[];
}

export interface CurrentYear {
  season: string;
  note: string;
  officers: Officer[];
  members: Officer[];
}

export interface CompetitionResource {
  name: string;
  url: string;
  type: string;
}

export interface Competition {
  organization: string;
  programName: string;
  resources: CompetitionResource[];
  sections: string[];
  results: string[];
}

export interface Contact {
  email: string;
  advisorName: string;
  advisorEmail: string;
  instagram: string;
  instagramHandle: string;
  linkedin: string;
  address: string;
}

export interface SiteContent {
  team: TeamInfo;
  alumni: Alumni[];
  gallery: GalleryItem[];
  currentYear: CurrentYear;
  competition: Competition;
  materials: unknown[];
  sponsors: unknown[];
  achievements: string[];
  contact: Contact;
}
