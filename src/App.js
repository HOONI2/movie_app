import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimch",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Kimbab",
    image:
      "https://www.gyeongju.go.kr/upload/content/thumb/20200506/9DD6ED74C34C4B0B9FA0BA67F49C3BEE.jpg",
    rating: 7,
  },
  {
    id: 3,
    name: "Samgiopsal",
    image:
      "http://ojsfile.ohmynews.com/STD_IMG_FILE/2017/0719/IE002190922_STD.JPG",
    rating: 10,
  },
];

Food.propTypes = {};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>Rating {rating} / 10.0 </h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
