export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if (window.confirm('¿Estas segur@?')){
            cleanTasks()
        }
    }

    return (
        <div className="card d-flex justify-content-between bg-light text-black text-center p-2 border-secondary shadow p-3 mb-5 bg-white rounded">
        <div className="form-check form-switch">
        <input
          className="form-check-input "  
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label style={{ fontWeight: 'bold' }}>Mostrar Tareas Terminadas</label>
        </div>

        <button onClick={handleDelete} className="btn btn-danger btn-md">
            Limpiar
        </button>

      </div>
    )
}