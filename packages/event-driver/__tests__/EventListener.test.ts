import { TOptionalObjectRecursive } from '@guiurm/utility-types';
import { AbsEventListener } from '../src/AbsEventListener';

interface IEvents {
    first(): void;
    seccond(num: number): void;
    third(num: number, s: string): void;
}
class MyEventListener extends AbsEventListener<IEvents> {}

describe('AbsEventListener', () => {
    let listener: MyEventListener;

    beforeEach(() => {
        listener = new MyEventListener();
    });

    it('should create an empty event listener', () => {
        let eventDistpached = 0;
        listener.onAny(() => {
            eventDistpached++;
        });
        expect(eventDistpached).toBe(0);
    });

    it('should listen all events by onAny', () => {
        let eventDistpached = 0;
        listener.onAny(() => {
            eventDistpached++;
        });
        listener.dispatch('first');
        listener.dispatch('seccond', 1);
        listener.dispatch('third', 1, '');
        expect(eventDistpached).toBe(3);
    });

    it('should listen some events by on', () => {
        let eventDistpached: TOptionalObjectRecursive<{ [K in keyof IEvents]: number }> = {};
        listener.on(
            'first',
            () => (eventDistpached.first = eventDistpached.first !== undefined ? eventDistpached.first + 1 : 1)
        );
        listener.on(
            'seccond',
            () => (eventDistpached.seccond = eventDistpached.seccond !== undefined ? eventDistpached.seccond + 1 : 1)
        );
        /*listener.on(
            "third",
            () => (eventDistpached.third = eventDistpached.third !== undefined ? eventDistpached.third + 1 : 1)
        );*/
        listener.dispatch('first');
        listener.dispatch('seccond', 1);
        listener.dispatch('seccond', 1);
        listener.dispatch('third', 1, '');
        expect(eventDistpached).toEqual({ first: 1, seccond: 2 } as typeof eventDistpached);
    });

    it('should remove some events', () => {
        let eventDistpached: TOptionalObjectRecursive<{ [K in keyof IEvents]: number }> = {};
        listener.on(
            'first',
            () => (eventDistpached.first = eventDistpached.first !== undefined ? eventDistpached.first + 1 : 1)
        );

        listener.clearEvent(
            listener.on(
                'seccond',
                () =>
                    (eventDistpached.seccond = eventDistpached.seccond !== undefined ? eventDistpached.seccond + 1 : 1)
            ).eventId
        );

        listener.on(
            'third',
            () => (eventDistpached.third = eventDistpached.third !== undefined ? eventDistpached.third + 1 : 1)
        );
        listener.dispatch('first');
        listener.dispatch('seccond', 1);
        listener.dispatch('seccond', 1);
        listener.dispatch('third', 1, '');
        expect(eventDistpached).toEqual({ first: 1, third: 1 } as typeof eventDistpached);
    });
});
