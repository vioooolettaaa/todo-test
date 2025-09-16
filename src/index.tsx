import React from 'react';
import { createRoot } from 'react-dom/client';
import { useTodoStore } from './store';
import './styles.css';

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [text, setText] = React.useState('');

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', padding: 24 }}>
      <h1>Todo (React + TS + Zustand + Webpack)</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add todo'
        />
        <button
          onClick={() => {
            if (!text.trim()) return;
            addTodo(text.trim());
            setText('');
          }}
        >Add</button>
      </div>

      <ul style={{ marginTop: 16, padding: 0, listStyle: 'none' }}>
        {todos.map((t) => (
          <li key={t.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <input type='checkbox' checked={t.done} onChange={() => toggleTodo(t.id)} />
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
            <button onClick={() => removeTodo(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');
createRoot(container).render(<App />);
