import { IconDef } from './iconsData';

export type IconStyle = 'outline' | 'solid-overlay' | 'duotone' | 'gradient';

export interface CustomizerParams {
  size: number;
  strokeWidth: number;
  primaryColor: string;
  secondaryColor: string;
  strokeLinecap: 'round' | 'square';
  strokeLinejoin: 'round' | 'miter' | 'bevel';
  style: IconStyle;
  gradientAngle: number;
  backgroundColor: string; // for solid-overlay
  backgroundRadius: number; // in px
}

export function generateSvgString(icon: IconDef, params: CustomizerParams): string {
  const {
    size,
    strokeWidth,
    primaryColor,
    secondaryColor,
    strokeLinecap,
    strokeLinejoin,
    style,
    gradientAngle,
    backgroundColor,
    backgroundRadius
  } = params;

  let defs = '';
  let fill = 'none';
  let stroke = primaryColor;
  let elementAttributes = '';

  if (style === 'gradient') {
    const gradientId = `grad-${icon.id}`;
    const x1 = Math.round(50 - 50 * Math.cos((gradientAngle * Math.PI) / 180));
    const y1 = Math.round(50 - 50 * Math.sin((gradientAngle * Math.PI) / 180));
    const x2 = Math.round(50 + 50 * Math.cos((gradientAngle * Math.PI) / 180));
    const y2 = Math.round(50 + 50 * Math.sin((gradientAngle * Math.PI) / 180));

    defs = `
    <defs>
      <linearGradient id="${gradientId}" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">
        <stop offset="0%" stop-color="${primaryColor}" />
        <stop offset="100%" stop-color="${secondaryColor}" />
      </linearGradient>
    </defs>`;
    stroke = `url(#${gradientId})`;
  }

  // Generate standard element strings
  const renderElements = (isSecPass: boolean, opacityOverride?: number) => {
    let output = '';

    // Render paths
    const targetPaths = isSecPass ? (icon.secPaths || []) : icon.paths;
    targetPaths.forEach(d => {
      const pathFill = style === 'duotone' && !isSecPass ? `${primaryColor}1a` : 'none';
      const pathStroke = isSecPass ? secondaryColor : stroke;
      const pathOpacity = isSecPass ? (opacityOverride ?? 0.5) : 1;
      output += `  <path d="${d}" fill="${pathFill}" stroke="${pathStroke}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"${pathOpacity !== 1 ? ` opacity="${pathOpacity}"` : ''} />\n`;
    });

    // Render shapes
    if (icon.shapes) {
      icon.shapes.forEach(shape => {
        const isShapeSec = !!shape.isSec;
        if (isShapeSec !== isSecPass) return;

        const shapeStroke = isSecPass ? secondaryColor : stroke;
        const shapeFill = style === 'duotone' && !isSecPass ? `${primaryColor}1a` : 'none';
        const shapeOpacity = isSecPass ? (opacityOverride ?? 0.5) : 1;

        const propsStr = Object.entries(shape.props)
          .map(([k, v]) => `${k}="${v}"`)
          .join(' ');

        if (shape.type === 'circle') {
          output += `  <circle ${propsStr} fill="${shapeFill}" stroke="${shapeStroke}" stroke-width="${strokeWidth}"${shapeOpacity !== 1 ? ` opacity="${shapeOpacity}"` : ''} />\n`;
        } else if (shape.type === 'rect') {
          output += `  <rect ${propsStr} fill="${shapeFill}" stroke="${shapeStroke}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}" stroke-linejoin="${strokeLinejoin}"${shapeOpacity !== 1 ? ` opacity="${shapeOpacity}"` : ''} />\n`;
        } else if (shape.type === 'line') {
          output += `  <line ${propsStr} stroke="${shapeStroke}" stroke-width="${strokeWidth}" stroke-linecap="${strokeLinecap}"${shapeOpacity !== 1 ? ` opacity="${shapeOpacity}"` : ''} />\n`;
        }
      });
    }

    return output;
  };

  const innerSvgContent = defs + '\n' + renderElements(false) + renderElements(true);

  if (style === 'solid-overlay') {
    // Return wrapped icon inside a rounded box background
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="${backgroundRadius}" fill="${backgroundColor}" />
  <g transform="translate(25, 25) scale(0.5)">
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
    ${innerSvgContent.trim().split('\n').map(l => '  ' + l).join('\n')}
    </svg>
  </g>
</svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
${innerSvgContent.trim()}
</svg>`;
}

export function generateReactComponent(icon: IconDef, params: CustomizerParams): string {
  const { strokeWidth, strokeLinecap, strokeLinejoin, style } = params;
  const compName = icon.name.replace(/\s+/g, '') + 'Icon';

  if (style === 'gradient') {
    return `import React from 'react';

export function ${compName}({ size = 24, primary = "${params.primaryColor}", secondary = "${params.secondaryColor}", className = "" }) {
  const gradientId = "grad-${icon.id}";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primary} />
          <stop offset="100%" stopColor={secondary} />
        </linearGradient>
      </defs>
      ${icon.paths.map(d => `<path d="${d}" stroke={\`url(#\${gradientId})\`} strokeWidth={${strokeWidth}} strokeLinecap="${strokeLinecap}" strokeLinejoin="${strokeLinejoin}" />`).join('\n      ')}
      ${icon.shapes?.map(s => {
        const props = Object.entries(s.props).map(([k,v]) => `${k}="${v}"`).join(' ');
        return `<${s.type} ${props} stroke={\`url(#\${gradientId})\`} strokeWidth={${strokeWidth}} />`;
      }).join('\n      ') || ''}
    </svg>
  );
}`;
  }

  if (style === 'duotone') {
    return `import React from 'react';

export function ${compName}({ size = 24, color = "${params.primaryColor}", secondaryColor = "${params.secondaryColor}", className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      ${icon.paths.map(d => `<path d="${d}" fill={\`\${color}1a\`} stroke={color} strokeWidth={${strokeWidth}} strokeLinecap="${strokeLinecap}" strokeLinejoin="${strokeLinejoin}" />`).join('\n      ')}
      ${icon.shapes?.map(s => {
        const props = Object.entries(s.props).map(([k,v]) => `${k}="${v}"`).join(' ');
        const shapeStroke = s.isSec ? 'secondaryColor' : 'color';
        const opacity = s.isSec ? 0.5 : 1;
        return `<${s.type} ${props} fill={\`\${color}1a\`} stroke={${shapeStroke}} strokeWidth={${strokeWidth}} opacity={${opacity}} />`;
      }).join('\n      ') || ''}
    </svg>
  );
}`;
  }

  return `import React from 'react';

export function ${compName}({ size = 24, color = "${params.primaryColor}", className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={${strokeWidth}} strokeLinecap="${strokeLinecap}" strokeLinejoin="${strokeLinejoin}" className={className}>
      ${icon.paths.map(d => `<path d="${d}" />`).join('\n      ')}
      ${icon.shapes?.map(s => {
        const props = Object.entries(s.props).map(([k,v]) => `${k}="${v}"`).join(' ');
        return `<${s.type} ${props} />`;
      }).join('\n      ') || ''}
    </svg>
  );
}`;
}

export function generateTailwindSnippet(icon: IconDef, params: CustomizerParams): string {
  // Generates a pure inline HTML SVG snippet using Tailwind classes
  const { strokeWidth, style } = params;
  const strokeClass = style === 'gradient' ? 'stroke-[url(#gradient)]' : 'stroke-indigo-600';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ${strokeClass} fill-none" viewBox="0 0 24 24" stroke-width="${strokeWidth}">
  ${icon.paths.map(d => `<path stroke-linecap="round" stroke-linejoin="round" d="${d}" />`).join('\n  ')}
</svg>`;
}

export function generateSpritesheet(selectedIcons: IconDef[], params: CustomizerParams): string {
  let symbols = '';
  selectedIcons.forEach(icon => {
    const rawSvg = generateSvgString(icon, { ...params, size: 24 });
    // extract contents between <svg> and </svg>
    const match = rawSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    if (match) {
      const contents = match[1].trim();
      symbols += `  <symbol id="icon-${icon.id}" viewBox="0 0 24 24">\n    ${contents.replace(/\n/g, '\n    ')}\n  </symbol>\n`;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n${symbols}</svg>`;
}
