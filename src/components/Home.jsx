import React from "react";
import Cards from "./Cards";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import image from "../assets/-1117Wx1400H-469034008-black-MODEL.webp"

export const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

export const img2 = image
const Home = () => {
  const dispatch = useDispatch();
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Black Shoe",
      price: 490,
      imgSrc: img2,
      id: "2",
    },
  ];

  const addToCart = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculateprice",
    });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <Cards
          name={i.name}
          key={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
          id={i.id}
          handler={addToCart}
        />
      ))}
    </div>
  );
};

export default Home;
