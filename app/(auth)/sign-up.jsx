import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";

export default function SignUp() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const router = useRouter();

  const [pendingVerification, setPendingVerification] = React.useState();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const [code, setCode] = React.useState();

  const onSignUp = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (error) {
      console.log("Signup error", error + "", JSON.stringify(error, null, 2));
    }
  };
  const onVerifyEmail = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status === "complete") {
        await setActive({
          session: completeSignUp.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.error("Signup error", JSON.stringify(completeSignUp, null, 2));
      }
    } catch (error) {
      console.error(
        "Signup error",
        error.message + " ",
        JSON.stringify(error, null, 2)
      );
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            keyboardType="email-address"
            placeholder="Email Address..."
            onChangeText={setEmailAddress}
          />
          <TextInput
            value={password}
            placeholder="Password..."
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button mode="contained" onPress={onSignUp}>
            <Text>Sign Up</Text>
          </Button>
        </>
      )}
      {pendingVerification && (
        <>
          <TextInput
            value={code}
            placeholder="Enter Code"
            onChangeText={setCode}
            keyboardType="numeric"
          />
          <Button mode="contained" onPress={onVerifyEmail}>
            <Text>Verfiy Email</Text>
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
