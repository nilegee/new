<script lang="ts">
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  
  export let widget: Widget;
  
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);
</script>

<div class="widget-container h-full">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
  </div>
  
  <div class="flex-1">
    <!-- Calendar header -->
    <div class="flex items-center justify-between mb-4">
      <button class="btn-icon">
        <ChevronLeft class="w-4 h-4" />
      </button>
      <h4 class="text-lg font-semibold text-gray-900">
        {monthNames[currentMonth]} {currentYear}
      </h4>
      <button class="btn-icon">
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>
    
    <!-- Days of week -->
    <div class="grid grid-cols-7 gap-1 mb-2">
      {#each ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as day}
        <div class="text-xs font-medium text-gray-500 text-center py-2">
          {day}
        </div>
      {/each}
    </div>
    
    <!-- Calendar grid -->
    <div class="grid grid-cols-7 gap-1">
      {#each emptyDays as _}
        <div class="aspect-square"></div>
      {/each}
      
      {#each days as day}
        <button
          class="aspect-square flex items-center justify-center text-sm rounded-lg transition-colors duration-200 {
            day === currentDate
              ? 'bg-primary-600 text-white font-semibold'
              : 'hover:bg-gray-100 text-gray-700'
          }"
        >
          {day}
        </button>
      {/each}
    </div>
  </div>
</div>