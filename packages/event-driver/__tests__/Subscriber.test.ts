import { Subscriber } from '../src/Subscriber';

describe('AbsEventListener', () => {
    let subscriber: Subscriber<(num: number, s: string) => void>;

    beforeEach(() => {
        subscriber = new Subscriber();
    });

    it('should create an empty subscriber', () => {
        let eventDistpached = 0;
        subscriber.subscribe(() => {
            eventDistpached++;
        });
        expect(eventDistpached).toBe(0);
    });

    it('should listen events by distpach multiple times', () => {
        let eventDistpached: [number, string][] = [];
        subscriber.subscribe((n, s) => {
            eventDistpached.push([n, s]);
        });
        subscriber.distpach(1, 'a');
        subscriber.distpach(2, 'b');
        subscriber.distpach(3, 'c');
        expect(eventDistpached).toEqual([
            [1, 'a'],
            [2, 'b'],
            [3, 'c']
        ]);
    });

    it('should remove listener', () => {
        let eventDistpached: [number, string][] = [];
        let fn = (_n: number, _s: string) => {
            eventDistpached.push([_n, _s]);
        };

        subscriber.subscribe(fn);
        subscriber.distpach(1, 'a');
        subscriber.unSubscribe(fn);
        subscriber.distpach(2, 'b');
        expect(eventDistpached).toEqual([[1, 'a']]);
    });
});
