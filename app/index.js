import MainLayout from "components/layout/MainLayout";
import HomeScreen from "components/screens/HomeScreen";
import {StatusBar} from "expo-status-bar";

export default function Home() {
  return (
    <MainLayout>
      <HomeScreen />
    </MainLayout>
  );
}
