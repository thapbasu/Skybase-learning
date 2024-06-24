import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const EditTasks = ({ setShowEdit, tasks, selectedTaskIndex, onSaveTask }) => {
  const [editedTask, setEditedTask] = useState('');

  useEffect(() => {
    if (selectedTaskIndex !== null && selectedTaskIndex !== undefined) {
      setEditedTask(tasks[selectedTaskIndex]);
    }
  }, [tasks, selectedTaskIndex]);

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    onSaveTask(editedTask);
  };

  return (
    <div className="w-full bg-black bg-opacity-60 flex items-center justify-center h-full fixed transparent-70">
      <div className="max-w-xl w-full x-auto bg-white rounded-lg px-8 py-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-bold text-2xl"> Edit Task</h2>
          <div onClick={() => setShowEdit(false)}>
            <IoMdClose className="size-7 cursor-pointer" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter your task here"
          className="w-full rounded-xl px-4 py-2 border border-black mb-5"
          value={editedTask}
          onChange={handleInputChange}
        />
        <button
          className="px-6 py-2 bg-red-500 rounded-lg text-white"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTasks;
