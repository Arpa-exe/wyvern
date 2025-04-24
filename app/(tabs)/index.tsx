import { Image } from "@/components/ui/image"
import { Box } from "@/components/ui/box"
import { Text } from "@/components/ui/text"
import { HStack } from "@/components/ui/hstack"

export default function Index() {
  return (
    <HStack 
      className="flex-1 justify-between content-between gap-3 bg-gray-100"
    >
      <Text 
        className="" 
        bold={true}
        size="4xl"
      >
        Wyvern
      </Text>
    </HStack>
  );
}
