<script>
  import { page } from '$app/stores'
  import Head from '$lib/components/head.svelte'
  import PostCard from '$lib/components/post-card.svelte'

  export let data
  let { posts } = data

  $: selectedSubject = $page.url.searchParams.get('subject') ?? 'all'
</script>

<Head title={`All the Posts`} />

<div class="flex flex-col flex-grow w-full items-center gap-4">
  <div class="w-full flex flex-wrap gap-2">
    <div class="flex-1 min-w-fit">
      <a
        href="/posts"
        class="btn btn-sm btn-accent w-full {selectedSubject === 'all'
          ? ''
          : 'bg-base-200 hover:bg-base-300 text-base-content'}"
        >Todos os Posts</a
      >
    </div>

    {#if posts.find(post => post.subject === 'mestrado')}
      <div class="flex-1 min-w-fit">
        <a
          href="/posts?subject=mestrado"
          class="btn btn-sm btn-accent w-full {selectedSubject ===
          'mestrado'
            ? ''
            : 'bg-base-200 hover:bg-base-300 text-base-content'}"
          >Mestrado</a
        >
      </div>
    {/if}
  </div>

  <div class="max-w-sm">
    {#each posts.filter(post => selectedSubject === 'all' || post.subject === selectedSubject) as post}
      <PostCard {post} />
    {/each}
  </div>
</div>
