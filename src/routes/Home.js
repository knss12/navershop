import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-6">
          <img src={"/nikeairpods.jpg"} width="80%"></img>
        </div>
        <div className="col-md-6 my-4">
          <div>
            <div>
              <p className="font1">Nike Airpods Pro Case 2세대</p>
            </div>
            <p className="font-color">9.900원</p>
            <div className="box">
              <p className="font1">정규멤버 고객을 위한 혜택</p>
              <div className="box2">
                <span className="font2 mx-5">최대 적립 포인트 : </span>
                <span className="font2 mx-5">320원</span>
                <div className="box3 my-4">
                  <span className="font2 mx-4">
                    TIP : 포인트 더 받는 방법 :
                  </span>
                  <span className="font2 mx-4">+최대 620원</span>
                  <div>
                    <p className="my-2">
                      <Link>최대 5% 적립, 무료 시작 ▶</Link>
                    </p>
                    <p className="my-1">
                      <Link>네이버 현대카드로 결제 시 ▶</Link>
                    </p>
                    <p className="my-2">
                      <Link>네이버페이 머니 결제 시 최대 적립 ▶</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-box">
              <p>놓치고 있는 5% 적립 포기하시겠어요? ▶</p>
            </div>
            <div className="card-box my-4">
              <p className="my-1">무이자 할부 | 카드 자세히보기</p>
              <p className="my-1">
                이벤트 | 2+3 이벤트, 2개 구매시 사은품 3개 증정
              </p>
              <p>사은품 | 2+3(랜덤케이스+단선방지캡+청소솔)</p>
            </div>
            <div className="deliver-box">
              <div className="row">
                <div className="col-md-3">
                  <img src={"/image01.png"} width="80%"></img>
                </div>
                <div className="col-md-9">
                  <p>오늘출발 16:00 마감</p>
                  <p>지금 주문 시 내일 6/13(목)에 발송됩니다.</p>
                </div>
              </div>
            </div>
            <div className="content-box">
              <p className="my-1">택배배송 | 무료배송 * 롯데택배</p>
              <p className="my-1">
                제주,도서지역 추가 3,000원/제주지역 3,000원 택배비 추가 부과
              </p>
              <Link>배송비 절약상품 보기 ▶</Link>
            </div>
            <div className="select-box">
              <div>
                <span>모델 : </span>
                <select>
                  <option>모델을 선택하세요</option>
                  <option>Apple Airpods 3</option>
                  <option>Apple Airpods Propro 2</option>
                  <option>Apple Airpods Pro</option>
                  <option>Apple Airpods Pro Noise Cancel</option>
                </select>
              </div>
              <div className="my-2">
                <span>색상 : </span>
                <select>
                  <option>색상을 선택하세요</option>
                  <option>Purple</option>
                  <option>Green</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>Red</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="font1">총 상품 금액</p>
              </div>
              <div className="col-md-6">
                <p>총 수량 0개 | 0원</p>
              </div>
            </div>
            <div className="my-3 buy">
              <p>구매하기</p>
            </div>
            <div className="row">
              <div className="col-md-3 buy2">톡톡문의</div>
              <div className="col-md-3 buy2">찜하기</div>
              <div className="col-md-3 buy2">장바구니</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
