const debounce = (callback: () => void, delay: number) => {
  let timer: NodeJS.Timeout
  return () => {
    clearTimeout(timer)
    timer = setTimeout(callback, delay)
  }
}

export default debounce
