import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function ({ title, onPress, disabled = false }) {
  return (
    <TouchableOpacity
      className="rounded-md justify-center items-center p-2 mx-1 mt-4 bg-[#00CCBB]"
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-white text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
