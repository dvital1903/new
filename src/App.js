import "./styles.css";

function createRosterItem(student) {
  let rosterItem = (
    <div className="studentRow">
      <div className="studentData name">{student.first}</div>
      <div className="studentData name">{student.last}</div>
    </div>
  );
  return rosterItem;
}
let students = 
[ 
 { first: "Mikkail", last: "Allan"} ,
 { first: "Justtin", last: "Apupalo"}, 
 { first: "Chritopher", last: "Bonifacio"},  
]
export default function App() {
  
  let studentelemant = students.map(createRosterItem);
  
  
  return (
    <div className="App">
  
      <h1>Code Nation Roster</h1>
      {studentelemant}
   
    </div>
  );
}
