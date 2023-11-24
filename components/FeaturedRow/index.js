//import liraries
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../RestaurantCard";
import useFetch from "../../utils/api/fetch-api";
import getImageUri from "../../utils/get-img-url";

const fetchFoodUri = "http://74.48.130.249:3030/api/food";
const cateFetchUri = 'http://74.48.130.249:3030/api/foodcategory';
// create a component
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const foods = useFetch(fetchFoodUri);
  const categories = useFetch(cateFetchUri);
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {
          foods.map(k => (
            <>
              <RestaurantCard
                key={k.id}
                id={k.id}
                imageUrl={getImageUri(k.image)}
                title={k.name}
                rating={4.5}
                genre-={""}
                address="QL22 Tân Xuân"
                short_description={k.des}
                dishes={[]}
                long={20}
                lat={0}
              />
            </>
          ))
        }
        {/* <RestaurantCard
          id="1223"
          imageUrl="https://i.vimeocdn.com/video/652645957-40e7961f5818f9cb0e17873bc5f94b366933756bc59468dc8906b52d49e9ae89-d_640x360.jpg"
          title="Sườn nướng "
          rating={4.5}
          genre-="Ice Cream"
          address="1234  Hương Lộ 2"
          short_description="This is test description"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default FeaturedRow;
