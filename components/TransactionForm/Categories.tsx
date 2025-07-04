import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

const incomeCategories = ['Salary', 'Freelance', 'Investments'];
const expenseCategories = ['Restaurant', 'Transport', 'Gym', 'Bank', 'Dogs', 'Health', 'Home', 'Car'];

export default function Categories({type, category, setCategory,}: Readonly<{type: string; category: string;
    setCategory: (val: string) => void;
    }>) {
    const options = type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <View className="my-4">
            <Text className="mb-2 font-bold text-lg">Category</Text>
            <View  className='border border-gray-300 rounded'>
                <Picker selectedValue={category} onValueChange={setCategory}>
                    {options.map((cat) => (
                        <Picker.Item key={cat} label={cat} value={cat} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}
