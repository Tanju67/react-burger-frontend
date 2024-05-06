/* eslint-disable react/prop-types */
import { BounceLoader } from "react-spinners";

function Spinner({ box = false }) {
  if (!box) {
    return (
      <BounceLoader
        color="#36d7b7"
        loading={true}
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    );
  }
  return (
    <>
      {box && (
        <div className="spinner-box">
          <BounceLoader
            color="#36d7b7"
            loading={true}
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Spinner;
