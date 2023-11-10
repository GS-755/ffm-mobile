import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppForm from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppSubmitButton from "../../components/Form/AppSubmitButton";
import { LoginSchema } from "../../Validation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../utils";

const Login = () => {
  const navigation = useNavigation();

  const loginUser = async (values) => {
    try {
      const res = await login(values);
      console.log("res", res);
      // await AsyncStorage.setItem('user', JSON.stringify(values));
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="pt-5 flex-1 items-center justify-center"
    >
      <View className="shadow-md bg-white w-full p-8">
        <Text className="text-1xl font-bold text-center">
          Welcome to join our community
        </Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => loginUser(values)}
        >
          <AppFormFeilds
            name="Email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormFeilds
            name="Mật khẩu"
            placeholder="Password"
            autoCompleteType="off"
            password={true}
          />
          <AppSubmitButton title="Đăng nhập ngay" 
          onPress={() => navigation.navigate("Home")}/>
        </AppForm>
        <Text className="mt-4 text-gray-700">
          Bạn chưa có tài khoản?
          <Text
            className="text-blue-600"
          >
            Đăng ký
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
