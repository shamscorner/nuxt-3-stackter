import { Ref } from 'vue'

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function useHeaderStyle(
  avatarRef: Ref<HTMLElement | null>,
  headerRef: Ref<HTMLElement | null>,
  isInitial: Ref<boolean>,
  isHomePage: boolean
) {
  let downDelay = 0
  const upDelay = 64

  if (avatarRef.value) {
    downDelay = avatarRef.value?.offsetTop ?? 0
  }

  function setProperty(property: string, value: string) {
    document.documentElement.style.setProperty(property, value)
  }

  function removeProperty(property: string) {
    document.documentElement.style.removeProperty(property)
  }

  function updateHeaderStyles() {
    if (!headerRef.value) return

    const { top, height } = headerRef.value.getBoundingClientRect()

    const scrollY = clamp(
      window.scrollY,
      0,
      document.body.scrollHeight - window.innerHeight
    )

    if (isInitial.value) {
      setProperty('--header-position', 'sticky')
    }

    setProperty('--content-offset', `${downDelay}px`)

    if (isInitial.value || scrollY < downDelay) {
      setProperty('--header-height', `${downDelay + height}px`)
      setProperty('--header-mb', `${-downDelay}px`)
    } else if (top + height < -upDelay) {
      const offset = Math.max(height, scrollY - upDelay)
      setProperty('--header-height', `${offset}px`)
      setProperty('--header-mb', `${height - offset}px`)
    } else if (top === 0) {
      setProperty('--header-height', `${scrollY + height}px`)
      setProperty('--header-mb', `${-scrollY}px`)
    }

    if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
      setProperty('--header-inner-position', 'fixed')
      removeProperty('--header-top')
      removeProperty('--avatar-top')
    } else {
      removeProperty('--header-inner-position')
      setProperty('--header-top', '0px')
      setProperty('--avatar-top', '0px')
    }
  }

  function updateAvatarStyles() {
    if (!isHomePage) {
      return
    }

    const fromScale = 1
    const toScale = 36 / 64
    const fromX = 0
    const toX = 2 / 16

    const scrollY = downDelay - window.scrollY

    let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
    scale = clamp(scale, fromScale, toScale)

    let x = (scrollY * (fromX - toX)) / downDelay + toX
    x = clamp(x, fromX, toX)

    setProperty(
      '--avatar-image-transform',
      `translate3d(${x}rem, 0, 0) scale(${scale})`
    )

    const borderScale = 1 / (toScale / scale)
    const borderX = (-toX + x) * borderScale
    const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

    setProperty('--avatar-border-transform', borderTransform)
    setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
  }

  function updateStyles() {
    updateHeaderStyles()
    updateAvatarStyles()
    isInitial.value = false
  }

  function addEvents() {
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)
  }

  function removeEvents() {
    window.removeEventListener('scroll', updateStyles)
    window.removeEventListener('resize', updateStyles)
  }

  onUnmounted(() => {
    removeEvents()
  })

  return {
    updateStyles,
    addEvents,
    removeEvents,
  }
}
