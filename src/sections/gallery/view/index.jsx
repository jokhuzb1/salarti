import Card from "../../../components/Card"
import flower1 from '/images/flowers/flower1.png';
import flower2 from '/images/flowers/flower2.png';
const Gallery = () => {
  return (
    <div>
        <Card image={flower1} title="Think's important" underlined="Flowers in your area" p='People have been using natural objects, such as tree stumps, rocks and moss, as furniture since thebeginning of human civilisation. '/>
        <Card reverse={false} image={flower2} title="Decorate your home with a" underlined="variety of flowers" p='flowers present a seemingly endless variety of combinations. They range in size from minute blossoms to giant blooms. In some plants, such as poppy, magnolia, tulip, and petunia, each flower is relatively large'/>
    </div>
  )
}

export default Gallery