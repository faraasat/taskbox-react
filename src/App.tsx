import { useSelector } from "react-redux";
import "./App.css";
import InboxScreenComponent from "./components/inbox-screen/inbox-screen.component";
import { selectTasks } from "./store/task.slice";

function App() {
  const { defaultValue } = useSelector(selectTasks);
  return (
    <div className="app-alignment">
      <InboxScreenComponent tasks={defaultValue} loading={false} />
    </div>
  );
}

export default App;
