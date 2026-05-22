import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SessionUserInfo {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-session-storage',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent implements OnInit {
  private readonly storageKey = 'day6-user-info';

  userInfo: SessionUserInfo = {
    name: '',
    email: '',
    role: ''
  };

  savedUserInfo: SessionUserInfo | null = null;
  message = '';

  ngOnInit() {
    this.loadFromSessionStorage();
  }

  saveToSessionStorage() {
    const info: SessionUserInfo = {
      name: this.userInfo.name.trim(),
      email: this.userInfo.email.trim(),
      role: this.userInfo.role.trim()
    };

    if (!info.name || !info.email || !info.role) {
      this.message = 'Please fill all fields before saving.';
      return;
    }

    sessionStorage.setItem(this.storageKey, JSON.stringify(info));
    this.savedUserInfo = info;
    this.message = 'User info saved in session storage.';
  }

  loadFromSessionStorage() {
    const storedInfo = sessionStorage.getItem(this.storageKey);

    if (!storedInfo) {
      this.savedUserInfo = null;
      return;
    }

    this.savedUserInfo = JSON.parse(storedInfo) as SessionUserInfo;
    this.userInfo = { ...this.savedUserInfo };
  }

  clearSessionStorage() {
    sessionStorage.removeItem(this.storageKey);
    this.savedUserInfo = null;
    this.userInfo = {
      name: '',
      email: '',
      role: ''
    };
    this.message = 'Session storage data cleared.';
  }
}
