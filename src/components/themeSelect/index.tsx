import React from 'react';

// Definindo a interface para as props do componente
interface ThemeSelectProps {
  settings: {
    theme: 'light' | 'dark' | 'system';
  };
  handleThemeChange: (value: 'light' | 'dark' | 'system') => void;
}

const ThemeSelect: React.FC<ThemeSelectProps> = ({ settings, handleThemeChange }) => {
  return (
    <div>
      <Label htmlFor="theme">Theme</Label>
      <Select
        id="theme"
        value={settings.theme}
        onValueChange={handleThemeChange}
        className="mt-1"
      >
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </Select>
    </div>
  );
};

// Componentes Label, Select e SelectItem
interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

interface SelectProps {
  id: string;
  value: 'light' | 'dark' | 'system';
  onValueChange: (value: 'light' | 'dark' | 'system') => void;
  className?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ id, value, onValueChange, className, children }) => (
  <select id={id} value={value} onChange={(e) => onValueChange(e.target.value as 'light' | 'dark' | 'system')} className={className}>
    {children}
  </select>
);

interface SelectItemProps {
  value: 'light' | 'dark' | 'system';
  children: React.ReactNode;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export default ThemeSelect;
