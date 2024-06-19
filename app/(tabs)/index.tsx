import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import logo from "@/images/logo.svg";
import welcome from "@/images/welcome.svg";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex flex-1 px-4 items-center">
      <Image source={logo} contentFit="contain" transition={1000} className="w-12 h-12 mb-5" />
      <Text className="font-inter-600 text-3xl">Seja bem-vindo</Text>
      <Image source={welcome} contentFit="contain" transition={1000} className="w-90 h-96" />
    </SafeAreaView>
  );
}
