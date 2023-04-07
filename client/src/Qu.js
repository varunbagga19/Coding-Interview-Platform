import {useState,useEffect} from "react";
import io from "socket.io-client";
import _ from 'lodash'
const socket=io.connect("http://localhost:5000");
// const socket = io('https://plasma-interview.onrender.com');


function Qu() {
  const [message, setMessage] = useState("");

  const debouncedSetMessage = _.debounce((value) => {
    socket.emit("question", value);
  }, 250);

  function handleChange(event) {
    const value = event.target.value;
    setMessage(value);
    debouncedSetMessage(value);
  }

  useEffect(() => {
    socket.on("questionRe", (data) => {
      setMessage(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Questions</h1>
        <form>
          <input
            type="text"
            name="chat"
            placeholder="Questions will be shown here...."
            onChange={handleChange}
            value={message}
          />
        </form>
      </header>
    </div>
  );
}

export default Qu;