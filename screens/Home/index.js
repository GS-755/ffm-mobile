import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  // When the screen loads, we want to hide the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-white pt-5"
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Giao hàng ngay</Text>
          <Text className="font-bold text-xl">
            Địa chỉ hiện tại
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon onPress={() => navigation.navigate("Profile")} size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Tìm kiếm..." keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* ScrollView Body Hom */}
      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          title="Đặc sắc"
          id="1"
          description="Miễn phí giao hàng"
          featuredCategory="featured"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          title="Gần đây"
          id="2"
          description="Miễn phí giao hàng"
          featuredCategory="featured"
        />
        {/* Offer Near you */}
        <FeaturedRow
          title="Khuyến mãi"
          id="3"
          description="Miễn phí giao hàng"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
