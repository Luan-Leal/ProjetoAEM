import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import Navbar from './components/Navbar/index'

import {
  withComponentMappingContext,
  MapTo
} from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/text')(Text)

MapTo('vue/components/navbar')(Navbar)

// AppPage Mapping
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
