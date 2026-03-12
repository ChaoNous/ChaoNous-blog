<script lang="ts">
  import { ICON_SVG_DATA } from "@utils/svelte-icon-svgs";

  // Accept the same props as @iconify/svelte Icon
  let {
    icon,
    class: className = "",
    width,
    height,
    ...restProps
  }: {
    icon: string;
    class?: string;
    width?: string | number;
    height?: string | number;
    [key: string]: any;
  } = $props();

  // Special loading spinner icon (replaces eos-icons:loading)
  const isLoading = $derived(icon === "eos-icons:loading");

  const iconData = $derived(ICON_SVG_DATA[icon]);
  const viewBox = $derived(
    iconData ? `0 0 ${iconData.width} ${iconData.height}` : "0 0 24 24"
  );
</script>

{#if isLoading}
  <svg
    class="iconsvg-spinner {className}"
    width={width || "1em"}
    height={height || "1em"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="47 16" />
  </svg>
{:else if iconData}
  <svg
    class={className}
    width={width || "1em"}
    height={height || "1em"}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    {@html iconData.body}
  </svg>
{:else}
  <!-- Fallback: render nothing for unknown icons -->
  <span class={className} style="display:inline-block;width:{width || '1em'};height:{height || '1em'}"></span>
{/if}

<style>
  svg {
    display: inline-block;
    vertical-align: -0.125em;
  }

  .iconsvg-spinner {
    animation: iconsvg-spin 1s linear infinite;
  }

  @keyframes iconsvg-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
