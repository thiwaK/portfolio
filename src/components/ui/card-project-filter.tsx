export function FilterControls() {
  return (
    <div className="flex gap-2 mb-4">
      <label>
        <input type="radio" name="filter" value="all" defaultChecked hidden />
        <span className="btn btn-sm">All</span>
      </label>
      <label>
        <input type="radio" name="filter" value="featured" hidden />
        <span className="btn btn-sm">Featured</span>
      </label>
      <label>
        <input type="radio" name="filter" value="in-progress" hidden />
        <span className="btn btn-sm">In Progress</span>
      </label>
    </div>
  );
}
