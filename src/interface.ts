export interface ColumnProps {
  id: number;
  title: string;
  name: string;
  avatar?: string;
  url: string;
  logo: string;
  detailWiki: string;
  description: string;
  contributor: string;
  classification: string;
  createdAt: Date;
}
export interface SiteProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export interface UserProps {
  id: string;
  isLogin: boolean;
  name: string;
  columnId?: number;
}
export interface PostProps {
  id?: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  contributor: string;
  createdAt: string;
}
export interface RuleProp {
  type: "required" | "email";
  message: string;
}

export interface GlobalDataProps {
  sideNavState: boolean;
  columns: ColumnProps[];
  // sites: SiteProps[];
  sites: ColumnProps[];
  classifySites: ColumnProps[];
  posts?: PostProps[];
  user?: UserProps;
  count: number;
}
