import { DNode } from '@guiurm/doom-kit';

export function setupCounter(node: DNode<HTMLButtonElement>) {
    let counter = 0;
    const setCounter = (count: number) => {
        counter = count;
        node.innexText(`count is ${counter}`);
    };
    node.on('click', () => setCounter(counter + 1));
    setCounter(0);
}
