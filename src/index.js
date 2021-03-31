import './packages/theme/index.styl'
import JAutocomplete from './packages/autocomplete/index.js'
import JBubble from './packages/bubble/index.js'
import JButton from './packages/button/index.js'
import JCard from './packages/card/index.js'
import JInput from './packages/input/index.js'
import JTag from './packages/tag/index.js'
import JSelect from './packages/select/index.js'
import JOption from './packages/option/index.js'


const components = [
    JAutocomplete,
    JBubble,
    JButton,
    JCard,
    JInput,
    JTag,
    JSelect,
    JOption
]

const install = function ( Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name,component)
    })    
    Vue.prototype.$JUI = {
        size: opts.size || ''
    }
}


export default {
    install,
    JAutocomplete,
    JBubble,
    JButton,
    JCard,
    JInput,
    JTag,
    JSelect,
    JOption
}
