console.log("hello from app.js 🤌");

let people = [
      'edan',
      'subash',
      'ken'
];

console.log(people);

for ( let person of people ) {
      console.log(`hello`, person);
      if (person==='edan') {
            console.log('lookin good');
      }
}