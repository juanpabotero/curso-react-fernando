import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // tambien podria hacerlo asi:
    // setCounter((c) => c + 1);
  };
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-bold">CounterApp</h1>
      <h2 className="text-xl">{counter}</h2>
      <div className="flex justify-center gap-1 mt-2">
        <button
          onClick={handleAdd}
          className="py-1 px-2 bg-slate-600 rounded-md hover:bg-slate-400 transition-all"
        >
          +1
        </button>
        <button
          onClick={handleSubstract}
          className="py-1 px-2 bg-slate-600 rounded-md hover:bg-slate-400 transition-all"
        >
          -1
        </button>
        <button
          aria-label="btn-reset"
          onClick={handleReset}
          className="py-1 px-2 bg-slate-600 rounded-md hover:bg-slate-400 transition-all"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
