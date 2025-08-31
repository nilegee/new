export interface Widget {
  id: string;
  type: string;
  title: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  config?: Record<string, any>;
  data?: any;
}

export interface WidgetDefinition {
  type: string;
  name: string;
  description: string;
  icon: string;
  defaultSize: {
    width: number;
    height: number;
  };
  configSchema?: Record<string, any>;
}

export interface DashboardLayout {
  id: string;
  name: string;
  widgets: Widget[];
  columns: number;
}