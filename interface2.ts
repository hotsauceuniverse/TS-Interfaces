// optional property(1)
interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

hello2({name: 'Sam', age: 30});
hello2({name: 'Mark'});