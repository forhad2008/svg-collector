import React from 'react';
import { IconDef } from './iconsData';
import { CustomizerParams } from './svgHelper';

interface Props {
  icon: IconDef;
  params: CustomizerParams;
  sizeOverride?: number;
}

export const SvgIconRenderer: React.FC<Props> = ({ icon, params, sizeOverride }) => {
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

  const currentSize = sizeOverride ?? size;

  const gradientId = `grad-${icon.id}-${style}`;
  const x1 = Math.round(50 - 50 * Math.cos((gradientAngle * Math.PI) / 180));
  const y1 = Math.round(50 - 50 * Math.sin((gradientAngle * Math.PI) / 180));
  const x2 = Math.round(50 + 50 * Math.cos((gradientAngle * Math.PI) / 180));
  const y2 = Math.round(50 + 50 * Math.sin((gradientAngle * Math.PI) / 180));

  let stroke = primaryColor;
  if (style === 'gradient') {
    stroke = `url(#${gradientId})`;
  }

  const renderPaths = (isSecPass: boolean) => {
    const targetPaths = isSecPass ? (icon.secPaths || []) : icon.paths;
    return targetPaths.map((d, index) => {
      const fill = style === 'duotone' && !isSecPass ? `${primaryColor}1a` : 'none';
      const pathStroke = isSecPass ? secondaryColor : stroke;
      const opacity = isSecPass ? 0.5 : 1;

      return (
        <path
          key={`path-${isSecPass ? 'sec' : 'prim'}-${index}`}
          d={d}
          fill={fill}
          stroke={pathStroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          opacity={opacity}
        />
      );
    });
  };

  const renderShapes = (isSecPass: boolean) => {
    if (!icon.shapes) return null;

    return icon.shapes
      .filter(shape => !!shape.isSec === isSecPass)
      .map((shape, index) => {
        const shapeStroke = isSecPass ? secondaryColor : stroke;
        const fill = style === 'duotone' && !isSecPass ? `${primaryColor}1a` : 'none';
        const opacity = isSecPass ? 0.5 : 1;

        if (shape.type === 'circle') {
          return (
            <circle
              key={`circle-${isSecPass ? 'sec' : 'prim'}-${index}`}
              cx={shape.props.cx}
              cy={shape.props.cy}
              r={shape.props.r}
              fill={fill}
              stroke={shapeStroke}
              strokeWidth={strokeWidth}
              opacity={opacity}
            />
          );
        } else if (shape.type === 'rect') {
          return (
            <rect
              key={`rect-${isSecPass ? 'sec' : 'prim'}-${index}`}
              x={shape.props.x}
              y={shape.props.y}
              width={shape.props.width}
              height={shape.props.height}
              rx={shape.props.rx}
              ry={shape.props.ry}
              fill={fill}
              stroke={shapeStroke}
              strokeWidth={strokeWidth}
              strokeLinecap={strokeLinecap}
              strokeLinejoin={strokeLinejoin}
              opacity={opacity}
            />
          );
        } else if (shape.type === 'line') {
          return (
            <line
              key={`line-${isSecPass ? 'sec' : 'prim'}-${index}`}
              x1={shape.props.x1}
              y1={shape.props.y1}
              x2={shape.props.x2}
              y2={shape.props.y2}
              stroke={shapeStroke}
              strokeWidth={strokeWidth}
              strokeLinecap={strokeLinecap}
              opacity={opacity}
            />
          );
        }
        return null;
      });
  };

  const innerSvg = (
    <>
      {style === 'gradient' && (
        <defs>
          <linearGradient id={gradientId} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}>
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
      )}
      {renderPaths(false)}
      {renderShapes(false)}
      {renderPaths(true)}
      {renderShapes(true)}
    </>
  );

  if (style === 'solid-overlay') {
    return (
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-200"
      >
        <rect width="100" height="100" rx={backgroundRadius} fill={backgroundColor} />
        <g transform="translate(25, 25) scale(0.5)">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            {innerSvg}
          </svg>
        </g>
      </svg>
    );
  }

  return (
    <svg
      width={currentSize}
      height={currentSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-200"
    >
      {innerSvg}
    </svg>
  );
};
