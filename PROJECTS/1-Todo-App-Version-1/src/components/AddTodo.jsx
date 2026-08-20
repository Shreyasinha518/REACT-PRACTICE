function AddTodo() {
  return (
    <div class="row Kg-row">
      <div class="col-6">
        <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success Kg-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
