import React, { useState } from 'react';

export default function MainContent(props) {
	let word = props.doc;
	const [doc, setDoc] = useState();

	const showoutput = (e) => {
		localStorage.setItem('doc', e.target.innerHTML);
		setDoc(e.target.innerHTML);
	};

	return (
		<main>
			<div className='row m-0 p-0'>
				<div className='col-12 mt-4'>
					<div
						dangerouslySetInnerHTML={{ __html: word === '' ? '' : word }}
						contentEditable='true'
						className='editor-view'
						onInput={(e) => showoutput(e)}
						id='export-content'
					></div>
					<div>{doc}</div>
				</div>
			</div>
		</main>
	);
}
