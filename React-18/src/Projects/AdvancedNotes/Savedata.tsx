const Savedata = () => {
  const;
  return (
    <div className="flex flex-row space-x-5">
      <button
        className="px-4 py-3 bg-blue-700 text-white border border-solid flex justify-center rounded"
        onClick={() => addNote}
      >
        +Save
      </button>
      <input type="color" className="w-10 h-10 border border-solid" />
    </div>
  );
};

export default Savedata;
