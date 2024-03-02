import Card from "../../../components/Card";
// import Spinner from "../../../components/helpers/spinnerImg/Spinner";
import Gallery from "../../gallery/view";
import Products from "../../products/view";
import Header from "../Header";
import flower3 from "/images/flowers/flower3.png";
const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Products />
      <Card
        image={flower3}
        title="Let's try campaign"
        underlined="Flowers decoration in your home"
      />
    </div>
  );
};

export default Home;
