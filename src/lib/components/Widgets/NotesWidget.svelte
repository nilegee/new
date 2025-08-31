<script lang="ts">
  import { Save } from 'lucide-svelte';
  import type { Widget } from '$lib/types/widget';
  import { updateWidget } from '$lib/stores/dashboard';
  
  export let widget: Widget;
  
  let noteText = widget.data?.text || '';
  let isSaving = false;
  
  async function saveNote() {
    isSaving = true;
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 500));
    updateWidget(widget.id, { data: { ...widget.data, text: noteText } });
    isSaving = false;
  }
</script>

<div class="widget-container h-full flex flex-col">
  <div class="widget-header">
    <h3 class="widget-title">{widget.title}</h3>
    <button
      on:click={saveNote}
      disabled={isSaving}
      class="btn-icon {isSaving ? 'opacity-50 cursor-not-allowed' : ''}"
    >
      <Save class="w-4 h-4" />
    </button>
  </div>
  
  <div class="flex-1">
    <textarea
      bind:value={noteText}
      placeholder="Write your notes here..."
      class="w-full h-full resize-none border-0 focus:outline-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400"
    ></textarea>
  </div>
</div>