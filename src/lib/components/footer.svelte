<script>
  import {
    authorName,
    initials,
    photoUrl,
    socialLinks,
  } from '@lib/site-config'
  import Fa from 'svelte-fa'
  import {
    faGithub,
    faInstagram,
    faTwitter,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="bg-neutral text-neutral-content p-10 footer">
  <div>
    {#if photoUrl}
      <div class="avatar">
        <div class="w-20 h-20 overflow-hidden rounded-full">
          <img src={photoUrl} alt="profile" />
        </div>
      </div>
    {:else}
      <div class="avatar placeholder">
        <div
          class="bg-neutral-focus text-neutral-content rounded-full w-12"
        >
          <span>{initials}</span>
        </div>
      </div>
    {/if}
    <p>
      Author:
      <br />{authorName}
    </p>
  </div>
  <div>
    <span class="footer-title">Social</span>
    <div class="grid grid-flow-col gap-4">
      {#if socialLinks.find(x => x.title === 'Twitter')}
        <a href={socialLinks.find(x => x.title === 'Twitter').path}>
          <Fa icon={faTwitter} size={'1.8x'} />
        </a>
      {/if}
      {#if socialLinks.find(x => x.title === 'YouTube')}
        <a href={socialLinks.find(x => x.title === 'YouTube').path}>
          <Fa icon={faYoutube} size={'1.8x'} />
        </a>
      {/if}
      {#if socialLinks.find(x => x.title === 'Instagram')}
        <a href={socialLinks.find(x => x.title === 'Instagram').path}>
          <Fa icon={faInstagram} size={'1.8x'} />
        </a>
      {/if}
      {#if socialLinks.find(x => x.title === 'GitHub')}
        <a href={socialLinks.find(x => x.title === 'GitHub').path}>
          <Fa icon={faGithub} size={'1.8x'} />
        </a>
      {/if}
    </div>
  </div>
</footer>
