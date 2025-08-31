<script lang="ts">
  import { Save, Bell, Shield, Palette, Globe } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-6">
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
    
    <div class="space-y-8">
      <!-- General Settings -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <Globe class="w-5 h-5 text-gray-600" />
          <h3 class="text-lg font-semibold text-gray-900">General</h3>
        </div>
        <div class="space-y-4 ml-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select class="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select class="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <option>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Notifications -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <Bell class="w-5 h-5 text-gray-600" />
          <h3 class="text-lg font-semibold text-gray-900">Notifications</h3>
        </div>
        <div class="space-y-4 ml-8">
          <label class="flex items-center">
            <input type="checkbox" checked class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span class="ml-3 text-sm text-gray-700">Email notifications</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" checked class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span class="ml-3 text-sm text-gray-700">Push notifications</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span class="ml-3 text-sm text-gray-700">SMS notifications</span>
          </label>
        </div>
      </div>
      
      <!-- Privacy -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <Shield class="w-5 h-5 text-gray-600" />
          <h3 class="text-lg font-semibold text-gray-900">Privacy</h3>
        </div>
        <div class="space-y-4 ml-8">
          <label class="flex items-center">
            <input type="checkbox" checked class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span class="ml-3 text-sm text-gray-700">Make profile public</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
            <span class="ml-3 text-sm text-gray-700">Allow search engines to index profile</span>
          </label>
        </div>
      </div>
      
      <!-- Appearance -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <Palette class="w-5 h-5 text-gray-600" />
          <h3 class="text-lg font-semibold text-gray-900">Appearance</h3>
        </div>
        <div class="space-y-4 ml-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <select class="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Save button -->
    <div class="mt-8 pt-6 border-t border-gray-200">
      <button class="btn-primary flex items-center space-x-2">
        <Save class="w-4 h-4" />
        <span>Save Changes</span>
      </button>
    </div>
  </div>
</div>