import { TbBrandChrome, TbBrandFirefox, TbBrandSafari } from "react-icons/tb";

export type BrowserType = 'chrome' | 'firefox' | 'safari' | 'edge';

interface BrowserIconProps {
  browser: BrowserType;
  className?: string;
}

// Icon mapping object with explicit type
const BrowserIconMap: Record<BrowserType, React.ElementType> = {
  chrome: TbBrandChrome,
  firefox: TbBrandFirefox,
  safari: TbBrandSafari,
  edge: TbBrandChrome
};

export default function BrowserIcon({ browser, className = "w-5 h-5" }: Readonly<BrowserIconProps>) {
  const Icon = BrowserIconMap[browser];

  if (!Icon) return null;

  return <Icon className={className} />;
}
