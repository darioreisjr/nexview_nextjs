'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem } from '@/components/ui/select'; // Verifique a importação correta dos componentes de Select e SelectItem.
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Settings() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [notifications, setNotifications] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  const handleSaveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Bio:', bio);
    console.log('Notifications:', notifications);
    console.log('Theme:', theme);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleNotificationsChange = (checked: boolean) => {
    setNotifications(checked);
  };

  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    setTheme(value);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSaveSettings}
        className="w-full max-w-lg p-8 space-y-6 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center">Settings</h2>

        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={handleBioChange}
            className="mt-1"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={handleNotificationsChange} // Alterado para `onCheckedChange`
          />
        </div>

        <div>
          <Label htmlFor="theme">Theme</Label>
          <Select
            // id="theme"
            // value={theme}
            // onValueChange={handleThemeChange} // Alterado para `onValueChange`
            // className="mt-1"
          >
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </Select>
        </div>

        <Button type="submit" className="w-full mt-4">
          Save Settings
        </Button>
      </form>
    </div>
  );
}
