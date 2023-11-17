//import liraries
import { ScrollView } from "react-native";
import CategoryCard from "../CatrgoryCard";
import { useState, useEffect } from "react";
import axios from "axios";

// fetch API async function
function useFetch(url) {
  const [cate, setCate] = useState(null);
  useEffect(() => {
    axios.get(url)
      .then(
        response => setCate(response.data)
      )
  }, [url]);

  return cate;
}

const fetchCateUri = 'http://192.168.1.110:8080/api/foodcategory';
// create a component
const Categories = () => {
  const categories = useFetch(fetchCateUri);
  if (categories != null) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
      >
        {
          categories.map(k => (
            <CategoryCard
              key={k.idFc}
              imageUrl="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"
              title={k.name}
            />
          ))
        }
      </ScrollView>
    );
  }

  {/* If Data === null thì return data fake (nói thẳng là ssskkk...) */ }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
    >
      {/* Category Card */}
      <CategoryCard
        imageUrl="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"
        title="Gà rán"
      />
      <CategoryCard
        imageUrl="https://static.vinwonders.com/production/quan-nuong-hue-1.jpeg"
        title="Đồ nướng"
      />
      <CategoryCard
        imageUrl="https://www.cet.edu.vn/wp-content/uploads/2018/08/dac-trung-moi-loai.jpg"
        title="Nước uống"
      />
      <CategoryCard
        imageUrl="https://pastaxi-manager.onepas.vn/content/uploads/articles/mon-an-vat-hai/35-trang-tri-hoa-qua/35.jpg"
        title="Trái cây"
      />
      <CategoryCard
        imageUrl="https://product.hstatic.net/200000723779/product/31_06486fb74a5b45409c05ccd5937ed06a_master.png"
        title="Panna cotta"
      />
      <CategoryCard
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7W59QB5yFRrBCA1xXGxTgeEuInEZe2JeUQ&usqp=CAU"
        title="Ruợu"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/529928826-b14cc5c03e2acf47fd1aac11c84ce93e6c1faba61908d10eedbba40cb6d2e894-d_640x360.jpg"
        title="Pistachio"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/652646184-727c7bd583d184529b9f1ee937b52f53759f158d2d2fd9f34108734bf7230a95-d_640x360.jpg"
        title="Coffee"
      />
    </ScrollView>
  );
};

//make this component available to the app
export default Categories;