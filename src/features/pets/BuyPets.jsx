import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  buyPetsAction,
  filetrPetsAction,
  getDataAsyncAction,
  selectState,
} from "./buyPetsSlice";

function BuyPets() {
  // 获取宠物数据
  const { pets, data } = useSelector(selectState, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsyncAction());
  }, [dispatch]);

  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      // 选中就发送
      dispatch(buyPetsAction(value));
    } else {
      // 取消就发送
      dispatch(filetrPetsAction(value));
    }
  }
  return (
    <div>
      <div>
        <h3>买宠物</h3>
        <form>
          <input
            style={{ marginLeft: "20px" }}
            type="checkbox"
            id="cat"
            value="猫"
            onChange={handleChange}
          />
          <label htmlFor="cat">猫</label>
          <input
            style={{ marginLeft: "20px" }}
            type="checkbox"
            id="dog"
            value="狗"
            onChange={handleChange}
          />
          <label htmlFor="dog">狗</label>
          <input
            style={{ marginLeft: "20px" }}
            type="checkbox"
            id="rabbit"
            value="兔子"
            onChange={handleChange}
          />
          <label htmlFor="rabbit">兔子</label>
        </form>
      </div>
      <h3>
        我买到的宠物是：
        {pets?.map((item) => (
          <span
            key={item}
            style={{ marginRight: "10px" }}
          >
            {item}
          </span>
        ))}
      </h3>
      <hr />
      <div>
        <h3>Pets页面请求的数据：</h3>
        {data.at(-1)
          ? data.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })
          : "loading..."}
      </div>
    </div>
  );
}

export default BuyPets;
