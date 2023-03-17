import React from 'react'

const Task = ({ task }) => {

    function handleClick(e) {
        e.preventDefault();
        fetch(`https://emmerce-task-tracker-api-production.up.railway.app/tasks/${task.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((task) => console.log(task));
          }
        });
    }
  return (
    <>
        <div className="flex w-full py-2">
            <div className="flex flex-col justify-start w-1/2">
                <h4 className="text-start text-white font-semibold damn">
                    {task.title}
                </h4>  
            </div>
            <div className="flex flex-col items-end w-1/2 hover:cursor-pointer">
                <h4 onClick={handleClick} className="text-start text-white font-semibold damn">
                    X
                </h4>  
            </div>
        </div>

        <p className="text-start text-white pb-2 damn">
            {task.date}
        </p>
    </>
  )
}

export default Task
