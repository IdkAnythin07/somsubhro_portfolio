export type WindowId = 'bio' | 'projects' | 'skills' | 'terminal' | 'contact' | 'audio';

export type AccentColor = 'yellow' | 'pink' | 'cyan' | 'lime' | 'purple' | 'orange';

export interface WindowState {
  id: WindowId;
  title: string;
  tag: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  icon: string;
  headerColor: AccentColor | 'white';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics?: string;
  accent: 'yellow' | 'pink' | 'cyan' | 'lime';
  stars: number;
  demoUrl?: string;
  githubUrl?: string;
  status: 'SHIPPED' | 'BETA' | 'IN_PROGRESS';
  year: string;
}

export interface SkillItem {
  name: string;
  level: string;
  tag: string;
  color: 'yellow' | 'pink' | 'cyan' | 'lime';
}

export interface DesktopShortcut {
  id: WindowId;
  label: string;
  filename: string;
  icon: string;
  color: 'yellow' | 'pink' | 'cyan' | 'lime' | 'purple';
  badge?: string;
}
