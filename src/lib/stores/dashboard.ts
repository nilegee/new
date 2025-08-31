import { writable } from 'svelte/store';
import type { Widget, DashboardLayout, WidgetDefinition } from '$lib/types/widget';

// Available widget types
export const widgetDefinitions: WidgetDefinition[] = [
  {
    type: 'stats',
    name: 'Statistics',
    description: 'Display key metrics and numbers',
    icon: 'BarChart3',
    defaultSize: { width: 1, height: 1 }
  },
  {
    type: 'chart',
    name: 'Chart',
    description: 'Visualize data with charts',
    icon: 'TrendingUp',
    defaultSize: { width: 2, height: 2 }
  },
  {
    type: 'todo',
    name: 'Todo List',
    description: 'Manage tasks and todos',
    icon: 'CheckSquare',
    defaultSize: { width: 1, height: 2 }
  },
  {
    type: 'weather',
    name: 'Weather',
    description: 'Current weather information',
    icon: 'Cloud',
    defaultSize: { width: 1, height: 1 }
  },
  {
    type: 'calendar',
    name: 'Calendar',
    description: 'View upcoming events',
    icon: 'Calendar',
    defaultSize: { width: 2, height: 2 }
  },
  {
    type: 'notes',
    name: 'Quick Notes',
    description: 'Jot down quick notes',
    icon: 'StickyNote',
    defaultSize: { width: 1, height: 1 }
  }
];

// Default dashboard layout
const defaultLayout: DashboardLayout = {
  id: 'default',
  name: 'My Dashboard',
  columns: 4,
  widgets: [
    {
      id: 'stats-1',
      type: 'stats',
      title: 'Total Users',
      position: { x: 0, y: 0 },
      size: { width: 1, height: 1 },
      data: { value: 1234, change: '+12%' }
    },
    {
      id: 'stats-2',
      type: 'stats',
      title: 'Revenue',
      position: { x: 1, y: 0 },
      size: { width: 1, height: 1 },
      data: { value: '$45,678', change: '+8%' }
    },
    {
      id: 'chart-1',
      type: 'chart',
      title: 'Analytics Overview',
      position: { x: 2, y: 0 },
      size: { width: 2, height: 2 },
      data: {}
    },
    {
      id: 'todo-1',
      type: 'todo',
      title: 'Tasks',
      position: { x: 0, y: 1 },
      size: { width: 1, height: 2 },
      data: {
        items: [
          { id: 1, text: 'Review dashboard design', completed: false },
          { id: 2, text: 'Update user documentation', completed: true },
          { id: 3, text: 'Plan next sprint', completed: false }
        ]
      }
    },
    {
      id: 'weather-1',
      type: 'weather',
      title: 'Weather',
      position: { x: 1, y: 1 },
      size: { width: 1, height: 1 },
      data: { temp: 72, condition: 'Sunny', location: 'San Francisco' }
    }
  ]
};

export const dashboardStore = writable<DashboardLayout>(defaultLayout);
export const editModeStore = writable<boolean>(false);

// Widget management functions
export function addWidget(widgetType: string) {
  dashboardStore.update(layout => {
    const definition = widgetDefinitions.find(def => def.type === widgetType);
    if (!definition) return layout;

    const newWidget: Widget = {
      id: `${widgetType}-${Date.now()}`,
      type: widgetType,
      title: definition.name,
      position: { x: 0, y: 0 },
      size: definition.defaultSize,
      data: {}
    };

    return {
      ...layout,
      widgets: [...layout.widgets, newWidget]
    };
  });
}

export function removeWidget(widgetId: string) {
  dashboardStore.update(layout => ({
    ...layout,
    widgets: layout.widgets.filter(w => w.id !== widgetId)
  }));
}

export function updateWidget(widgetId: string, updates: Partial<Widget>) {
  dashboardStore.update(layout => ({
    ...layout,
    widgets: layout.widgets.map(w => 
      w.id === widgetId ? { ...w, ...updates } : w
    )
  }));
}