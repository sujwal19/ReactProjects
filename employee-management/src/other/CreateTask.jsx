const CreateTask = () => {
  return (
    <div className="bg-[#1c1c1c]  mt-5 p-5 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-base text-gray-100 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="border border-gray-300 w-4/5 rounded px-2.5 mb-4 outline-none py-1.5"
            />
          </div>
          <div>
            <h3 className="text-base text-gray-100 mb-0.5">Date</h3>
            <input
              type="date"
              className="border border-gray-300 w-4/5 rounded px-2.5 mb-4 outline-none py-1.5"
            />
          </div>
          <div>
            <h3 className="text-base text-gray-100 mb-0.5">Assign to</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="border border-gray-300 w-4/5 rounded px-2.5 mb-4 outline-none py-1.5"
            />
          </div>
          <div>
            <h3 className="text-base text-gray-100 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="border border-gray-300 w-4/5 rounded px-2.5 mb-4  outline-none py-1.5"
            />
          </div>
        </div>
        <div className="w-2/5">
          <h3 className="text-base text-gray-100 mb-0.5">Description</h3>
          <textarea className="border border-gray-300 bg-transparent w-full h-52 rounded px-2.5 outline-none py-2 mb-4 "></textarea>
          <br />
          <button className="bg-emerald-500 hover:bg-emerald-600 w-full py-3 px-6 rounded">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
