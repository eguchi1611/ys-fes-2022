import Search from "./search";

function SearchModal() {
  return (
    <div className="modal fade" id="searchModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">検索</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
