function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-slate-400 text-white p-2 rounded-md">
      {children}
    </button>
  );
}

export default Button;
