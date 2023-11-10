import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {

  const navigation = useNavigation()

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#0aA296] py-1 px-2">
          2
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Xem giỏ hàng
        </Text>
        <Text className="text-lg text-white font-extrabold">100.00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
