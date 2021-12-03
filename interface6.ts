// interface extends interface
interface IPerson2 {
   name: string;
   age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: '장세영',
  city: '부천',
};
