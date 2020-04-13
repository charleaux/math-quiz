import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private users = ['Zoe', 'Lucas'];
  private currentUser: string;

  possibleUsers: BehaviorSubject<string[]>;
  currentUser$: BehaviorSubject<string>;

  constructor() {}

  getPossibleUsers(): Observable<string[]> {
    return this.possibleUsers.asObservable();
  }

  getCurrentUser(): Observable<string> {
    return this.currentUser$.asObservable();
  }

  getNextUser() {
    const availableusers = this.users.filter(
      (user) => user !== this.currentUser
    );
    const length = availableusers.length;

    const nextNumber = Math.floor(Math.random() * length);
    this.currentUser$.next(availableusers[nextNumber]);
  }
}
