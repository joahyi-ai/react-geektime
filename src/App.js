import React from 'react';
import './style.css';

function MyApp() {
  return <div>bye bye</div>;
}

const KanbanCard = () => <div>kanban card</div>;

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MyApp />
      <KanbanCard />
    </div>
  );
}
