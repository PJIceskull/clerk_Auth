import { View, Text } from "react-native";
import React from "react";
import { Stack, Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function authRouteLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return <Stack />;
}
