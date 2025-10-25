const loadYaml = async <T>(path: string): Promise<T> => {
  const module = await import(/* @vite-ignore */ path)
  return module.default
}

export {
  loadYaml
}