// let user = {
//   name: "Ayşe",
//   age: 30,
//   isAdmin: false,
// };

// console.log(user);

// function logUser() {
//   console.log("logUser function");
// }

// const logUser = function () {
//   console.log("logUser function");
// };

// const logUser = (user) => "Test " + user;
// const data = logUser("Mehmet");
// console.log(data);

// const sum = (x1, x2) => x1 + x2;
// console.log(sum(3, 4));

const user = {
  id: 1,
  name: "Ayşe",
  age: 30,
  location: {
    country: "Turkey",
    city: "Yalova",
  },
};

// let id = user.id;
// let name = user.name;
// let age = user.age;

// let { name, age, location } = user;

// console.log(isim, yas, konum);

// const logUser = ({ id, age, name, location: { country } }) => {
//   console.log(id);
//   console.log(age);
//   console.log(name);
//   console.log(country);
// };

// logUser(user);

// const colors = ["#0000FF", "#0000F1", "#0000F2"];

// let [kirmizi, ...rest] = colors;

// console.log(kirmizi);
// console.log(rest);

const users = [
  {
    id: 1,
    name: "Ahmet",
    age: 20,
  },
  {
    id: 2,
    name: "Mehmet",
    age: 30,
  },
  {
    id: 3,
    name: "Hande",
    age: 40,
  },
];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }

// users.map((user) => console.log(user.name));

const filtered = users.filter((user) => user.age > 10);

console.log(filtered);
