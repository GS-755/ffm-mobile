//import liraries
import { ScrollView } from "react-native";
import CategoryCard from "../CatrgoryCard";
import useFetch from "../../utils/api/fetch-api";

const cateFetchUri = 'http://74.48.130.249:3030/api/foodcategory';
// create a component
const Categories = () => {
  console.log(cateFetchUri);
  const cate = useFetch(cateFetchUri);

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
      {
        cate.map(k => (
          <CategoryCard
            key={k.idFc}
            imageUrl="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"
            title={ k.name }
          />
        ))
      }
    </ScrollView>
  );
};

//make this component available to the app
export default Categories;
