import { create } from 'zustand';

interface UiState {
	theme: string;
	showSidebar: boolean;
	setTheme: (theme: string) => void;
	toogleSidebar: () => void;
}

const useThemeStore = create<UiState>((set) => ({
	theme: '',
	showSidebar: true,
	setTheme: (theme) => set(() => ({ theme })),
	toogleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));

export default useThemeStore;
