import AmazingBox from "./Tutorial/Lesson-Two/AmazingBox";
import Component from "./Tutorial/Lesson-Two/Component";

function App() {
  return (
    <div>
      <Component />
      <div className="flex gap-2 ">
        <AmazingBox />
        <AmazingBox />
        <AmazingBox />
      </div>
    </div>
  );
}

export default App;
