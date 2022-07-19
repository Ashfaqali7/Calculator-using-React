import React, { useState } from "react";

function Home() {
  const [val, setVal] = useState("");
  const handleOnClick = (e) => {
    setVal(val + e.target.value);
  };
  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };
  const Calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("error");
    }
  };
  return (
    <>
      <div className="container text-light">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center ">CALCULATOR</h1>
            <hr />
          </div>
        </div>
        <div className="row text-dark justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <input
                  type="text"
                  className="form-control form-control-lg mb-4 text-center bg-light shadow fs-4 "
                  value={val}
                />
                <div className="row my-3">
                  <div className="col-3">
                    <button
                      onClick={(e) => setVal("")}
                      value="CE"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      AC
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={() => backspace()}
                      value="C"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      C
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="%"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      %
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="/"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      &divide;
                    </button>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="7"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      7
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="8"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="9"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="*"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="4"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      4
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="5"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="6"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="+"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="1"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      1
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="2"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="3"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="-"
                      className="btn btn-circle btn shadow fs-4 px-3 border  "
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="0"
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={handleOnClick}
                      value="00"
                      className="btn btn-circle btn shadow fs-4  border px-2  "
                    >
                      00
                    </button>
                  </div>
                  <div className="col-3 fs-2">
                    <button
                      onClick={handleOnClick}
                      value="."
                      className="btn btn-circle btn shadow fs-4 px-3 pb-1 mb-1  border  "
                    >
                      .
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={Calculate}
                      value="="
                      className="btn btn-circle btn shadow fs-4 border  "
                    >
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
