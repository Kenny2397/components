import LearnReact from "./components/learn-react/LearnReact";
import Person from "./components/Person/Person";


function App() {
  return (
    <div className="container">
      
      {/* <LearnReact/> */}
      <Person name="kenny" lastName="Luque" city="Lima" age={24} hairColor="black"/>
      <Person name="Paul" lastName="Luque" city="Lima" age={20} hairColor="brown"/>
      <Person name="jose" lastName="fino" city="Santiago" age={34} hairColor="white"/>
      <Person name="Pablo" lastName="Marmoñl" city="Caracas" age={23} hairColor="rebbecapurple"/>
    </div>
    
  );
}

export default App;
