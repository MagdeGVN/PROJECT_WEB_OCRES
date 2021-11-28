import React from 'react';
//import Widget from '../widgets/Widget.js';


import Meteo from '../widgets/Meteo.js';
import Suggestion from '../widgets/Suggestion.js';
import Makeup from "../widgets/Makeup.js";

export default {
    title: 'Widgets',
  };

export const meteo = () => <Meteo/> ;

export const suggest = () => <Suggestion/>;

export const makeup = () => <Makeup/>;
