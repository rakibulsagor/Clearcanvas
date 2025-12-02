import { DimensionPreset } from './types';

export const COMMON_PRESETS: DimensionPreset[] = [
  { name: 'Instagram Square', width: 1080, height: 1080, category: 'Social' },
  { name: 'Instagram Portrait', width: 1080, height: 1350, category: 'Social' },
  { name: 'Instagram Story', width: 1080, height: 1920, category: 'Social' },
  { name: 'Twitter Post', width: 1200, height: 675, category: 'Social' },
  { name: 'Facebook Cover', width: 820, height: 312, category: 'Social' },
  { name: 'YouTube Thumbnail', width: 1280, height: 720, category: 'Video' },
  { name: 'Full HD (1080p)', width: 1920, height: 1080, category: 'Video' },
  { name: '4K UHD', width: 3840, height: 2160, category: 'Video' },
  { name: 'Favicon', width: 32, height: 32, category: 'Device' },
  { name: 'App Icon (iOS)', width: 180, height: 180, category: 'Device' },
];