<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Plus, X } from 'lucide-svelte';
  import * as Icons from 'lucide-svelte';
  import { widgetDefinitions, addWidget } from '$lib/stores/dashboard';
  
  export let isOpen = false;
  
  const dispatch = createEventDispatcher();
  
  function handleAddWidget(widgetType: string) {
    addWidget(widgetType);
    dispatch('close');
  }
  
  function getIcon(iconName: string) {
    return (Icons as any)[iconName] || Icons.Square;
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div 
        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        on:click={() => dispatch('close')}
        on:keydown={(e) => e.key === 'Escape' && dispatch('close')}
        role="button"
        tabindex="0"
      ></div>
      
      <!-- Modal panel -->
      <div class="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Add Widget</h3>
          <button
            on:click={() => dispatch('close')}
            class="btn-icon"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each widgetDefinitions as definition}
            <button
              on:click={() => handleAddWidget(definition.type)}
              class="p-4 text-left border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svelte:component this={getIcon(definition.icon)} class="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">{definition.name}</h4>
                </div>
              </div>
              <p class="text-sm text-gray-600">{definition.description}</p>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}