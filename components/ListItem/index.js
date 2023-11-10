import { View, Text } from "react-native";
import React from "react";

const ListItem = ({ name, price }) => {
  return (
    <View className="flex-row justify-between mt-4">
      <Text className="text-gray-400 font-semibold">{name}</Text>
      <Text className="text-gray-900 font-semibold">${price}</Text>
    </View>
  );
};

export default ListItem;
