import { forEach, logger } from '@@Components/UI/utils/utils'

const get = (module, key) => module[key] || module

export const dynamicExport = (require) => (excluded = [], testExt = 'js') => {
  const importedModules = {}
  const keys = require.keys()

  if (!keys.length) return importedModules

  forEach(keys, modulePath => {
    if (modulePath.indexOf(testExt) < 0) return

    let moduleName = modulePath.replace(new RegExp(`(\\.\/|\\.${testExt}$)`, 'g'), '')

    try {
      moduleName = moduleName.split('/')[0]
    }
    catch (e) {
      logger('error', e)
    }

    if (excluded.length && excluded.includes(moduleName)) return

    const module = require(modulePath)

    importedModules[moduleName] = module.default || get(module, moduleName)
  })

  return importedModules
}
