import { ScrollView } from 'react-native';
import AvailableBalance from "../../components/AvailableBalance";
import CategoriesType from "../../components/categoriesType";
import DashboardButton from "../../components/dashboardButton";
import "../../global.css";

export default function Index() {
  return (
      
      <ScrollView className="px-4">
          <DashboardButton />
          <AvailableBalance />
          <CategoriesType />
      </ScrollView>

  );
};