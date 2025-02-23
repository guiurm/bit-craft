import { defineApiConnector, get } from '@guiurm/api-connector';
import { dh } from '@guiurm/doom-kit';
import { setupCounter } from './counter.ts';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const app = document.querySelector<HTMLDivElement>('#app')!;
const container = dh('div', {});
const btnComponent = dh('button', {});

let update = () => {};
let store = 0;
container
    .append(
        dh('a', {})
            .setProps({ href: 'https://vitejs.dev', target: '_blank' })
            .append(
                dh('img', { class: 'logo' }).setProps({
                    src: viteLogo,
                    alt: 'Vite logo'
                })
            )
    )
    .append(
        dh('a', {})
            .setProps({ href: 'https://www.typescriptlang.org/', target: '_blank' })
            .append(dh('img', { class: ['logo vanilla'] }).setProps({ src: typescriptLogo, alt: 'TypeScript logo' }))
    )
    .append(dh('h1', {}).innexText('Vite + TypeScript'))
    .append(
        dh('div', { class: ['card'] }).append(
            btnComponent.setProps({ id: 'counter', type: 'button' }).innexText('count is 0')
        )
    )
    .append(
        dh('div', { class: 'flex flex-row p-3' })
            .append(
                dh(
                    'span',
                    {},
                    {
                        mounted: node => {
                            update = () => {
                                node.innexText('count is ' + store);
                            };
                            update();
                        }
                    }
                )
            )
            .append(
                dh(
                    'input:number',
                    {},
                    {
                        mounted(node) {
                            node.on('input', () => {
                                store = node.value;
                                update();
                            });
                        }
                    }
                ).setProps({ value: store.toString() })
            )
    )

    .append(dh('p', { class: ['read-the-docs'] }).innexText('Click on the Vite and TypeScript logos to learn more'));

app.appendChild(container.dom);

setupCounter(btnComponent);

const api = defineApiConnector({
    baseURL: 'https://httpbin.org'
});

api.request('get', '/get', null)
    .then(res => console.log('then', res))
    .catch(err => console.error('catch', err));
get('https://httpbin.org/get')
    .then(res => console.log('then', res))
    .catch(err => console.error('catch', err));
