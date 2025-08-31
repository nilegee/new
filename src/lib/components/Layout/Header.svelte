<script lang="ts">
  import { Bell, Search, Menu } from 'lucide-svelte';
  
  export let title = 'Dashboard';
</script>

<header class="bg-white border-b border-gray-200 lg:ml-64">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Mobile menu button -->
      <button
        type="button"
        class="lg:hidden btn-icon"
        aria-label="Open sidebar"
      >
        <Menu class="w-6 h-6" />
      </button>

      <!-- Page title -->
      <div class="flex-1 lg:flex-none">
        <h1 class="text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      <!-- Right side actions -->
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <!-- Notifications -->
        <button type="button" class="btn-icon relative">
          <Bell class="w-6 h-6" />
          <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
        </button>

        <!-- Profile dropdown -->
        <div class="relative">
          <button type="button" class="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <img
              class="w-8 h-8 rounded-full object-cover"
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="User avatar"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>