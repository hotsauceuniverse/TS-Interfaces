// Readonly Interface Properties
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'seyoung',
  gender: 'male',
};

p81.gender = 'female'; // 읽기전용 속성이므로 gender에 할당할 수 없습니다.