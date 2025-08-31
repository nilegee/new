<script lang="ts">
  import { Plus, Edit3, Save } from 'lucide-svelte';
  import WidgetGrid from '$lib/components/Dashboard/WidgetGrid.svelte';
  import WidgetSelector from '$lib/components/Dashboard/WidgetSelector.svelte';
  import { dashboardStore, editModeStore } from '$lib/stores/dashboard';
  
  let showWidgetSelector = false;
  
  function toggleEditMode() {
    editModeStore.update(mode => !mode);
  }
  
  function openWidgetSelector() {
    showWidgetSelector = true;
  }
  
  function closeWidgetSelector() {
    showWidgetSelector = false;
  }
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="space-y-6">
  <!-- Dashboard controls -->
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-3xl font-bold text-gray-900">Welcome back!</h2>
      <p class="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
    </div>
    
    <div class="flex items-center space-x-3">
      {#if $editModeStore}
        <button
          on:click={openWidgetSelector}
          class="btn-secondary flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span>Add Widget</span>
        </button>
      {/if}
      
      <button
        on:click={toggleEditMode}
        class="btn-primary flex items-center space-x-2"
      >
        {#if $editModeStore}
          <Save class="w-4 h-4" />
          <span>Save Layout</span>
        {:else}
          <Edit3 class="w-4 h-4" />
          <span>Edit Layout</span>
        {/if}
      </button>
    </div>
  </div>
  
  {#if $editModeStore}
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p class="text-blue-800 text-sm">
        <strong>Edit Mode:</strong> You can now drag widgets to rearrange them, or use the controls to add/remove widgets.
      </p>
    </div>
  {/if}
  
  <!-- Widget grid -->
  <WidgetGrid widgets={$dashboardStore.widgets} />
</div>

<!-- Widget selector modal -->
<WidgetSelector 
  isOpen={showWidgetSelector} 
  on:close={closeWidgetSelector}
/>