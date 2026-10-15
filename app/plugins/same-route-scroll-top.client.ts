function normalizePath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

export default defineNuxtPlugin(() => {
  const sameRouteClicks = useState('same-route-link-clicks', () => 0)

  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('header a[href], footer a[href]')
      if (!anchor) return
      if (anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || url.hash) return
      if (normalizePath(url.pathname) !== normalizePath(window.location.pathname)) return
      if (url.search !== window.location.search) return

      event.preventDefault()
      sameRouteClicks.value++
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    true
  )
})
