import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppForm from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppSubmitButton from "../../components/Form/AppSubmitButton";
import { RegisterSchema } from "../../Validation";
import { register } from '../../utils'

const Register = () => {
  const navigation = useNavigation();

  const signUpUser = async (values) => {
      try {
          const res = await register(values);
          console.log(res)
      } catch (error) {
        
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
          Welcome  sign up and join our team
        </Text>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => signUpUser(values)}
        >
          <AppFormFeilds
            name="Họ tên"
            placeholder="Full Name"
            autoCompleteType="off"
          />
          <AppFormFeilds
            name="Email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormFeilds
            name="Password"
            placeholder="Password"
            autoCompleteType="off"
            password={true}
          />
          <AppSubmitButton title="Sign Up" />
        </AppForm>
        <Text className="mt-4 text-gray-700">
          Bạn chưa có tài khoản
          <Text
            className="text-blue-600"
            onPress={() => navigation.navigate("Login")}
          >
            Đăng nhập
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
