# Javascript-training

const container = document.querySelector(".container");

const people = [
  {
    name: "Bob Smith",
    age: 23,
    hobbies: ["Football","Hiking","Swimming"]
  },
  {
    name: "Sally Brown",
    age: 42,
    hobbies: ["Crossword"]
  },
  {
    name: "Harry Green",
    age: 12,
    hobbies: ["Skateboarding","Singing","Maths"]
  },
]



for(let i=0; i < people.length; i++){
  let personHobbies = "";
  for(let j=0; j < people[i].hobbies.length; j++){
    if(people[i].hobbies.length === 1){
      personHobbies += people[i].hobbies[j];
    }
    else {
      personHobbies += people[i].hobbies[j] + ", ";
    }
  }
  container.innerHTML += `<div>${people[i].name} is ${people[i].age}. Their hobbies are: ${personHobbies}</div>`
}