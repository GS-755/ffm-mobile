import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, images }) => {
  const [isPress, setIsPress] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPress(!isPress)}
        className={`bg-white border p-4 border-gray-200 ${
          isPress && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: images,
              }}
              className="h-20 w-20 bg-gray-200 p-4 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPress && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon
                // color={items > length > 0 ? "#00CCBB" : "gray"}
                size={40}
                color="#00CCBB"
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                // color={items > length > 0 ? "#00CCBB" : "gray"}
                size={40}
                color="#00CCBB"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
