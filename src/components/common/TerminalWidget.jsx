import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalWidget = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to MustofaOS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = [];

      if (cmd === 'help') {
        response = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  whoami    - Display profile information' },
          { type: 'output', text: '  skills    - List core technical skills' },
          { type: 'output', text: '  contact   - Show contact details' },
          { type: 'output', text: '  clear     - Clear terminal' }
        ];
      } else if (cmd === 'whoami') {
        response = [
          { type: 'output', text: 'Mustofa' },
          { type: 'output', text: 'Full Stack Developer | AI & Automation Enthusiast' }
        ];
      } else if (cmd === 'skills') {
        response = [
          { type: 'output', text: 'Frontend: React, Tailwind CSS' },
          { type: 'output', text: 'Backend : Python, Laravel' },
          { type: 'output', text: 'Mobile  : Flutter' },
          { type: 'output', text: 'Tools   : Git, Docker, Linux VPS' }
        ];
      } else if (cmd === 'contact') {
        response = [
          { type: 'output', text: 'Email   : hello@mustofa.dev' },
          { type: 'output', text: 'GitHub  : github.com/mustofa' },
        ];
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === '') {
        // do nothing
      } else {
        response = [{ type: 'error', text: `Command not found: ${cmd}` }];
      }

      setHistory(prev => [...prev, { type: 'input', text: `visitor@mustofa.dev:~$ ${input}` }, ...response]);
      setInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mt-12 mb-8 bg-[#1E1E1E] rounded-xl overflow-hidden border border-slate-700 shadow-2xl font-mono text-sm"
    >
      {/* Terminal Header */}
      <div className="bg-[#2D2D2D] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-slate-400 text-xs ml-4 font-sans">visitor@mustofa.dev: ~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto text-slate-300">
        {history.map((line, idx) => (
          <div key={idx} className={`mb-1 ${line.type === 'error' ? 'text-red-400' : line.type === 'system' ? 'text-blue-400' : ''}`}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-400">visitor@mustofa.dev:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-slate-100 placeholder-slate-600"
            spellCheck="false"
            autoComplete="off"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};

export default TerminalWidget;
