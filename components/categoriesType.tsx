import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { JSX } from 'react';
import { Text, View } from 'react-native';

type Category = {
    name: string;
    color: string;
    icon: JSX.Element;
};

const expenseCategories: Category[] = [
    { name: 'Restaurant', color: 'bg-red-400', icon: <Ionicons name="restaurant" size={22} color="white" /> },
    { name: 'Transport', color: 'bg-blue-400', icon: <MaterialIcons name="emoji-transportation" size={22} color="white" /> },
    { name: 'Gym', color: 'bg-orange-400', icon: <MaterialIcons name="sports-gymnastics" size={22} color="white" /> },
    { name: 'Bank', color: 'bg-purple-400', icon: <FontAwesome name="bank" size={20} color="white" /> },
    { name: 'Dogs', color: 'bg-amber-800', icon: <MaterialCommunityIcons name="dog-side" size={24} color="white" /> },
    { name: 'Health', color: 'bg-pink-400', icon: <FontAwesome name="heartbeat" size={24} color="white" /> },
    { name: 'Home', color: 'bg-blue-400', icon: <Ionicons name="home-sharp" size={24} color="white" /> },
    { name: 'Car', color: 'bg-red-400', icon: <FontAwesome name="car" size={24} color="white" /> },
];

const incomeCategories: Category[] = [
    { name: 'Salary', color: 'bg-green-400', icon: <FontAwesome name="money" size={24} color="white" /> },
    { name: 'Freelance', color: 'bg-yellow-400', icon: <FontAwesome name="briefcase" size={24} color="white" /> },
];

type Props = {
    type: 'expenses' | 'incomes';
};

export default function CategoriesType({ type }: Readonly<Props>) {
    const options = type === 'expenses' ? expenseCategories : incomeCategories;

    return (
        <View className="my-4">
        {options.map((cat) => (
            <View key={cat.name} className="w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-gray-300 shadow-gray-300 mb-4">
            <View className="flex flex-row items-center">
                <View className={`rounded-full h-10 w-10 flex justify-center items-center ${cat.color}`}>
                {cat.icon}
                </View>
                <Text className="text-black text-xl ml-2">{cat.name}</Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-black text-lg mr-8">12%</Text>
                <Text className="text-black text-lg font-semibold">L.3,000</Text>
            </View>
            </View>
        ))}
        </View>
    );
}
