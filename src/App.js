import React from "react";
import Header from "./components/header/Header";
import BodyContainer from "./BodyContainer";
import { NoteProvider } from './contextAPI';

function App() {
  return (
    <div className="App">
     <NoteProvider>
     <Header/>
     <BodyContainer/>
     </NoteProvider>
    </div>
  );
}

export default App;
