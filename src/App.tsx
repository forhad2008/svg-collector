import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Settings, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  Layers, 
  Palette, 
  Info, 
  Trash2, 
  Heart, 
  RotateCw, 
  Code, 
  Maximize2, 
  Compass, 
  ExternalLink,
  Sliders,
  Paintbrush,
  Folder,
  X,
  FileCode,
  LayoutGrid
} from 'lucide-react';
import { ICONS, CATEGORIES, IconDef } from './iconsData';
import { 
  generateSvgString, 
  generateReactComponent, 
  generateTailwindSnippet, 
  generateSpritesheet, 
  CustomizerParams, 
  IconStyle 
} from './svgHelper';
import { SvgIconRenderer } from './SvgIconRenderer';

// Predefined premium color palettes
const COLOR_PALETTES = [
  { name: "Indigo Velvet", primary: "#6366f1", secondary: "#4f46e5" },
  { name: "Cobalt Spark", primary: "#2563eb", secondary: "#1d4ed8" },
  { name: "Mint Emerald", primary: "#10b981", secondary: "#059669" },
  { name: "Rose Crimson", primary: "#f43f5e", secondary: "#e11d48" },
  { name: "Amber Gold", primary: "#f59e0b", secondary: "#d97706" },
  { name: "Teal Lagoon", primary: "#14b8a6", secondary: "#0d9488" },
  { name: "Sunset Orange", primary: "#f97316", secondary: "#ea580c" },
  { name: "Slate Charcoal", primary: "#475569", secondary: "#334155" }
];

export default function App() {
  // State for active icon customization
  const [params, setParams] = useState<CustomizerParams>({
    size: 48,
    strokeWidth: 2,
    primaryColor: '#6366f1',
    secondaryColor: '#4f46e5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: 'outline',
    gradientAngle: 45,
    backgroundColor: '#cbd5e1',
    backgroundRadius: 20
  });

  // Sidebar, filter, search, and active tab states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIconId, setSelectedIconId] = useState<string>('home');
  const [collection, setCollection] = useState<string[]>(['home', 'user', 'settings', 'bell']);
  const [activeCodeTab, setActiveCodeTab] = useState<'svg' | 'react' | 'tailwind' | 'spritesheet'>('svg');
  const [sandboxBg, setSandboxBg] = useState<'grid-light' | 'grid-dark' | 'checker' | 'solid-slate'>('grid-light');
  const [sandboxFrame, setSandboxFrame] = useState<'none' | 'ring' | 'glow' | 'card'>('none');
  
  // Quick Copy feedback
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Active icon lookup
  const activeIcon = useMemo(() => {
    return ICONS.find(i => i.id === selectedIconId) || ICONS[0];
  }, [selectedIconId]);

  // Handle toast notification
  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  // Filtered Icons based on search and category
  const filteredIcons = useMemo(() => {
    let result = ICONS;
    if (selectedCategory) {
      result = result.filter(i => i.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(i => 
        i.name.toLowerCase().includes(q) || 
        i.tags.some(t => t.toLowerCase().includes(q)) ||
        i.id.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, selectedCategory]);

  // Helper for clipboard copying
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    showToast(`${type} code copied successfully!`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Download active icon as SVG file
  const handleDownloadIcon = (icon: IconDef) => {
    const svgContent = generateSvgString(icon, params);
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}-${params.style}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded customized ${icon.name} SVG successfully.`);
  };

  // Download all selected collection icons as a bundle manifest
  const handleDownloadCollectionJson = () => {
    const activeCollectionIcons = ICONS.filter(i => collection.includes(i.id));
    const manifest = {
      platform: "Vectra SVG Icons",
      generatedAt: new Date().toISOString(),
      customizer: params,
      icons: activeCollectionIcons.map(icon => ({
        id: icon.id,
        name: icon.name,
        category: icon.category,
        svg: generateSvgString(icon, params)
      }))
    };
    const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vectra-custom-icons-bundle.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded collection manifest containing ${collection.length} icons.`);
  };

  // Handle favorite / collect toggle
  const toggleCollection = (id: string) => {
    if (collection.includes(id)) {
      setCollection(collection.filter(i => i !== id));
      showToast(`Removed from collection.`);
    } else {
      setCollection([...collection, id]);
      showToast(`Added to collection.`);
    }
  };

  // Computed code snippet based on active tab
  const computedCode = useMemo(() => {
    if (activeCodeTab === 'svg') {
      return generateSvgString(activeIcon, params);
    } else if (activeCodeTab === 'react') {
      return generateReactComponent(activeIcon, params);
    } else if (activeCodeTab === 'tailwind') {
      return generateTailwindSnippet(activeIcon, params);
    } else if (activeCodeTab === 'spritesheet') {
      const activeCollectionIcons = ICONS.filter(i => collection.includes(i.id));
      return generateSpritesheet(activeCollectionIcons, params);
    }
    return '';
  }, [activeIcon, params, activeCodeTab, collection]);

  return (
    <div className="min-h-screen flex flex-col bg-[#eef2f6] text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 font-sans p-4 lg:p-6">
      
      {/* 1. Neumorphic Header Navigation - Top Bar Contract Compliance */}
      <header className="w-full max-w-[1720px] mx-auto neu-raised rounded-2xl px-6 py-4 flex items-center justify-between mb-6">
        {/* Zone 1: Brand title/wordmark only */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight font-display text-slate-800 flex items-center gap-2.5">
            <span className="h-9.5 w-9.5 neu-raised-sm rounded-xl flex items-center justify-center text-indigo-600 font-extrabold text-lg">
              V
            </span>
            Vectra
          </span>
          <span className="hidden sm:inline-flex px-3 py-1 text-[11px] font-bold text-indigo-600 bg-[#eef2f6] neu-pressed-sm rounded-full">
            Collect by Abdullah
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 font-medium text-slate-600 p-1 bg-[#eef2f6]/40 neu-pressed-sm rounded-xl">
          <a href="#studio" className="px-4 py-2 text-sm rounded-lg hover:text-slate-900 transition-colors">Icon Studio</a>
          <a href="#gallery" className="px-4 py-2 text-sm rounded-lg hover:text-slate-900 transition-colors">Catalog</a>
          <a href="#collection" className="px-4 py-2 text-sm rounded-lg hover:text-slate-900 transition-colors flex items-center gap-2">
            My Collection 
            <span className="text-xs font-mono font-bold bg-[#eef2f6] neu-pressed-sm px-2.5 py-0.5 rounded-full text-indigo-600">
              {collection.length}
            </span>
          </a>
        </nav>

        {/* Zone 3: Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => {
              const activeCollectionIcons = ICONS.filter(i => collection.includes(i.id));
              const spritesheetCode = generateSpritesheet(activeCollectionIcons, params);
              copyToClipboard(spritesheetCode, "Spritesheet");
            }}
            disabled={collection.length === 0}
            className="neu-btn-interactive px-2.5 py-2 sm:px-4 sm:py-2.5 text-xs font-bold text-slate-700 rounded-xl whitespace-nowrap disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
            title="Copy Spritesheet"
          >
            <Copy className="h-4 w-4 shrink-0 text-slate-500" />
            <span className="hidden sm:inline">Copy Spritesheet</span>
          </button>
          <button 
            onClick={handleDownloadCollectionJson}
            disabled={collection.length === 0}
            className="neu-btn-interactive px-2.5 py-2 sm:px-4 sm:py-2.5 text-xs font-bold text-indigo-600 rounded-xl whitespace-nowrap disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
            title="Export Manifest"
          >
            <Download className="h-4 w-4 shrink-0 text-indigo-500" />
            <span className="hidden sm:inline">Export Manifest ({collection.length})</span>
            <span className="inline sm:hidden font-mono text-[11px]">({collection.length})</span>
          </button>
        </div>
      </header>

      {/* 2. Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1720px] mx-auto gap-6 items-start">
        
        {/* LEFT NAV BAR: Filters, Quick Categories & Collections */}
        <aside className="w-full lg:w-68 shrink-0 flex flex-col gap-6">
          
          {/* Quick Stats Summary */}
          <div className="neu-raised rounded-2xl p-5">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3.5 font-mono">Platform Summary</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="neu-pressed-sm rounded-xl p-3 text-center">
                <span className="text-2xl font-black text-slate-800 font-mono tracking-tight">{ICONS.length}</span>
                <p className="text-[10px] text-slate-500 font-medium mt-1">Custom SVGs</p>
              </div>
              <div className="neu-pressed-sm rounded-xl p-3 text-center">
                <span className="text-2xl font-black text-indigo-600 font-mono tracking-tight">{collection.length}</span>
                <p className="text-[10px] text-slate-500 font-medium mt-1">In Bucket</p>
              </div>
            </div>
          </div>

          {/* Search Bar - Recessed Neumorphic Input */}
          <div className="neu-pressed rounded-2xl p-1.5 flex items-center relative">
            <Search className="absolute left-4.5 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
            <input 
              type="text"
              placeholder="Search 100+ icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent pl-11 pr-10 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200/50 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Categories Segmented Control - Interactive raised/pressed buttons */}
          <div className="neu-raised rounded-2xl p-5 flex flex-col">
            <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Folder className="h-4 w-4 text-indigo-500" />
              Categories
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${!selectedCategory ? 'neu-pressed text-indigo-600 font-bold' : 'neu-btn-interactive text-slate-600 font-medium'}`}
              >
                <span>All Categories</span>
                <span className="text-[10px] font-mono font-bold bg-[#cbd5e1]/20 px-2 py-0.5 rounded-md text-slate-400">{ICONS.length}</span>
              </button>
              {CATEGORIES.map(category => {
                const count = ICONS.filter(i => i.category === category).length;
                const isCatSelected = selectedCategory === category;
                return (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${isCatSelected ? 'neu-pressed text-indigo-600 font-bold' : 'neu-btn-interactive text-slate-600 font-medium'}`}
                  >
                    <span className="truncate pr-2">{category}</span>
                    <span className="text-[10px] font-mono font-bold bg-[#cbd5e1]/20 px-2 py-0.5 rounded-md text-slate-400">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Active Bucket List */}
          <div className="neu-raised rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500 fill-rose-100" />
                Active Bucket
              </h3>
              {collection.length > 0 && (
                <button 
                  onClick={() => {
                    setCollection([]);
                    showToast("Collection cleared");
                  }}
                  className="text-[10px] text-rose-600 hover:underline font-bold"
                >
                  Clear All
                </button>
              )}
            </div>

            {collection.length === 0 ? (
              <div className="text-center py-7 text-slate-400 text-xs neu-pressed rounded-xl border border-dashed border-slate-300 p-4">
                No icons in your active bucket. Click the heart on any icon card to collect.
              </div>
            ) : (
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {ICONS.filter(i => collection.includes(i.id)).map(icon => (
                  <div key={icon.id} className="flex items-center justify-between p-2 neu-pressed-sm rounded-xl transition-all">
                    <span 
                      onClick={() => setSelectedIconId(icon.id)}
                      className="text-xs text-slate-700 font-bold hover:text-indigo-600 cursor-pointer truncate pl-1"
                    >
                      {icon.name}
                    </span>
                    <button 
                      onClick={() => toggleCollection(icon.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* MIDDLE CONTENT: Large Studio Sandbox & Interactive Icon Grid */}
        <main className="flex-1 flex flex-col gap-6 w-full">
          
          {/* A. Live Studio Sandbox Canvas & Editor */}
          <section id="studio" className="neu-raised rounded-2xl p-6 w-full">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-200/50">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="h-8 w-8 bg-[#eef2f6] neu-pressed-sm text-indigo-600 rounded-xl flex items-center justify-center">
                    <Sliders className="h-4 w-4" />
                  </span>
                  Interactive Icon Studio
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Adjust visual configurations, inspect vectors, and generate responsive codebase integrations.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleDownloadIcon(activeIcon)}
                  className="neu-btn-interactive px-4 py-2.5 text-xs font-bold text-slate-800 rounded-xl flex items-center gap-2"
                >
                  <Download className="h-3.5 w-3.5 text-slate-600" /> Download SVG
                </button>
                <button
                  onClick={() => toggleCollection(activeIcon.id)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2 ${collection.includes(activeIcon.id) ? 'neu-pressed text-indigo-700 font-black' : 'neu-btn-interactive text-slate-700'}`}
                >
                  <Heart className={`h-3.5 w-3.5 ${collection.includes(activeIcon.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} /> 
                  {collection.includes(activeIcon.id) ? 'In Bucket' : 'Collect Icon'}
                </button>
              </div>
            </div>

            {/* Sandbox Grid & Controls Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              
              {/* Interactive Visual Canvas (LHS) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">Precision Light-box Canvas</span>
                  <div className="flex items-center gap-2">
                    {/* Background control */}
                    <button 
                      onClick={() => setSandboxBg('grid-light')}
                      className={`h-5.5 w-5.5 rounded-lg border ${sandboxBg === 'grid-light' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-slate-200'} bg-slate-50`}
                      title="Light Grid"
                    />
                    <button 
                      onClick={() => setSandboxBg('checker')}
                      className={`h-5.5 w-5.5 rounded-lg border ${sandboxBg === 'checker' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-slate-200'} bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:6px_6px]`}
                      title="Checkerboard"
                    />
                    <button 
                      onClick={() => setSandboxBg('solid-slate')}
                      className={`h-5.5 w-5.5 rounded-lg border ${sandboxBg === 'solid-slate' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-slate-200'} bg-slate-900`}
                      title="Dark Solid"
                    />
                  </div>
                </div>

                <div className={`relative h-64 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 neu-pressed p-6`}>
                  {/* Backdrop lights of Neumorphism */}
                  {sandboxBg === 'grid-light' && (
                    <div className="absolute inset-0 bg-[#f8fafc] bg-[linear-gradient(to_right,#eef2f6_1px,transparent_1px),linear-gradient(to_bottom,#eef2f6_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-80" />
                  )}
                  {sandboxBg === 'checker' && (
                    <div className="absolute inset-0 bg-[#f1f5f9] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-80" />
                  )}
                  {sandboxBg === 'solid-slate' && (
                    <div className="absolute inset-0 bg-slate-950 pointer-events-none" />
                  )}

                  {/* Frame rendering active icon */}
                  <div className={`p-8 rounded-2xl transition-all duration-300 ${
                    sandboxFrame === 'ring' ? 'border border-slate-300/40 shadow-md bg-[#eef2f6]/60' :
                    sandboxFrame === 'glow' ? 'shadow-[0_0_40px_rgba(99,102,241,0.25)] bg-[#eef2f6]/40' :
                    sandboxFrame === 'card' ? 'neu-raised' :
                    ''
                  }`}>
                    {/* Large Canvas rendering of active icon */}
                    <div className="transform scale-[1.75] transition-transform duration-300">
                      <SvgIconRenderer 
                        icon={activeIcon} 
                        params={params} 
                        sizeOverride={72} 
                      />
                    </div>
                  </div>

                  {/* Absolute layout parameters watermark */}
                  <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-400 bg-[#eef2f6]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200/40">
                    ID: {activeIcon.id} | Width: {params.strokeWidth}px | Format: {params.style}
                  </div>
                  <div className="absolute bottom-3 right-4 flex gap-1.5">
                    <button 
                      onClick={() => setSandboxFrame(sandboxFrame === 'ring' ? 'none' : 'ring')} 
                      className={`text-[9px] px-2.5 py-1 rounded-lg font-mono font-bold transition-all ${sandboxFrame === 'ring' ? 'neu-pressed text-indigo-600' : 'neu-raised-pill text-slate-500 hover:text-slate-700'}`}
                    >
                      Borders
                    </button>
                    <button 
                      onClick={() => setSandboxFrame(sandboxFrame === 'glow' ? 'none' : 'glow')} 
                      className={`text-[9px] px-2.5 py-1 rounded-lg font-mono font-bold transition-all ${sandboxFrame === 'glow' ? 'neu-pressed text-indigo-600' : 'neu-raised-pill text-slate-500 hover:text-slate-700'}`}
                    >
                      Glow
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 justify-between">
                  <span className="flex items-center gap-1.5 font-bold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Selected: <span className="text-slate-900">{activeIcon.name}</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[10px] truncate max-w-[180px]">
                    Tags: {activeIcon.tags.slice(0, 3).join(' · ')}
                  </span>
                </div>
              </div>

              {/* Developer Code Output tab panels (RHS) */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-slate-200/50 pb-3">
                  <div className="flex items-center gap-1 p-1 bg-[#eef2f6] neu-pressed-sm rounded-xl overflow-x-auto scrollbar-none w-full max-w-full">
                    <button
                      onClick={() => setActiveCodeTab('svg')}
                      className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap text-center ${activeCodeTab === 'svg' ? 'neu-raised text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      SVG Code
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('react')}
                      className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap text-center ${activeCodeTab === 'react' ? 'neu-raised text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      React JSX
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('tailwind')}
                      className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap text-center ${activeCodeTab === 'tailwind' ? 'neu-raised text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      Tailwind
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('spritesheet')}
                      className={`flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap text-center ${activeCodeTab === 'spritesheet' ? 'neu-raised text-slate-800' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      Spritesheet
                    </button>
                  </div>
                </div>

                <div className="relative flex-1 mt-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-900 font-mono text-[11.5px] text-slate-300 leading-relaxed min-h-[170px] max-h-[220px]">
                  <pre className="absolute inset-0 p-4 pr-16 overflow-auto scrollbar-thin scrollbar-thumb-slate-800">
                    <code className="block whitespace-pre">{computedCode}</code>
                  </pre>
                  
                  {/* Floating Action Absolute Copy Button */}
                  {!(activeCodeTab === 'spritesheet' && collection.length === 0) && (
                    <button
                      onClick={() => copyToClipboard(computedCode, activeCodeTab.toUpperCase())}
                      className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-[11px] font-bold backdrop-blur-sm shadow-md cursor-pointer select-none"
                      title="Copy Code"
                    >
                      {copiedText === activeCodeTab.toUpperCase() ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span>Copy</span>
                    </button>
                  )}

                  {activeCodeTab === 'spritesheet' && collection.length === 0 && (
                    <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center">
                      <FileCode className="h-8 w-8 text-slate-600 mb-2" />
                      <p className="text-xs text-slate-400 max-w-xs leading-normal">
                        Your bucket is empty. Add icons to your active bucket collection to automatically compile a custom SVG Spritesheet!
                      </p>
                    </div>
                  )}
                </div>

                {/* Developer Implementation Instructions */}
                <div className="mt-4 p-4 bg-[#eef2f6] neu-pressed-sm rounded-xl border border-white/20 flex gap-3 items-start">
                  <Info className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-normal font-medium">
                    {activeCodeTab === 'svg' && (
                      <p>
                        <b>Inline Vector Integration:</b> Production-optimized XML strings. Perfect for vanilla HTML, PHP, custom templates, or saving directly into static assets.
                      </p>
                    )}
                    {activeCodeTab === 'react' && (
                      <p>
                        <b>React TypeScript:</b> Styled as a stateless functional component receiving flexible props for sizes and colors. Fully optimized for Next.js, Remix, and Vite configurations.
                      </p>
                    )}
                    {activeCodeTab === 'tailwind' && (
                      <p>
                        <b>Tailwind Classes:</b> Integrated directly into class structures. Modify size and colors via standard utility states: <code className="font-mono text-indigo-600 bg-indigo-50/50 px-1 py-0.5 rounded">stroke-indigo-600</code>.
                      </p>
                    )}
                    {activeCodeTab === 'spritesheet' && (
                      <p>
                        <b>Performance Boost:</b> Speeds up site latency. Include the hidden spritesheet code at the top of your document, then draw icons instantly using <code className="font-mono text-indigo-600 bg-indigo-50/50 px-1.5 py-0.5 rounded">&lt;use href="#icon-id"&gt;</code>.
                      </p>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* B. Active Filter Details & Sorting Panel */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#eef2f6] px-5 py-4 rounded-xl neu-pressed-sm border border-white/20">
            <div className="text-xs text-slate-500 font-bold">
              Showing <span className="font-black text-slate-800 font-mono text-sm">{filteredIcons.length}</span> of {ICONS.length} handcrafted icons
              {selectedCategory && <> in category <span className="text-indigo-600">{selectedCategory}</span></>}
              {searchQuery && <> matching "<span className="text-slate-600">{searchQuery}</span>"</>}
            </div>

            {/* Quick preset toggles for icon styles - Styled as realistic tactile selectors */}
            <div className="flex items-center gap-1.5 p-1 bg-[#eef2f6] neu-pressed-sm rounded-xl">
              {(['outline', 'duotone', 'gradient', 'solid-overlay'] as IconStyle[]).map(style => (
                <button 
                  key={style}
                  onClick={() => setParams(prev => ({ ...prev, style }))}
                  className={`px-3 py-1.5 text-[10px] font-extrabold rounded-lg transition-all capitalize ${params.style === style ? 'neu-raised text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {style === 'solid-overlay' ? 'Solid Box' : style}
                </button>
              ))}
            </div>
          </div>

          {/* C. Primary Interactive Icon Grid */}
          {filteredIcons.length === 0 ? (
            <div className="neu-raised rounded-2xl p-12 text-center flex flex-col items-center justify-center w-full">
              <LayoutGrid className="h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-sm font-bold text-slate-700">No matching vectors found</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                We couldn't locate any icons matching "{searchQuery}". Try updating your query or selecting a different category.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="mt-4 neu-btn-interactive px-4 py-2.5 text-xs font-bold text-indigo-600 rounded-xl"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
              {filteredIcons.map(icon => {
                const isSelected = selectedIconId === icon.id;
                const isInCollection = collection.includes(icon.id);

                return (
                  <div 
                    key={icon.id}
                    onClick={() => setSelectedIconId(icon.id)}
                    className={`group relative rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
                      isSelected ? 'neu-pressed' : 'neu-card-interactive'
                    }`}
                  >
                    
                    {/* Floating Hover Actions */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCollection(icon.id);
                        }}
                        className={`p-1.5 rounded-lg transition-all neu-btn-interactive hover:scale-105 ${isInCollection ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'}`}
                        title={isInCollection ? "Remove from collection" : "Add to collection"}
                      >
                        <Heart className={`h-3 w-3 ${isInCollection ? 'fill-rose-500' : ''}`} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const rawSvg = generateSvgString(icon, params);
                          copyToClipboard(rawSvg, "SVG");
                        }}
                        className="p-1.5 rounded-lg transition-all neu-btn-interactive hover:scale-105 text-slate-400 hover:text-indigo-600"
                        title="Copy raw SVG"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Icon Render Area */}
                    <div className="h-16 flex items-center justify-center mb-3">
                      <SvgIconRenderer 
                        icon={icon} 
                        params={params} 
                        sizeOverride={params.style === 'solid-overlay' ? 52 : 36} 
                      />
                    </div>

                    {/* Name */}
                    <span className="text-xs font-extrabold text-slate-800 text-center truncate max-w-full">
                      {icon.name}
                    </span>

                    {/* Metadata tags - NO PILLS, CLEAN MONOSPACE FOOTER */}
                    <span className="text-[9px] text-slate-400 font-mono font-bold tracking-tight mt-1 truncate max-w-full">
                      {icon.id}
                    </span>

                  </div>
                );
              })}
            </div>
          )}

        </main>

        {/* RIGHT SIDEBAR: Comprehensive Real-time Customizer Panel */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
          <div className="neu-raised rounded-2xl p-5 sticky top-[92px] w-full">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-5">
              <span className="h-7 w-7 bg-[#eef2f6] neu-pressed-sm text-indigo-600 rounded-lg flex items-center justify-center">
                <Paintbrush className="h-3.5 w-3.5" />
              </span>
              Visual Customizer
            </h3>

            {/* Quick Palettes */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block mb-3">Curated Themes</span>
              <div className="grid grid-cols-4 gap-2">
                {COLOR_PALETTES.map(p => (
                  <button
                    key={p.name}
                    onClick={() => setParams(prev => ({ 
                      ...prev, 
                      primaryColor: p.primary, 
                      secondaryColor: p.secondary,
                      backgroundColor: `${p.primary}12` 
                    }))}
                    className="group relative flex h-7 rounded-lg overflow-hidden border border-slate-200 hover:scale-105 transition-all cursor-pointer shadow-sm"
                    title={p.name}
                  >
                    <div className="w-1/2 h-full" style={{ backgroundColor: p.primary }} />
                    <div className="w-1/2 h-full" style={{ backgroundColor: p.secondary }} />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity">
                      <Check className="h-3 w-3 text-white mix-blend-difference" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-slate-300/30 my-4" />

            {/* Sliders and custom styling selectors */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Icon Size</label>
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-[#eef2f6] neu-pressed-sm px-2 py-0.5 rounded-md">{params.size}px</span>
                </div>
                <div className="p-1 neu-pressed-sm rounded-lg">
                  <input 
                    type="range"
                    min="16"
                    max="96"
                    value={params.size}
                    onChange={(e) => setParams(prev => ({ ...prev, size: parseInt(e.target.value) }))}
                    className="w-full h-1 bg-slate-300/30 rounded-lg appearance-none cursor-pointer accent-indigo-600 py-1 px-1"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Stroke Weight</label>
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-[#eef2f6] neu-pressed-sm px-2 py-0.5 rounded-md">{params.strokeWidth}px</span>
                </div>
                <div className="p-1 neu-pressed-sm rounded-lg">
                  <input 
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.5"
                    value={params.strokeWidth}
                    onChange={(e) => setParams(prev => ({ ...prev, strokeWidth: parseFloat(e.target.value) }))}
                    className="w-full h-1 bg-slate-300/30 rounded-lg appearance-none cursor-pointer accent-indigo-600 py-1 px-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block mb-1.5">Line Caps</label>
                  <select
                    value={params.strokeLinecap}
                    onChange={(e) => setParams(prev => ({ ...prev, strokeLinecap: e.target.value as any }))}
                    className="w-full text-xs font-bold bg-[#eef2f6] text-slate-700 p-2.5 rounded-xl border border-white/20 focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer"
                  >
                    <option value="round">Round</option>
                    <option value="square">Square</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block mb-1.5">Line Joins</label>
                  <select
                    value={params.strokeLinejoin}
                    onChange={(e) => setParams(prev => ({ ...prev, strokeLinejoin: e.target.value as any }))}
                    className="w-full text-xs font-bold bg-[#eef2f6] text-slate-700 p-2.5 rounded-xl border border-white/20 focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer"
                  >
                    <option value="round">Round</option>
                    <option value="miter">Miter</option>
                    <option value="bevel">Bevel</option>
                  </select>
                </div>
              </div>

              <hr className="border-slate-300/30 my-2" />

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block mb-3">Color Customizer</span>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-bold">Primary Hue</span>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        value={params.primaryColor}
                        onChange={(e) => setParams(prev => ({ ...prev, primaryColor: e.target.value }))}
                        className="w-20 px-2 py-1 text-xs bg-[#eef2f6] neu-pressed-sm rounded-lg font-mono text-center font-bold text-slate-700"
                      />
                      <input 
                        type="color"
                        value={params.primaryColor}
                        onChange={(e) => setParams(prev => ({ ...prev, primaryColor: e.target.value }))}
                        className="h-6.5 w-6.5 border border-slate-300/40 rounded-lg cursor-pointer p-0 bg-transparent"
                      />
                    </div>
                  </div>

                  {(params.style === 'gradient' || params.style === 'duotone') && (
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-bold">Secondary Hue</span>
                      <div className="flex items-center gap-2">
                        <input 
                          type="text" 
                          value={params.secondaryColor}
                          onChange={(e) => setParams(prev => ({ ...prev, secondaryColor: e.target.value }))}
                          className="w-20 px-2 py-1 text-xs bg-[#eef2f6] neu-pressed-sm rounded-lg font-mono text-center font-bold text-slate-700"
                        />
                        <input 
                          type="color"
                          value={params.secondaryColor}
                          onChange={(e) => setParams(prev => ({ ...prev, secondaryColor: e.target.value }))}
                          className="h-6.5 w-6.5 border border-slate-300/40 rounded-lg cursor-pointer p-0 bg-transparent"
                        />
                      </div>
                    </div>
                  )}

                  {params.style === 'gradient' && (
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-slate-600 font-bold">Angle</span>
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-[#eef2f6] neu-pressed-sm px-1.5 py-0.5 rounded">{params.gradientAngle}°</span>
                      </div>
                      <div className="p-1 neu-pressed-sm rounded-lg">
                        <input 
                          type="range"
                          min="0"
                          max="360"
                          value={params.gradientAngle}
                          onChange={(e) => setParams(prev => ({ ...prev, gradientAngle: parseInt(e.target.value) }))}
                          className="w-full h-1 bg-slate-300/30 rounded-lg appearance-none cursor-pointer accent-indigo-600 py-1"
                        />
                      </div>
                    </div>
                  )}

                  {params.style === 'solid-overlay' && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600 font-bold">Box Color</span>
                        <div className="flex items-center gap-2">
                          <input 
                            type="text" 
                            value={params.backgroundColor}
                            onChange={(e) => setParams(prev => ({ ...prev, backgroundColor: e.target.value }))}
                            className="w-20 px-2 py-1 text-xs bg-[#eef2f6] neu-pressed-sm rounded-lg font-mono text-center font-bold text-slate-700"
                          />
                          <input 
                            type="color"
                            value={params.backgroundColor}
                            onChange={(e) => setParams(prev => ({ ...prev, backgroundColor: e.target.value }))}
                            className="h-6.5 w-6.5 border border-slate-300/40 rounded-lg cursor-pointer p-0 bg-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-slate-600 font-bold">Backing Radius</span>
                          <span className="text-xs font-mono font-bold text-indigo-600 bg-[#eef2f6] neu-pressed-sm px-1.5 py-0.5 rounded">{params.backgroundRadius}px</span>
                        </div>
                        <div className="p-1 neu-pressed-sm rounded-lg">
                          <input 
                            type="range"
                            min="0"
                            max="50"
                            value={params.backgroundRadius}
                            onChange={(e) => setParams(prev => ({ ...prev, backgroundRadius: parseInt(e.target.value) }))}
                            className="w-full h-1 bg-slate-300/30 rounded-lg appearance-none cursor-pointer accent-indigo-600 py-1"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

            <hr className="border-slate-300/30 my-5" />

            {/* Quick reset actions */}
            <button
              onClick={() => setParams({
                size: 48,
                strokeWidth: 2,
                primaryColor: '#6366f1',
                secondaryColor: '#4f46e5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                style: 'outline',
                gradientAngle: 45,
                backgroundColor: '#cbd5e1',
                backgroundRadius: 20
              })}
              className="w-full py-2.5 neu-btn-interactive text-slate-600 text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCw className="h-3.5 w-3.5 text-slate-500 animate-spin-hover" /> Reset Parameters
            </button>
          </div>
        </aside>

      </div>

      {/* 3. Footer Content */}
      <footer className="w-full max-w-[1720px] mx-auto mt-12 neu-raised rounded-2xl p-6 text-slate-500 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-sm font-extrabold tracking-tight text-slate-800 font-display">Vectra Soft-UI Platform</span>
          <p className="mt-1 text-[11px] text-slate-400 font-medium">
            {ICONS.length} precision vector shapes with premium customizable neumorphic structures.
            <span className="text-indigo-600 font-bold block md:inline md:ml-2">Collect by Abdullah</span>
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono font-bold text-[10px]">
          <span>MIT License</span>
          <span>·</span>
          <span>Platform 1.4.0</span>
          <span>·</span>
          <span className="text-indigo-600">Soft UI Active</span>
        </div>
      </footer>

      {/* Neumorphic Bottom Right Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-[#eef2f6] neu-raised text-slate-800 px-4 py-3.5 rounded-xl flex items-center gap-2.5 z-50 text-xs font-bold border border-white/50">
          <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span>
          <span>{notification}</span>
        </div>
      )}

    </div>
  );
}
