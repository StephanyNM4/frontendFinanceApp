import { ScrollView } from 'react-native';
import TransactionForm from '../../components/TransactionForm';

export default function AddTransaction() {
    const handleTransaction = async (data: any) => {
        console.log('Nueva transacción:', data);
    };

    return (
        <ScrollView className="bg-white h-full">
            <TransactionForm onSubmit={handleTransaction} />
        </ScrollView>
    );
}
