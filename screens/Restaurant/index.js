import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../../components/DishRow";
import CartIcon from "../../components/CartIcon";

const Restaurant = () => {
  const {
    params: { id },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <CartIcon />
      <ScrollView>
        {/* Image */}
        <View className="relative">
          <Image
            source={{
              uri: "https://www.elle.vn/wp-content/uploads/2017/08/09/Top-nha-hang-sang-trong-danh-cho-tin-do-sanh-an-1.jpg",
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {/* Description Details */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold"></Text>
            {/* Header Description */}
            <View className="flex-row space-x-2 my-1">
              {/* Start Icon */}
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">4.5</Text> Kem
                </Text>
              </View>
              {/* Nearby By Address */}
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">Gần đây </Text> 123 Hương Lộ 2
                </Text>
              </View>
            </View>
            {/* Short Description */}
            <Text className="text-gray-500 mt-2 pb-4">

            </Text>
          </View>
          {/* Touchable Button */}
          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Có bị dị ứng thực phẩm? Hãy cho chúng tôi biết
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {/* Menu Dish */}
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishes */}
          <DishRow
            id="12"
            name="Kem Vanilla"
            description="Kem vani được tạo hương vị bằng hương liệu vani nhân tạo hoặc tự nhiên. Hương liệu nhân tạo chứa 100% vanillin, thành phần chính góp phần tạo nên hương vị của vani tự nhiên."
            price={10}
            images="https://static-images.vnncdn.net/files/publish/cach-lam-kem-vani-cuc-ngon-tai-nha-5094e1fbf87641faa9368b95c7be9148.jpg"
          />
          <DishRow
            id="12"
            name=" Sushi cá hồi"
            description="Nếu bạn là tín đồ của cá hồi thì đây quả là một sự lựa chọn sáng suốt, vị cá hồi thơm mùi đặc trưng được chế biến theo nhiều cách khác nhau hòa quyện cùng cơm dẻo được tẩm ướp chua thanh."
            price={10}
            images="https://vinmec-prod.s3.amazonaws.com/images/20210317_143609_055773_sushi.max-1800x1800.jpg"
          />
          <DishRow
            id="12"
            name="Cơm trộn"
            description="Cơm trộn Hàn Quốc hay còn gọi là bibimbap là món ăn với sự trang trí bắt mắt và hàm lượng giá trị dinh dưỡng cao, hội tụ đầy đủ các thành phần chay, mặn, tinh bột, chất đạm, chất xơ, chất béo, mùi thơm rất hấp dẫn, hòa quyện vị thơm của cơm trắng, dầu vừng, thịt, nước sốt, kim chi và rau xào"
            price={10}
            images="https://cdn.tgdd.vn/Files/2018/07/05/1099587/cach-lam-com-tron-han-quoc-bibimbap-ngon-nhu-nha-hang-202205241021184780.jpg"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
