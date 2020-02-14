const getViewPortHeight = () => window.innerHeight || document.documentElement.clientHeight;

const checkLocation = ({ top, bottom }) => (top > 0 || bottom > 0) && top < getViewPortHeight();

const getRect = (element) => element.getBoundingClientRect();

const getData = ({ top, bottom }) => ({ top, bottom });

const isInViewPort = (element = {}) => checkLocation(getRect(element));

const getDirection = (previousPosition) => previousPosition - window.scrollY >= 0 ? 'UP' : 'DOWN';

const getElementData = (el, previousPos) => ({ ...getData(getRect(el)), direction: getDirection(previousPos) });

class Observer {
    constructor() {
        this.subscribers = [];
        this.previousScrollPosition = 0;
    }

    subscribe(data = {}) {
        this.subscribers.push(data);
        this.evaluate([data]);
    }

    evaluate(elements = []) {
        Object.values(elements)
            .filter(({ element }) => isInViewPort(element))
            .forEach(({ element, handler = () => {} }) => {
                handler(getElementData(element, this.previousScrollPosition));
            });
    }

    onScroll() {
        this.evaluate(this.subscribers);
        this.previousScrollPosition = window.scrollY;
    }
}

const scrollObserver = new Observer();

export default scrollObserver;

window.addEventListener('scroll', () => scrollObserver.onScroll());
