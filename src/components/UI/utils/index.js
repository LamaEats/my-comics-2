import { dynamicExport } from '../../../dynamicExport'

const { makeClassNames, utils } = dynamicExport(require.context('.', false, /.js$/))(['index'])

export default { makeClassNames, ...utils }
