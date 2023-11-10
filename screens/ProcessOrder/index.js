import { SafeAreaView, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const ProcessOrder = () => {

    const navigation = useNavigation();

    useEffect(() =>{
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 3000);
    }, [])

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-[#00ccbb] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={{
          uri: "https://cdn.dribbble.com/users/118459/screenshots/7025288/media/76c7f0aae651f067c46d5f6ab0840aee.gif",
        }}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Đang chờ Nhà hàng chấp nhận đơn hàng của bạn
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default ProcessOrder;
