<script lang="ts">
  import { Cloud, Sun, CloudRain, MapPin } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  
  export let widget: Widget;
  
  $: data = widget.data || { temp: 72, condition: 'Sunny', location: 'San Francisco' };
  
  function getWeatherIcon(condition: string) {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return Sun;
      case 'cloudy':
        return Cloud;
      case 'rainy':
        return CloudRain;
      default:
        return Sun;
    }
  }
</script>

<div class="widget-container h-full">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
  </div>
  
  <div class="flex flex-col justify-center h-full">
    <div class="text-center">
      <div class="flex justify-center mb-4">
        <svelte:component this={getWeatherIcon(data.condition)} class="w-12 h-12 text-yellow-500" />
      </div>
      
      <div class="text-4xl font-bold text-gray-900 mb-2">
        {data.temp}°F
      </div>
      
      <div class="text-lg text-gray-600 mb-3">
        {data.condition}
      </div>
      
      <div class="flex items-center justify-center text-sm text-gray-500">
        <MapPin class="w-4 h-4 mr-1" />
        {data.location}
      </div>
    </div>
  </div>
</div>