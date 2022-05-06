console.log('Задание: 4');

var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName = user.getName.bind(user);
console.log(getName());



console.log('Задание: 5');

const user1 = {
    age: 5,
    name: 'Vic',
    getName2: function() {
      return this.name;
    }
  };

const user2 = {
    name: 'Arni',
}
  
const getName2 = user1.getName2.bind(user2);
console.log(getName2());