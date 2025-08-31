<script lang="ts">
  import '../app.css';
  import Sidebar from '$lib/components/Layout/Sidebar.svelte';
  import Header from '$lib/components/Layout/Header.svelte';
  import { page } from '$app/stores';
  
  $: pageTitle = getPageTitle($page.url.pathname);
  
  function getPageTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return 'Dashboard';
      case '/feed':
        return 'Feed';
      case '/profile':
        return 'Profile';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  }
</script>

<div class="min-h-screen bg-gray-50">
  <Sidebar />
  <div class="lg:ml-64">
    <Header title={pageTitle} />
    <main class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</div>