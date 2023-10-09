import { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
    
    const [newTaskName, setNewTaskName] = useState(''); //variable y funcion para actualizar la variable

  const handleSubmit = (e) => {
    e.preventDefault()  //cancelar el evento del formulario de enviar los datos al backend
    createNewTask(newTaskName)
    //localStorage.setItem('tasks',newTaskName)
    setNewTaskName('')
  }
    return(
        <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
        <input
          type="text"
          placeholder="Ingrese una nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)} //onChange es para cuando el valor del input empiece a cambiar/ SetNewTaskName para guardar el valor en newTaskNAme
          className="form-control"
        />
        </div>
        
        <div className="col-3">
        <button className="btn btn-info btn-md">Guardar Tarea</button> 
        </div>
      </form>
    )
}