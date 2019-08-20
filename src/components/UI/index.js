import { dynamicExport } from '../../dynamicExport'

export default dynamicExport(require.context('.', true, /index.js$/))(
  ['less', 'index'],
  'js',
)
