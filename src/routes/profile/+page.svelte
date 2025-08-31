<script lang="ts">
  import { MapPin, Calendar, Edit, Camera, Mail, Users, FileText } from 'lucide-svelte';
  import { userStore } from '$lib/stores/user';
  import { formatDistanceToNow } from 'date-fns';
  
  $: user = $userStore;
  
  function formatJoinDate(dateString: string) {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  }
</script>

<svelte:head>
  <title>Profile - {user.name}</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-6">
  <!-- Profile header -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <!-- Cover photo -->
    <div class="h-32 bg-gradient-to-r from-primary-500 to-primary-600 relative">
      <button class="absolute top-4 right-4 btn-icon bg-white bg-opacity-20 hover:bg-opacity-30 text-white">
        <Camera class="w-4 h-4" />
      </button>
    </div>
    
    <!-- Profile info -->
    <div class="px-6 pb-6">
      <div class="flex items-end space-x-5 -mt-12">
        <div class="relative">
          <img
            src={user.avatar}
            alt={user.name}
            class="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <button class="absolute bottom-0 right-0 p-1 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-200">
            <Camera class="w-4 h-4" />
          </button>
        </div>
        
        <div class="flex-1 min-w-0 pb-2">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p class="text-gray-600">{user.email}</p>
            </div>
            <button class="btn-secondary flex items-center space-x-2">
              <Edit class="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Bio and details -->
      <div class="mt-6 space-y-4">
        <p class="text-gray-700 leading-relaxed">{user.bio}</p>
        
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div class="flex items-center space-x-1">
            <MapPin class="w-4 h-4" />
            <span>{user.location}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Calendar class="w-4 h-4" />
            <span>Joined {formatJoinDate(user.joinDate)}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Mail class="w-4 h-4" />
            <span>{user.email}</span>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="flex items-center space-x-6 pt-4 border-t border-gray-100">
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900">{user.stats.posts}</div>
            <div class="text-sm text-gray-600">Posts</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900">{user.stats.followers.toLocaleString()}</div>
            <div class="text-sm text-gray-600">Followers</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900">{user.stats.following}</div>
            <div class="text-sm text-gray-600">Following</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Profile content tabs -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="border-b border-gray-200">
      <nav class="flex space-x-8 px-6">
        <button class="py-4 px-1 border-b-2 border-primary-600 font-medium text-sm text-primary-600">
          Posts
        </button>
        <button class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200">
          About
        </button>
        <button class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200">
          Activity
        </button>
      </nav>
    </div>
    
    <div class="p-6">
      <div class="text-center py-12">
        <FileText class="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
        <p class="text-gray-600">When you create posts, they'll appear here.</p>
      </div>
    </div>
  </div>
</div>