export const parseSessionStorageValue = (key: string): {[key: string]: any} => {
  const storageValue = sessionStorage.getItem(key)
  if (storageValue == null) return {}
  return JSON.parse(storageValue)
}

export const state = {
  form: parseSessionStorageValue('sampleForm')
}

export const mutations = {
  changeFormState (state, obj) {
    state.form = { ...state.form, ...obj }
    sessionStorage.setItem('sampleForm', JSON.stringify(state.form))
  }
}