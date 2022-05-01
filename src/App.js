import LearnReact from "./components/learn-react/LearnReact";
import Person from "./components/Person/Person";


function App() {
  return (
    <div className="container">
      
      {/* <LearnReact/> */}
      {/* 2)hay diferencia en usar {} en los props string? */}

      <Person name={"kenny"} lastName={"Luque"} city={"Lima"} age={24} hairColor={"black"}/>
      
      <Person name={"Paul"} lastName={"Luque"} city={"Lima"} age={20} hairColor={"brown"}/>
      
      <Person name="jose" lastName="fino" city="Santiago" age={34} hairColor="white">
      <h4>this is a child2</h4>
      <h3>oli iam another child</h3>
      </Person>

      <Person name="Pablo" lastName="Marmoñl" city="Caracas" age={23} hairColor="rebbecapurple"/>
      
      <Person>
        <h4>this is a child</h4>
      </Person>

    </div>
    
  );
}

export default App;
