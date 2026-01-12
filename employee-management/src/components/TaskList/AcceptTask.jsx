const AcceptTask = ({ data }) => {
  return (
    <div className="h-full shrink-0 w-80 rounded-xl bg-blue-500 p-5 relative">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-base font-medium">17 Aug 2024</h4>
      </div>
      <h2 className="text-2xl mt-7 font-bold">
        Starting learning OSs from todays date
      </h2>
      <p className="text-base text-left mt-3">
        Lorem ipsum dolor sit amet conseur adipisicing elit. Volupes ullam
        dolore quidem iste porro. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam, mollitia.
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-700 px-2 py-1 text-xs">
          Mark as Completed
        </button>
        <button className="bg-red-700 px-2 py-1 text-xs">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
