import { useState } from "react";

function App() {
  return (
    <div>
      <ListDemo />
    </div>
  );
}

function ListDemo() {
  let [list, setList] = useState(["444"]);
  let [imageInput, setImageInput] = useState("");
  let [isinvalid, setIsInvalid] = useState(false);

  let addNewImage = () => {
    if (!imageInput) {
      setIsInvalid(true);
      return;
    }

    let imgInputInt = parseInt(imageInput);
    if (!imgInputInt) {
      setIsInvalid(true);
      return;
    }

    let newList = [imageInput, ...list];
    setList(newList);

    setIsInvalid(false);
  };

  let inputImageHandler = (e) => {
    setImageInput(e.target.value);
  };

  return (
    <div className="text-center bg-info">
      <h1>Image Gallery</h1>
      <br />

      <div className="my-2">
        <input
          type="number"
          placeholder="Enter Image Id"
          value={imageInput}
          onChange={inputImageHandler}
        />
        <input type="button" value="Add New Image" onClick={addNewImage} />

        {isinvalid && <div className="text-danger">Invalid Image Id</div>}
      </div>

      {list.map((item, index) => (
        <EventDemo key={index} imageId={item} title="first" />
      ))}
    </div>
  );
}

function EventDemo({ imageId, title }) {
  let [counter, setCounter] = useState(100);
  let imageUrl = `https://picsum.photos/id/${imageId}/2000`;

  let likeMe = () => {
    counter = counter + 1;

    setCounter(counter);
  };

  // UI
  return (
    <div>
      <img src={imageUrl} alt="" style={{ width: "30vh" }} />
      <h3>Like {counter}</h3>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
