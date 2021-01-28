import ImageOne from "../../assets/selling.jpg";
import ImageTwo from "../../assets/Shopping.jpg";
console.log(`url(${ImageOne})`);
const images = [
  {
    title: "Sell Your Art!",
    description:
      "Use our site to publish your art and sell to our users! You can also accept incoming special requests. ",
    imageUrl: ImageOne,
    time: 1500,
    button: "Start Selling",
    link: "/home",
  },
  {
    title: "Buy Art!",
    description:
      "Browse our site to check out the latest art submissions that you can buy and get sent directly to you! You are also able to select from our artist and request custom art.",
    imageUrl: ImageTwo,
    time: 1500,
    button: "Start Buying",
    link: "/home",
  },
];

export default images;
