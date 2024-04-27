import React, { useState } from "react";
import plusCircle from "../assets/img/plus-circle.svg";
import bin from "../assets/img/bin.svg";
import checkbox from "../assets/img/checkbox.svg";
import galka from "../assets/img/galka.svg";
import CheckboxNonFilled from "../assets/img/CheckboxNonFilled.svg";

function Review() {
  const [fieldsCount, setFieldsCount] = useState(1);
  const [boxClicked, setBoxClicked] = useState(false);

  const filling = () => setBoxClicked(!boxClicked);

  const renderFields = () => {
    let fields = [];
    for (let i = 0; i < fieldsCount; i++) {
      fields.push(
        <div className="box__list_content" key={i}>
          <div className="box__list_content_left">
            <div className="box__list_content_box" onClick={filling}>
              {boxClicked ? (
                <img src={checkbox} alt="" />
              ) : (
                <img src={CheckboxNonFilled} alt="" />
              )}
            </div>
            <div className="box__list_content_color">
              <div className="box__list_content_color_circle"></div>
              <img
                src={galka}
                alt=""
                className="box__list_content_color_galka"
              />
            </div>
            <div className="box__list_content_name">
              <input type="text" placeholder={`Group name ${i + 1}`} />
            </div>
          </div>

          <div className="box__list_content_bin">
            <img src={bin} alt="" />
          </div>
        </div>
      );
    }
    return fields;
  };

  const fieldsCounter = () => {
    setFieldsCount(fieldsCount + 1);
  };

  return (
    <main className="reviewPage">
      <div className="reviewPage_container">
        <div className="reviewPage_content">
          <div className="box_h1 box_item">Group</div>
          <div className="box_list box_item">
            <div className="box__list_txt">
              <div className="box__list_txt_color">Color</div>
              <div className="box__list_txt_name">Name</div>
            </div>
            <div className="line"></div>
            {renderFields()}
          </div>
          <div className="box_plus box_item" onClick={fieldsCounter}>
            <div className="box__plus_img">
              <img src={plusCircle} alt="" />
            </div>
            <div className="box__plus_txt">Add Group</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Review;
