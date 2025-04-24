import { Image } from "@/components/ui/image"
import { Box } from "@/components/ui/box"
import { Text } from "@/components/ui/text"
import { HStack } from "@/components/ui/hstack"
import { Button, ButtonText, ButtonSpinner  } from "@/components/ui/button"
import colors from "tailwindcss/colors"

export default function Index() {
  return (
    <HStack 
      className="flex-1 justify-between gap-6 bg-primary-100"
    >
      <Text 
        className="" 
        bold={true}
        size="4xl"
      >
        Wyvern
      </Text>
      <Button size="md" variant="solid" action="primary">
      <ButtonSpinner color={colors.gray[400]} />
      <ButtonText>Hello World!</ButtonText>
    </Button>
      <Text className="text-2xl font-bold text-gray-800 mb-4">Welcome to 5e Tool</Text>
        <Image
          size="full"
          className="w-full h-full aspect-[320/208]"
          source={require('../assets/images/5eLogo.svg')}
          alt="5e Logo"
        />
    </HStack>
  );
}
