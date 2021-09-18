import React, { useEffect, useRef } from 'react';

export default function Key({ note, keyPress, className }) {
	const myRef = useRef(null);

	function play() {
		const noteAudio = new Audio(document.getElementById(`note-${note}`).src);
		noteAudio.play();
	}

	useEffect((e) => {
		function handleKeyPress(e) {
			if (e.key.toUpperCase() === keyPress.toUpperCase() && !e.repeat) {
				play();

				myRef.current.className = 'key active';
				setTimeout(() => {
					myRef.current.className = 'key';
				}, 500);
			}
		}

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	});

	return <li ref={myRef} className={className} onClick={play} />;
}
