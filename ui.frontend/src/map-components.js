import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import Navbar from './components/Navbar/index'
import GeneralInputs from './components/GeneralInputs/index'
import DropDown from './components/DropDown/index'
import CheckBox from './components/CheckBox/index'
import Button from './components/Button/index'
import Header from './components/Header/index'

import {
  withComponentMappingContext,
  MapTo
} from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/text')(Text)

MapTo('vue/components/navbar')(Navbar)

MapTo('vue/components/general-inputs')(GeneralInputs)

MapTo('vue/components/dropdown')(DropDown)

MapTo('vue/components/input-checkbox')(CheckBox)

MapTo('vue/components/button')(Button)

MapTo('vue/components/header')(Header)

// AppPage Mapping
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
