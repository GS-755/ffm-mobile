import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppForm from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppSubmitButton from "../../components/Form/AppSubmitButton";
import { EmailVerifySchema } from "../../Validation";

const EmailVerify = () => {
  const emailVerify = (values) => {
    console.log(values);
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
          Hãy xác thực Email của bạn
        </Text>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={EmailVerifySchema}
          onSubmit={(values) => emailVerify(values)}
        >
          <AppFormFeilds
            name="code"
            placeholder="Verify Code"
            autoCompleteType="off"
          />
          <AppSubmitButton title="Xác thực Email" />
        </AppForm>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerify;
