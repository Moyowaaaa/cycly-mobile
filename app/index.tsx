import { ScrollView, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import TitleSection from "./components/Home/TitleSection";
import CollectionShowcase from "./components/Home/CollectionShowcase";
import QoutesSection from "./components/Home/QoutesSection";
import Footer from "./components/general/Footer";
import JoinUsSection from "./components/Home/JoinUsSection";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <CustomSafeAreaView>
      <StatusBar style="dark" />

      <ScrollView
        className=" bg-white"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexGrow: 1 }}>
          <TitleSection />
          <CollectionShowcase />
          <QoutesSection />
          <JoinUsSection />
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeAreaView>
  );
}
