<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { X, Move, Settings } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  import { editModeStore } from '$lib/stores/dashboard';
  
  import StatsWidget from './StatsWidget.svelte';
  import ChartWidget from './ChartWidget.svelte';
  import TodoWidget from './TodoWidget.svelte';
  import WeatherWidget from './WeatherWidget.svelte';
  import CalendarWidget from './CalendarWidget.svelte';
  import NotesWidget from './NotesWidget.svelte';
  
  export let widget: Widget;
  
  const dispatch = createEventDispatcher();
  
  const widgetComponents = {
    stats: StatsWidget,
    chart: ChartWidget,
    todo: TodoWidget,
    weather: WeatherWidget,
    calendar: CalendarWidget,
    notes: NotesWidget
  };
  
  $: component = widgetComponents[widget.type as keyof typeof widgetComponents];
</script>

<div 
  class="relative group widget-item"
  style="grid-column: span {widget.size.width}; grid-row: span {widget.size.height};"
  data-widget-id={widget.id}
>
  {#if $editModeStore}
    <div class="absolute top-2 right-2 z-10 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <button
        on:click={() => dispatch('configure', widget.id)}
        class="p-1 bg-white rounded shadow-sm hover:bg-gray-50 transition-colors duration-200"
        title="Configure widget"
      >
        <Settings class="w-4 h-4 text-gray-600" />
      </button>
      <button
        on:click={() => dispatch('remove', widget.id)}
        class="p-1 bg-white rounded shadow-sm hover:bg-red-50 transition-colors duration-200"
        title="Remove widget"
      >
        <X class="w-4 h-4 text-red-600" />
      </button>
    </div>
    
    <div class="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-move drag-handle">
      <div class="p-1 bg-white rounded shadow-sm">
        <Move class="w-4 h-4 text-gray-600" />
      </div>
    </div>
  {/if}
  
  {#if component}
    <svelte:component this={component} {widget} />
  {:else}
    <div class="widget-container h-full flex items-center justify-center">
      <p class="text-gray-500">Unknown widget type: {widget.type}</p>
    </div>
  {/if}
</div>