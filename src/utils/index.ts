export const toggleScroll = (condition: boolean): void => {
  document.body.style.overflow = condition ? 'hidden' : 'unset'
}

export const formatDate = (date: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const [year, month, day] = date.split("-")
  const formatted = `${months[Number(month) - 1]} ${day}, ${year}`

  return formatted
}

export const capitalizeFirst = (str: string): string => {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export const scrollTop = (): void => {
  window.scrollTo(0, 0)
}