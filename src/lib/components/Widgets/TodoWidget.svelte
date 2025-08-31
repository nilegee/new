<script lang="ts">
  import { Check, Plus, X } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  import { updateWidget } from '$lib/stores/dashboard';
  
  export let widget: Widget;
  
  $: items = widget.data?.items || [];
  
  let newTaskText = '';
  
  function toggleTask(taskId: number) {
    const updatedItems = items.map((item: any) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    updateWidget(widget.id, { data: { ...widget.data, items: updatedItems } });
  }
  
  function addTask() {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim(),
        completed: false
      };
      const updatedItems = [...items, newTask];
      updateWidget(widget.id, { data: { ...widget.data, items: updatedItems } });
      newTaskText = '';
    }
  }
  
  function removeTask(taskId: number) {
    const updatedItems = items.filter((item: any) => item.id !== taskId);
    updateWidget(widget.id, { data: { ...widget.data, items: updatedItems } });
  }
</script>

<div class="widget-container h-full flex flex-col">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
  </div>
  
  <div class="flex-1 flex flex-col">
    <!-- Add new task -->
    <div class="flex mb-4">
      <input
        bind:value={newTaskText}
        on:keydown={(e) => e.key === 'Enter' && addTask()}
        placeholder="Add a new task..."
        class="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
      />
      <button
        on:click={addTask}
        class="px-3 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors duration-200"
      >
        <Plus class="w-4 h-4" />
      </button>
    </div>
    
    <!-- Task list -->
    <div class="flex-1 space-y-2 overflow-y-auto">
      {#each items as item (item.id)}
        <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <button
            on:click={() => toggleTask(item.id)}
            class="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 {
              item.completed 
                ? 'bg-primary-600 border-primary-600 text-white' 
                : 'border-gray-300 hover:border-primary-400'
            }"
          >
            {#if item.completed}
              <Check class="w-3 h-3" />
            {/if}
          </button>
          
          <span class="flex-1 text-sm {item.completed ? 'line-through text-gray-500' : 'text-gray-900'}">
            {item.text}
          </span>
          
          <button
            on:click={() => removeTask(item.id)}
            class="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>