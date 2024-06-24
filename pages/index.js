import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri'; // Changed to RiEdit2Line for consistency
import EditTasks from './components/EditTasks';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const [tasks, setTasks] = useState([
    'Finish project proposal',
    'Schedule meeting with team',
    'Buy groceries',
    'Pay electricity bill',
    'Call plumber for leaky faucet',
    'Pick up dry cleaning',
    'Read chapter 3 for book club',
    'Exercise for 30 minutes',
    'Water the plants',
    'Update resume',
    'Research vacation destinations',
    'File tax returns',
  ]);

  const [showEdit, setShowEdit] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setSelectedTaskIndex(index);
    setShowEdit(true);
  };

  const handleSaveTask = (editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex] = editedTask;
    setTasks(updatedTasks);
    setSelectedTaskIndex(null);
    setShowEdit(false);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <div>
      {showEdit && (
        <EditTasks
          setShowEdit={setShowEdit}
          tasks={tasks}
          selectedTaskIndex={selectedTaskIndex}
          onSaveTask={handleSaveTask}
        />
      )}

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="max-w-2xl w-full mx-auto border border-black px-10 py-6">
          <div className="flex gap-x-4">
            <input
              type="text"
              placeholder="Enter your task here"
              className="w-full rounded-xl px-4 py-3 border border-black"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="px-8 py-1 border border-black rounded-xl cursor-pointer hover:bg-black hover:text-white"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
          <div className="pt-6">
            <h2 className="underline font-bold text-xl text-center pb-6">
              Your Tasks
            </h2>
            <div className="flex flex-col gap-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-400 rounded-lg px-4 py-2 justify-between"
                >
                  <div className="flex gap-x-2">
                    <h3>{index + 1}</h3>
                    <h1>{task}</h1>
                  </div>
                  <div className="flex gap-x-2">
                    <RiEdit2Line
                      className="size-6 cursor-pointer"
                      onClick={() => handleEdit(index)}
                    />
                    <MdDelete
                      className="size-6 cursor-pointer"
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
