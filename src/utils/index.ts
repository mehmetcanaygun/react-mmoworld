export const toggleScroll = (condition: boolean): void => {
  document.body.style.overflow = condition ? 'hidden' : 'unset'
}