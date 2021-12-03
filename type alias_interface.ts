//function
//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}


//array
//type alias
type PersonList = string[];

//interface
interface IPersonList {
  [index: number]: string;
}


//intersection
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}

interface ArtistsData {
  artists: {name: string} [];
}
//type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

//intersection
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;


//union types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {} //error - 인터페이스 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.

class Pet implements PetType {} //error -  클래스 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 구현할 수 있습니다.


