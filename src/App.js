import Todo from "./views/Todo/Todo";
import Msg from "./views/Msg/Msg";
import Record from './views/Record/Record'

const App = () => {
  return (
    <>
      <div className="home-page">
        <div className="container">
          <Todo></Todo>
        </div>
        <div className="container">
          <Msg></Msg>
        </div>
        <div className="container">
          <Record></Record>
        </div>
      </div>
    </>
  );
}
export default App;
