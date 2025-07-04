import { useState } from 'react';
import { ScrollView } from 'react-native';
import AvailableBalance from "../../components/AvailableBalance";
import CategoriesType from "../../components/categoriesType";
import DashboardButton from "../../components/dashboardButton";
import "../../global.css";

export default function Index() {
const [selectedType, setSelectedType] = useState<'expenses' | 'incomes'>('expenses');

  return (
      
      <ScrollView className="p-6">
          <DashboardButton selected={selectedType} onSelectType={setSelectedType} />
          <AvailableBalance />
          <CategoriesType type={selectedType} />
      </ScrollView>

  );
};