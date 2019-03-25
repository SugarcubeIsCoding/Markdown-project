// import CSS
import 'reset-css'
import './index.css'
import './markdown.css'

// import the raw contents of sampleDocument as a string.
/* eslint-disable-next-line import/no-webpack-loader-syntax */
import sampleDocument from '!raw-loader!./sampleDocument.md'

import { renderDocument } from './render'
document.body.appendChild(renderDocument(sampleDocument))
