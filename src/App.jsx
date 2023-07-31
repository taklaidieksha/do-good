import "./index.css";
import { Card } from "./components/Card";
import { peopleData } from "./hardcoded";

function App() {
  const persona1 = peopleData[0];
  const persona2 = peopleData[1];
  const persona3 = peopleData[2];
  const persona4 = peopleData[3];
  const persona5 = peopleData[4];
  return (
    <div className="w-screen h-screen bg-purple-900">
        <div className="flex justify-center items-center p-4">
          <div className="h-[200px] w-[200px] bg-yellow-400 p-2 flex flex-col gap-2 justify-center items-center border-4 rounded-md border-orange-900">
            <label htmlFor="new">Goals for today:</label>
            <input type="text" name="new" id="" />
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>
          </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[800px] h-[300px] bg-white p-4 flex justify-center items-center gap-2">
          <Card persona={persona1} />
          <Card persona={persona2} />
          <Card persona={persona3} />
          <Card persona={persona4} />
          <Card persona={persona5} />
          <div id="addnew">
            <p>qwe</p>
            <p>qweqe</p>
            <p>qweqw</p>
          </div>
        </div>
      </div>
      <script src="./addnew.js"></script>
    </div>
  );
}

export default App;
