type LocalKey = 'token'

export const setLocal = (key: LocalKey, value: string) => {
  localStorage.setItem(key, value)
}

export const getLocal = (key: LocalKey) => {
  return localStorage.getItem(key)
}
