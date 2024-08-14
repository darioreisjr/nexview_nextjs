'use client';
import ThemeSelect from '@/components/themeSelect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem } from '@/components/ui/select'; // Verifique a importação correta dos componentes
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useState, ChangeEvent, FormEvent } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface SettingsForm {
  username: string;
  email: string;
  bio: string;
  notifications: boolean;
  theme: Theme;
}

export default function Settings() {
  const [settings, setSettings] = useState<SettingsForm>({
    username: '',
    email: '',
    bio: '',
    notifications: true,
    theme: 'light',
  });

  const handleSaveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Settings:', settings);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [id]: value,
    }));
  };

  const handleNotificationsChange = (checked: boolean) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      notifications: checked,
    }));
  };

  const handleThemeChange = (value: Theme) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: value,
    }));
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
            value={settings.username}
            onChange={handleInputChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={handleInputChange}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={settings.bio}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch
            id="notifications"
            checked={settings.notifications}
            onCheckedChange={handleNotificationsChange}
          />
        </div>

        <div>
          <ThemeSelect
            settings={settings}
            handleThemeChange={handleThemeChange}
          />
        </div>

        <Button type="submit" className="w-full mt-4">
          Save Settings
        </Button>
      </form>
    </div>
  );
}
