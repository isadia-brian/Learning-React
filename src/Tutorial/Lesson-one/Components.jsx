export default function Component (){
  return (
    <div className="mt-4 mx-2">
      <h1 className="my-4 font-semibold underline text-3xl">Amazing-Boxes</h1>
      <div className="flex gap-2 ">
        <AmazingBoxes />
        <AmazingBoxes />
        <AmazingBoxes />
      </div>
    </div>
  );
};

function AmazingBoxes() {
  return <div className="h-24 w-24 bg-yellow-300"></div>;
}
