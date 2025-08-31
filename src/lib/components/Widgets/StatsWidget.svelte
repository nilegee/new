<script lang="ts">
  import { TrendingUp, TrendingDown } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  
  export let widget: Widget;
  
  $: data = widget.data || { value: 0, change: '0%' };
  $: isPositive = data.change?.startsWith('+');
</script>

<div class="widget-container h-full">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
  </div>
  
  <div class="flex flex-col justify-center h-full">
    <div class="text-3xl font-bold text-gray-900 mb-2">
      {data.value}
    </div>
    
    {#if data.change}
      <div class="flex items-center text-sm {isPositive ? 'text-green-600' : 'text-red-600'}">
        {#if isPositive}
          <TrendingUp class="w-4 h-4 mr-1" />
        {:else}
          <TrendingDown class="w-4 h-4 mr-1" />
        {/if}
        <span>{data.change}</span>
        <span class="text-gray-500 ml-1">from last month</span>
      </div>
    {/if}
  </div>
</div>