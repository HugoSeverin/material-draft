import React from 'react';
import { render } from 'react-dom';

// app specific code
import MaterialDraft from '../index';

const handleChange = data => console.log(data);
render(<MaterialDraft onChange={handleChange} />, document.getElementById('root'));
