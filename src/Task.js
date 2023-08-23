import React from "react";
import { formatDistanceToNow } from "date-fns";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const result = differenceInDays(new Date(taskObj.deadline), new Date());
  const simdi = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
  });
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <h1 className="bg-teal-500">
          {result > 4 && <p>{result} gün sonra</p>}
          {simdi}
        </h1>
        <h1 className="bg-rose-500">
          {result < 4 && result > 0 && <p>{result} gün sonra</p>}
        </h1>
        <h1 className="bg-rose-500">
          {result < 0 && <p>{result} gün geçti</p>}
        </h1>
        <span>{taskObj.deadline}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
