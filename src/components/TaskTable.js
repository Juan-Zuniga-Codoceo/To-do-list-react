import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) =>{
    
    const taskTableRows = (doneValue) => {
        console.log(doneValue);
        return (
            tasks
            .filter((task)=> task.done === doneValue)
            .map((task) => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
              ))
        )
    }
    
    return (
      <table className="table table-light table-striped table-bordered border-secondary shadow-lg p-3 mb-5 bg-white rounded">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>Tareas</th>
          </tr>
        </thead>
        <tbody className="card ">
            {
            taskTableRows(showCompleted)
            }
        </tbody>
      </table>
    );
}