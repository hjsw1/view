import './index.css'

import { appendChild, h, t } from '../src/view'
import { Button } from './component//Button'
import { BlinkTest } from './component/BlinkTest'
import { Hello } from './component/Hello'

const H1 = h.h1({})

const view = h.div({})([

    Hello({ text: '1234', color: 'green' }),
    Button({ text: 'hello' }),

    BlinkTest({ timeout: 500 })([
        H1(t`hello aaaaaaaaaaaaaaaaa`),
        Hello({ text: '1234', color: 'red' })
    ])

])


appendChild(document.body, view)