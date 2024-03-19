
import create from 'zustand';
export type pagetype = {
    id: string,
    image: string,
    title: string,
    category: string,
    price: string,
    description: string
    get2: string,
    addData: [],
}
export type CounterStoreType = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

export const useCounterStore = create<CounterStoreType>((set) => ({
    count: 1,
    increase: () => {
        set((state) => ({ count: state.count + 1 }));
        
    },
    decrease: () => {
        set((state) => ({
            // Check if count is greater than 0 before decrementing
            count: state.count > 1 ? state.count - 1 : 1,
        }));
    },
}));





export type Storetype = {
    loading: boolean,
    products: pagetype[],
    error: unknown,
    getproducts: () => void,
    post: (product: any) => void
    deleteproduct: (id: number) => Promise<void>

}
type State = {
    cards: pagetype[];
    addCard: (card: pagetype) => void;
};

const useStore = create<State>((set) => ({
    cards: [],
    addCard: (card: pagetype) => {
        set((state) => {
            const newCards = [...state.cards, card];
            localStorage.setItem('cards', JSON.stringify(newCards));
            return { cards: newCards };
        });
    },
}));

export default useStore;