import TELECOMUNCATIONS from './services/telecomunications.service'
import ELECTRICITY from './services/electricity.service'
import OPTIC from './services/optic.service'
import TV from './services/tv.service'
import WIRE from './services/wire.service'
import SWITCHBOARD from './services/switchboard.service'

export default [
    TELECOMUNCATIONS,
    WIRE,
    {
        title: 'Porteros Automáticos',
        path: 'porteros-automáticos'
    },
    ELECTRICITY,
    SWITCHBOARD,
    {
        title: 'Telefonía',
        path: 'telefonía'
    },
    TV,
    {
        title: 'Wifi',
        path: 'wifi'
    },
    OPTIC
]
