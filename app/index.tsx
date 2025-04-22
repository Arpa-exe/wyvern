import { Text, View } from "react-native";
import { Image } from "@/components/ui/image"
import { Box } from "@/components/ui/box"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="bg-primary-500 p-5 h-[200px] w-[300px]">
        <Image
          size="md"
          style={{width: 40, height: 40}}
          source={require('../assets/images/5eLogo.svg')}
          alt="5e Logo"
        />
      </Box>
    </View>
  );
}
