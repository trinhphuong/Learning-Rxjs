import { Observable, Observer } from 'rxjs';

let numbers = [1, 5, 10];

let source = Observable.create(observer => {
    for (let n of numbers) {
        if (n === 5) {
           observer.error("Something went wrong!");
        }
        observer.next(n);
    }
    observer.complete();
});

class MyObserver implements Observer<number>{
    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new MyObserver());