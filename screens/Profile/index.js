import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* Image */}
      <View className="relative">
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/857136003722772493/1172390271569363006/hand-painted-watercolor-background-with-sky-clouds-shape.jpg?ex=65602486&is=654daf86&hm=308ae5ec5047f3a957709dfd5f42b085914efd97d1aed984c67968f8027dd951&",
          }}
          className="w-full h-72 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <View className="items-center mt-[-65px]">
          <Image
            source={{ uri: "https://i.imgur.com/PmH6Dd6.jpg" }}
            className="w-[120px] h-[120px] rounded-md object-cover"
          />
          <Text className="text-center mt-[16px] text-2xl font-bold">
            Lê Bảo Huy
          </Text>
          <Text className="text-center">lehuycm1  l@gmail.com</Text>
          <TouchableOpacity className="px-5 py-2 border-2 border-[#6327d3] mt-2 rounded-md">
            <Text className="text-[#6327d3]">Sửa thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
