import React, { useState } from "react";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { LinkText } from "@/components/ui/link";
import { User, KeyRound } from 'lucide-react-native';
import { Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button";
import router from "next/router";


export const SignIn = () => {
  return (
    <VStack
      className="justify-around items-center grow"
    >
      <Heading 
              className="text-primary-100"
              size="4xl"
      >
        CONNEXION
      </Heading>
      <HStack
        className="items-center"
      >
        <Icon 
          as={User}
          className="text-primary-100"
          size="xl"
        />
        <Input
          className="m-4 w-xl"
          variant="rounded"
          size="lg"
        >
          <InputField className="text-primary-100" placeholder="Nom d'utilisateur.." />
        </Input>
      </HStack>
      <VStack
        className="items-center"
      >
        <HStack
          className="items-center"
        >
          <Icon 
            as={KeyRound}
            className="text-primary-100"
            size="xl"
          />
          <Input
            className="m-4 w-xl"
            variant="rounded"
            size="lg"
          >
            <InputField className="text-primary-100" placeholder="Mot de passe.." />
          </Input>
        </HStack>
        <Text>
          Mot de passe oublié ?
        </Text>
      </VStack>
      <Button
        onPress={() => {
          router.push("auth/splash-screen");
        }}
      >
        <ButtonText>Connexion</ButtonText>
      </Button>
    </VStack>
  );
};
