import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useActionData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

function Detail(props) {
  let { id } = useParams();
  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          <img src={"/neck" + [id] + ".jpg"} width="100%" height="100%"></img>
        </div>
        <div className="col-md-6 content my-3">
          <div className="box4">{props.necklace[id].title}</div>
          <div className="row my-3 box5">
            <div className="col-md-4">
              <p>브랜드</p>
              <p>판매가</p>
              <p>배송비</p>
              <p>적립금</p>
            </div>
            <div className="col-md-8">
              <p>자체브랜드</p>
              <p>가격 : {props.necklace[id].price}</p>
              <p>3000원</p>
              <p>560원 (2%)</p>
            </div>
          </div>
          <div className="row box5">
            <div className="col-md-4">
              <span>▶종류</span>
            </div>
            <div className="col-md-8">
              <select>
                <option>- 옵션을 선택해 주세요 -</option>
                <option>펜던스소 줄포함</option>
                <option>펜던스중 줄포함</option>
                <option>펜던스대 줄포함</option>
              </select>
            </div>
          </div>
          <div className="text1 my-3">
            <p>TOTAL : 0 (0개)</p>
          </div>
          <div className="row">
            <div className="col-md-2 buy-box">🧡</div>
            <div className="col-md-2 buy-box">🚚</div>
            <div
              className="col-md-8 buy-box1"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(
                  addItem({
                    id: props.necklace[id].id,
                    name: props.necklace[id].title,
                    count: 1,
                  })
                );
              }}
            >
              바로구매
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
