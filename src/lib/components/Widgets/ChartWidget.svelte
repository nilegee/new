<script lang="ts">
  import { onMount } from 'svelte';
  import type { Widget } from '$lib/types/widget';
  
  export let widget: Widget;
  
  let chartContainer: HTMLDivElement;
  
  // Mock chart data
  const chartData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 600 },
    { month: 'Apr', value: 800 },
    { month: 'May', value: 500 },
    { month: 'Jun', value: 900 }
  ];
  
  onMount(() => {
    // Simple SVG chart implementation
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '200');
    svg.setAttribute('viewBox', '0 0 400 200');
    
    const maxValue = Math.max(...chartData.map(d => d.value));
    const barWidth = 400 / chartData.length;
    
    chartData.forEach((data, index) => {
      const barHeight = (data.value / maxValue) * 160;
      const x = index * barWidth + 10;
      const y = 180 - barHeight;
      
      // Bar
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', x.toString());
      rect.setAttribute('y', y.toString());
      rect.setAttribute('width', (barWidth - 20).toString());
      rect.setAttribute('height', barHeight.toString());
      rect.setAttribute('fill', '#3b82f6');
      rect.setAttribute('rx', '4');
      
      // Label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', (x + (barWidth - 20) / 2).toString());
      text.setAttribute('y', '195');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '12');
      text.setAttribute('fill', '#6b7280');
      text.textContent = data.month;
      
      svg.appendChild(rect);
      svg.appendChild(text);
    });
    
    chartContainer.appendChild(svg);
  });
</script>

<div class="widget-container h-full">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
  </div>
  
  <div class="flex-1">
    <div bind:this={chartContainer} class="w-full h-48"></div>
  </div>
</div>