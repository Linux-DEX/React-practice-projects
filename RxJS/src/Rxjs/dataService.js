import { Subject } from "rxjs";

const dataSubject = new Subject();

export const sendData = (data) => {
  dataSubject.next(data);
};

export const onData = () => dataSubject.asObservable();
