export interface props {
  id: number;
  title: string;
  date: string;
  address: string;
  imagePath: string;
  desc: string;
}

export interface filterState {
  onFilter: (year: string, month: string) => void;
}

export interface childrenProps {
  children: React.ReactNode;
}

export interface state {
  dashboard: {
    id: number;
    title: string;
    date: string;
    address: string;
    imagePath: string;
    isFeatured: boolean;
    desc: string;
  }[];
}

export interface stateLogin {
  login: {
    isLoggedIn: boolean;
    username: string;
    password: string;
  };
}

export interface state2 {
  events: {
    id: number;
    title: string;
    date: string;
    address: string;
    imagePath: string;
    isFeatured: boolean;
    desc: string;
  }[];
}
