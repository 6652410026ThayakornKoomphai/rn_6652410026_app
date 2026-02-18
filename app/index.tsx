import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const taxilogo = require("@/assets/images/taxi.png");

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/calculator");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={taxilogo} style={styles.taxilogo} resizeMode="contain" />
        <Text style={styles.title}>TAXI METER</Text>
        <Text style={styles.subtitle}>THAI FARE CALCULATOR</Text>
        <ActivityIndicator size="large" color="#00A86B" style={styles.loader} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.infoText1}>ID: 6652410026</Text>
        <Text style={styles.infoText1}>NAME: ทยากร คุ้มภัย</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D408",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFE94A",
    width: "85%",
    paddingVertical: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  taxilogo: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
  title: {
    fontFamily: "Kanit_700Bold",
    fontSize: 32,
    fontWeight: "900",
    color: "#1C2A39",
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "Kanit_700Bold",
    fontSize: 12,
    fontWeight: "bold",
    color: "#009688",
    letterSpacing: 0.5,
  },
  loader: {
    marginTop: 40,
  },
  infoText1: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    fontWeight: "bold",
    color: "#7e7e7e",
    marginBottom: 4,
  },
});
