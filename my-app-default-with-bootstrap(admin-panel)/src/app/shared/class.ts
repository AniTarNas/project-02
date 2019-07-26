export class Admin {
  name: string;
  password: string;
}

export class User {
  userName: string;
  password: string;
  level01: boolean;
  level02: boolean;
  level03: boolean;
  level04: boolean;
  level05: boolean;
  level06: boolean;
  finish: boolean;
  id: number;
  level: number;
}

export class Test {
  id: number;
  number: string;
  oneQuestion: string;
  answers: string[];
  trueAnswer: string;
}

export class Info {
  id: number;
  title: string;
  text: string;
}
