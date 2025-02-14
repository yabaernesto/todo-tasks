function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 flex flex-col rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite a descricao da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
