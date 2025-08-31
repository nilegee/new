<script lang="ts">
  import { page } from '$app/stores';
  import { Home, User, Rss, Settings, LayoutDashboard } from 'lucide-svelte';
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Feed', href: '/feed', icon: Rss },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];
</script>

<aside class="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
  <div class="flex flex-col h-full">
    <!-- Logo -->
    <div class="flex items-center px-6 py-4 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <Home class="w-5 h-5 text-white" />
        </div>
        <span class="text-xl font-bold text-gray-900">Dashboard</span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-2">
      {#each navigation as item}
        <a
          href={item.href}
          class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 {
            $page.url.pathname === item.href
              ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }"
        >
          <svelte:component this={item.icon} class="w-5 h-5 mr-3" />
          {item.name}
        </a>
      {/each}
    </nav>

    <!-- User Profile -->
    <div class="px-4 py-4 border-t border-gray-200">
      <div class="flex items-center space-x-3">
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="User avatar"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
          <p class="text-xs text-gray-500 truncate">alex@example.com</p>
        </div>
      </div>
    </div>
  </div>
</aside>