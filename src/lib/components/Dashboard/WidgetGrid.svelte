<script lang="ts">
  import { onMount } from 'svelte';
  import Sortable from 'sortablejs';
  import WidgetContainer from '$lib/components/Widgets/WidgetContainer.svelte';
  import { dashboardStore, editModeStore, removeWidget } from '$lib/stores/dashboard';
  import type { Widget } from '$lib/types/widget';
  
  export let widgets: Widget[];
  
  let gridContainer: HTMLDivElement;
  let sortableInstance: Sortable | null = null;
  
  onMount(() => {
    return editModeStore.subscribe(editMode => {
      if (editMode && gridContainer) {
        sortableInstance = Sortable.create(gridContainer, {
          animation: 150,
          handle: '.drag-handle',
          ghostClass: 'opacity-50',
          chosenClass: 'scale-105',
          onEnd: (evt) => {
            // Handle reordering logic here
            console.log('Widget reordered:', evt);
          }
        });
      } else if (sortableInstance) {
        sortableInstance.destroy();
        sortableInstance = null;
      }
    });
  });
  
  function handleRemoveWidget(event: CustomEvent<string>) {
    removeWidget(event.detail);
  }
  
  function handleConfigureWidget(event: CustomEvent<string>) {
    console.log('Configure widget:', event.detail);
    // TODO: Open widget configuration modal
  }
</script>

<div 
  bind:this={gridContainer}
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
>
  {#each widgets as widget (widget.id)}
    <WidgetContainer 
      {widget} 
      on:remove={handleRemoveWidget}
      on:configure={handleConfigureWidget}
    />
  {/each}
</div>