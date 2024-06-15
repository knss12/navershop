import { useNavigate } from "react-router-dom";

function Accessory(props) {
  let navigate = useNavigate();

  let movinginfo0 = () => {
    if (props.necklace && props.necklace[0].rank) {
      console.log(props.necklace[0].rank);
      navigate("/detail/0");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  let movinginfo1 = () => {
    if (props.necklace && props.necklace[1].rank) {
      console.log(props.necklace[1].rank);
      navigate("/detail/1");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  let movinginfo2 = () => {
    if (props.necklace && props.necklace[2].rank) {
      console.log(props.necklace[2].rank);
      navigate("/detail/2");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  let movinginfo3 = () => {
    if (props.necklace && props.necklace[3].rank) {
      console.log(props.necklace[3].rank);
      navigate("/detail/3");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  let movinginfo4 = () => {
    if (props.necklace && props.necklace[4].rank) {
      console.log(props.necklace[4].rank);
      navigate("/detail/4");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  let movinginfo5 = () => {
    if (props.necklace && props.necklace[5].rank) {
      console.log(props.necklace[5].rank);
      navigate("/detail/5");
    } else {
      console.log("Necklace rank is not available");
    }
  };

  return (
    <div className="row my-3">
      <div className="col-md-4">
        <img src={"/neck0.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo0}
        >
          {props.necklace[0].title}
        </p>
        <p>{props.necklace[0].content}</p>
        <p>Price : {props.necklace[0].price}</p>
      </div>
      <div className="col-md-4">
        <img src={"/neck1.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo1}
        >
          {props.necklace[1].title}
        </p>
        <p>{props.necklace[1].content}</p>
        <p>Price : {props.necklace[1].price}</p>
      </div>
      <div className="col-md-4">
        <img src={"/neck2.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo2}
        >
          {props.necklace[2].title}
        </p>
        <p>{props.necklace[2].content}</p>
        <p>Price : {props.necklace[2].price}</p>
      </div>
      <div className="col-md-4">
        <img src={"/neck3.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo3}
        >
          {props.necklace[3].title}
        </p>
        <p>{props.necklace[3].content}</p>
        <p>Price : {props.necklace[3].price}</p>
      </div>
      <div className="col-md-4">
        <img src={"/neck4.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo4}
        >
          {props.necklace[4].title}
        </p>
        <p>{props.necklace[4].content}</p>
        <p>Price : {props.necklace[4].price}</p>
      </div>
      <div className="col-md-4">
        <img src={"/neck5.jpg"} width="80%" />
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={movinginfo5}
        >
          {props.necklace[5].title}
        </p>
        <p>{props.necklace[5].content}</p>
        <p>Price : {props.necklace[5].price}</p>
      </div>
    </div>
  );
}

export default Accessory;
