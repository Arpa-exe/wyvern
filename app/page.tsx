"use client";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { useRouter } from "next/navigation";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import SignIn from "./auth/signin/page";
import { Switch } from "@/components/ui/switch";
import colors from "tailwindcss/colors"
import { useState } from "react";
import SignUp from "./auth/signup/page";

const Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  return (
    <Box className="h-full w-full bg-background-100">
      <HStack className="flex-1 justify-around" space="xl">
        <VStack className="grow justify-around items-center" space="lg">
          <Image
            source={require("../public/assets/5elogo.png")}
            size="2xl"
            alt="5elogo"
          />
        </VStack>
        <VStack className="grow justify-around items-center bg-tertiary-100" space="lg">
          <HStack
            className="items-center place-self-end m-4"
          >
            <Text
              className="text-primary-100 font-bold text-xl"
            >
              Connexion
            </Text>
            <Switch
              className="mx-4"
              onValueChange={(value) => setIsSignUp(value)}
              defaultValue={false}
              trackColor={{ false: colors.gray[300], true: colors.gray[300] }}
              thumbColor={colors.gray[50]}
              activeThumbColor={colors.gray[50]}
              ios_backgroundColor={colors.gray[50]}
              size="sm"
            />
            <Text
              className="text-primary-100 font-bold text-xl"
            >
              Inscription
            </Text>
          </HStack>
          {isSignUp ? <SignUp /> : <SignIn />}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Page;
