<script>
  import { pages, siteName } from '@lib/site-config'
  import ThemeSelect from './theme-select.svelte'
</script>

<div
  class="bg-neutral shadow-lg text-neutral-content mb-16 top-0 z-10 navbar sticky flex w-full justify-between"
>
  <div class="mx-2 px-2 navbar-start">
    <span class="font-bold text-lg">{siteName}</span>
  </div>
  <div class="dropdown dropdown-left md:hidden">
    <div tabindex="0" class="m-1 btn btn-ghost">Menu</div>
    <ul
      tabindex="0"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content"
    >
      {#each pages as { title, path }}
        <li>
          <a sveltekit:prefetch href={path}>{title}</a>
        </li>
      {/each}
      <li>
        <ThemeSelect />
      </li>
    </ul>
  </div>
  <div class="mx-2 px-2 hidden navbar-center md:flex">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a
          sveltekit:prefetch
          href={path}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
      {/each}
    </div>
  </div>
  <div class="navbar-end hidden md:flex">
    <ThemeSelect />
  </div>
</div>
