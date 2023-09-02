import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";

const container = document.getElementById('root');
const root2 = createRoot(container)

root2.render(<App tab="home" />);