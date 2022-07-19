<div className="col-3">
  <button
    onClick={(e) => setVal("")}
    value="CE"
    className="btn btn-circle btn shadow fs-4 border  "
  >
    AC
  </button>
</div>;
<div className="col-3">
  <button
    onClick={() => backspace()}
    value="C"
    className="btn btn-circle btn shadow fs-4 border  "
  >
    C
  </button>
</div>;

<div className="col-3">
  <button
    onClick={handleOnClick}
    value="*"
    className="btn btn-circle btn shadow fs-4 border  "
  >
    X
  </button>
</div>;
