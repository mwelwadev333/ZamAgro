'use client';

import { useState } from 'react';
import { 
  Home, 
  Calculator, 
  BarChart3, 
  TrendingUp, 
  Settings,
  Menu,
  X,
  Leaf,
  Cloud,
  Droplets,
  Sun
} from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Calculator, label: 'Calculator' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: TrendingUp, label: 'Trends' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-gradient-to-b from-green-900 to-green-800 text-white z-40 lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/10 rounded-lg">
              <Leaf className="w-8 h-8 text-green-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ZamAgro</h1>
              <p className="text-green-200 text-sm">Yield Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? 'bg-green-700 text-white'
                    : 'text-green-100 hover:bg-white/10'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Farm Status */}
          <div className="mt-12 p-4 bg-white/5 rounded-xl">
            <h3 className="text-sm font-semibold text-green-200 mb-3">
              Farming Conditions
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun size={16} className="text-amber-300" />
                  <span className="text-sm">Season</span>
                </div>
                <span className="text-sm font-medium">2023/24</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cloud size={16} className="text-blue-300" />
                  <span className="text-sm">Rainfall</span>
                </div>
                <span className="text-sm font-medium">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets size={16} className="text-cyan-300" />
                  <span className="text-sm">Soil Moisture</span>
                </div>
                <span className="text-sm font-medium">Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}