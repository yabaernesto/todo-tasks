import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description:
        "Estudar programacao para se tornar um desenvolvedor fullstack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar ingles para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Machine Learning",
      description: "Estudar Machine Learning para lidar com automacoes",
      isCompleted: false,
    },
  ]);

  function onTakClikc(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    return setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTakClikc={onTakClikc}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
