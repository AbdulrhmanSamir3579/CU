import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/auth/auth";


@Injectable({
  providedIn: 'root'
})
export class UserStateService extends IUser {
  constructor() {
    super()
    this.detectUserState()
  }

  public detectUserState(): void {
    const userStorage = localStorage.getItem('user')
    const user = JSON.parse(userStorage ? userStorage : JSON.stringify(''))
    this.isLoggedIn.update(() => !!user)
    Object.assign(this, user)
  }

  updateUser(user: Partial<IUser>) {
    localStorage.setItem('user', JSON.stringify(user))
    this.detectUserState()
  }

  logout() {
    localStorage.removeItem('user')
    this.detectUserState()
  }

}


