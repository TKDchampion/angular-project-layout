/**註冊職業 */
export interface RegisterJobModal {
  job: string;
  jobCompany: string;
  jobCity: string;
  jobType: string;
  doctorId?: string;
}

export interface LearnType {
  id: number;
  name: string;
  isChecked?: boolean;
}

export const DemoLearnType: LearnType[] = [
  {
    id: 1,
    name: '全人健康',
  },
  {
    id: 2,
    name: '疾病防治',
  },
  {
    id: 3,
    name: '制度下之臨床工作',
  },
  {
    id: 4,
    name: '專業素養',
  },
  {
    id: 5,
    name: '從工作中學習及成長',
  },
  {
    id: 6,
    name: '病人照護',
  },
  {
    id: 7,
    name: '人際關係及溝通技巧',
  },
];
