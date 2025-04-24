import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
        </Stack>
  );
}