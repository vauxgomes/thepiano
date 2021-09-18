import React from 'react';
import './App.css';
import Key from './components/Key';

import noteA from './providers/notes/a.mp3';
import noteAf from './providers/notes/af.mp3';
import noteB from './providers/notes/b.mp3';
import noteBf from './providers/notes/bf.mp3';
import noteC from './providers/notes/c.mp3';
import noteD from './providers/notes/d.mp3';
import noteDf from './providers/notes/df.mp3';
import noteE from './providers/notes/e.mp3';
import noteEf from './providers/notes/ef.mp3';
import noteF from './providers/notes/f.mp3';
import noteG from './providers/notes/g.mp3';
import noteGf from './providers/notes/gf.mp3';

function App() {
	return (
		<div className="app">
			<h1>
				The <span>Piano</span>
			</h1>

			<div className="piano">
				<ul className="white-keys">
					<Key className="key" note="c" keyPress="z" />
					<Key className="key" note="d" keyPress="x" />
					<Key className="key" note="e" keyPress="c" />
					<Key className="key" note="f" keyPress="v" />
					<Key className="key" note="g" keyPress="b" />
					<Key className="key" note="a" keyPress="n" />
					<Key className="key" note="b" keyPress="m" />
				</ul>

				<ul className="black-keys">
					<Key className="key df" note="df" keyPress="s" />
					<Key className="key ef" note="ef" keyPress="d" />
					<Key className="key gf" note="gf" keyPress="g" />
					<Key className="key af" note="af" keyPress="h" />
					<Key className="key bf" note="bf" keyPress="j" />
				</ul>

				<audio id="note-a" src={noteA} />
				<audio id="note-af" src={noteAf} />
				<audio id="note-b" src={noteB} />
				<audio id="note-bf" src={noteBf} />
				<audio id="note-c" src={noteC} />
				<audio id="note-d" src={noteD} />
				<audio id="note-df" src={noteDf} />
				<audio id="note-e" src={noteE} />
				<audio id="note-ef" src={noteEf} />
				<audio id="note-f" src={noteF} />
				<audio id="note-g" src={noteG} />
				<audio id="note-gf" src={noteGf} />
			</div>

			<p>
				Utilize as teclas de
				<span className="badge">Z</span>,<span className="badge">S</span>,
				<span className="badge">X</span>,<span className="badge">D</span>,
				<span className="badge">C</span>,<span className="badge">V</span>,<br />
				<span className="badge">G</span>,<span className="badge">B</span>,
				<span className="badge">H</span>,<span className="badge">N</span>,
				<span className="badge">J</span> e <span className="badge">M</span> para
				interagir com o piano
			</p>
		</div>
	);
}

export default App;
