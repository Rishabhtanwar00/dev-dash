import React, { useEffect } from 'react';

const useOutsideClick = (
	refs: React.RefObject<HTMLElement | null>[],
	handler: () => void
) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as Node;

			const isClicked = refs.every(
				(ref) => ref.current && !ref.current.contains(target)
			);

			if (isClicked) {
				handler();
			}
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);
};

export default useOutsideClick;
