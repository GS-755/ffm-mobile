//import liraries
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../RestaurantCard";

// create a component
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
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
        <RestaurantCard
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
        />
        <RestaurantCard
          id="1223"
          imageUrl="https://vit29.com/media/news/3009_vit-quay-lang-son1.jpg"
          title="Vịt quay Lạng Sơn"
          rating={4.5}
          genre-="Vanilla"
          address="1234  Hương Lộ 2"
          short_description="This is test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="1223"
          imageUrl="https://i.vimeocdn.com/video/797242259-f4d604a2ad941fcfabfae095cf6d90c244322340c37ab3cff20c33642b9e97ec-d_640x360.jpg"
          title="Cơm chiên hải sản"
          rating={4.5}
          genre-="Japanis"
          address="123 Hương Lộ 2"
          short_description="This is test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default FeaturedRow;
