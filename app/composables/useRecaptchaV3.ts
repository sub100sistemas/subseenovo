interface GrecaptchaV3 {
  ready: (callback: () => void) => void
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

declare global {
  interface Window {
    grecaptcha?: GrecaptchaV3
  }
}

let loading: Promise<void> | null = null

export function useRecaptchaV3() {
  const siteKey = String(useRuntimeConfig().public.recaptchaSiteKey ?? '')

  function load(): Promise<void> {
    if (!import.meta.client) {
      return Promise.reject(new Error('recaptcha-client-only'))
    }
    if (!siteKey) {
      return Promise.reject(new Error('recaptcha-site-key-missing'))
    }
    if (window.grecaptcha) {
      return Promise.resolve()
    }
    if (!loading) {
      loading = new Promise<void>((resolve, reject) => {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => {
          loading = null
          script.remove()
          reject(new Error('recaptcha-load-failed'))
        }
        document.head.appendChild(script)
      })
    }
    return loading
  }

  function preload() {
    load().catch(() => undefined)
  }

  async function getToken(action: string | undefined): Promise<string> {
    if (!action) {
      throw new Error('recaptcha-action-missing')
    }
    await load()
    const grecaptcha = window.grecaptcha
    if (!grecaptcha) {
      throw new Error('recaptcha-unavailable')
    }
    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action }).then(resolve, reject)
      })
    })
  }

  return { load, preload, getToken }
}
