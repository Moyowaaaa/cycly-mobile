import { ScrollView, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import TitleSection from "./components/Home/TitleSection";
import CollectionShowcase from "./components/Home/CollectionShowcase";
import QoutesSection from "./components/Home/QoutesSection";
import Footer from "./components/general/Footer";

export default function Index() {
  return (
    <CustomSafeAreaView>
      <ScrollView
        className=" bg-white"
        contentContainerStyle={{ gap: 34, flexGrow: 1, paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <Navbar />
        <View style={{ gap: 34, flexGrow: 1 }}>
          <TitleSection />
          <CollectionShowcase />
          <QoutesSection />
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeAreaView>
  );
}
