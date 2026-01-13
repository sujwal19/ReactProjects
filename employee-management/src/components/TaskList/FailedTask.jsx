const FailedTask = ({ data }) => {
  return (
    <div className="h-full shrink-0 w-80 rounded-xl bg-amber-500 p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-base font-medium">{data.date}</h4>
      </div>
      <h2 className="text-2xl mt-7 font-bold">{data.title}</h2>
      <p className="text-base text-left mt-3">{data.description}</p>
      <div className="mt-2">
        <button className="w-full bg-amber-700 px-2 py-1 text-xs">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
